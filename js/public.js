function $(selector) {
    return document.querySelectorAll(selector);
}

// 获取样式 兼容写法
function getStyle(elm, style) {
    if (typeof getComputedStyle === 'function') {
        return getComputedStyle(elm)[style];
    } else {
        return elm.currentStyle[style];
    }
}

function getNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 事件添加
function addEvent(elm, type, callback) {
    if (elm.addEventListener) { // 判断是否支持DOM2级
        elm.addEventListener(type, callback);
    } else if (elm.attachEvent) { //判断是否支持ie事件处理
        elm.attachEvent('on' + type, callback);
    } else { // DOM 0级
        elm['on' + type] = callback;
    }
}

// 移除事件
function removeEvent(elm, type, callback) {
    if (elm.removeEventListener) {
        elm.removeEventListener(type, callback);
    } else if (elm.detachEvent) {
        elm.detachEvent('on' + type, callback);
    } else {
        elm['on' + type] = null;
    }
}