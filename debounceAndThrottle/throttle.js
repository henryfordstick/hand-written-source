/**
 * @desc 函数节流 时间戳版
 * @param fn 函数
 * @param wait 间隔时间
 */
function throttle1(fn,wait) {
    let prev = Date.now();
    return (...args) => {
        const now = new Date();
        if(now - prev >= wait){
            fn.apply(this,args);
            prev  = Date.now();
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
        var previous = 0;
    }else if(type===2){
        var timer = null;
    }

    return (...args) => {
        if(type === 1){
            let now = Date.now();
            if(now - previous > wait){
                fn.apply(this,args);
            }
        } else if(type === 2) {
            if(!timer){
                timer = setTimeout(() => {
                    timer = null;
                    fn.apply(this,args);
                },wait)
            }
        }
    }
}

