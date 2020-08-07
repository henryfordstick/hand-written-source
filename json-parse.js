//一、 直接调⽤ eval ,它会执⾏JS代码，有XSS漏洞。 所以对参数要进行校验

function jsonParse(opt) {
    let rx_one = /^[\],:{}\s]*$/;
    let rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    let rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-
]?\d+)?/g;
    let rx_four = /(?:^|:|,)(?:\s*\[)+/g;

    if (
        rx_one.test(
            opt
                .replace(rx_two, "@")
                .replace(rx_three, "]")
                .replace(rx_four, "")
        )
    ) {
        return eval("(" + opt + ")");
    }


    return null;
}

jsonParse(jsonStringify({x : 5}));
// Object { x: 5}
jsonParse(jsonStringify([1, "false", false]));
// [1, "false", false]
jsonParse(jsonStringify({b: undefined}));
// Object { b: "undefined"}


// Function版本
let jsonStr = '{ "age": 20, "name": "jack" }';
let json = (new Function('return ' + jsonStr))();

// https://github.com/youngwind/blog/issues/115

