/**
 * @desc 函数防抖 非立即执行版
 * @param fn 函数
 * @param delay 延迟执行毫秒数
 */
function debounce1(fn,delay) {
    let timer = null;

    return (...args) => {

        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this,args);
        },delay);
    }
}


/**
 * @desc 函数防抖 立即执行版
 * @param fn 函数
 * @param delay 延迟执行毫秒数
 */
function debounce2(fn,delay) {
    let timer = null;
    return (...args) => {
        if (timer) clearTimeout(timer);

        let callNow = !timer;

        timer = setTimeout(() => {
            timer = null;
        },delay);

        if(callNow) fn.apply(this,args);
    }
}


/**
 * @desc 函数防抖
 * @param fn 函数
 * @param delay 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */

function debounce(fn,delay,immediate) {
    let timer = null;


    return (...args) => {
        if(timer) clearTimeout(timer);

        if(immediate){
            let callNow = !timer;

            timer = setTimeout(() => {
                timer = null;
            },delay);

            if(callNow) fn.apply(this,args);
        } else {
            timer = setTimeout(() => {
                fn.apply(this,args);
            },delay);
        }
    }
}

