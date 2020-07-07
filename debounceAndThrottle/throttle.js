/**
 * @desc 函数节流 时间戳版
 * @param fn 函数
 * @param wait 间隔时间
 */
function throttle1(fn,wait) {
    let previous = 0;

    return (...args) => {
        let now = Date.now();
        if(now - previous > wait){
            fn.apply(this,args);
        }
    }
}


/**
 * @desc 函数节流 定时器版
 * @param fn 函数
 * @param wait 间隔时间
 */
function throttle2(fn,wait) {
    let timer = null;

    return (...args) => {
        if(!timer){
            timer = setTimeout(() => {
                timer = null;
                fn.apply(this,args);
            },wait)
        }
    }
}


/**
 * @desc 函数节流 定时器版
 * @param fn 函数
 * @param wait 间隔时间
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(fn,wait,type) {
    if(type===1){
        let previous = 0;
    }else if(type===2){
        let timer;
    }

    return (...args) => {
        if(type === 1){
            let now = Date.now();
            if(now - previous > wait){
                fn.apply(this,args);
            }
        } else {
            if(!timer){
                timer = setTimeout(() => {
                    timer = null;
                    fn.apply(this,args);
                },wait)
            }
        }
    }
}

