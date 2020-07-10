function MyNew(fn) {
    let res = {};
    if(fn.prototype !== null) {
        res.__proto__ = fn.prototype;
    }
    let ret = fn.apply(res,Array.prototype.slice.call(arguments,1));

    if((typeof ret === "object" || typeof ret === "function") && ret !== null){
        return ret;
    }

    return res;
}