// 继承
var Func1 = function () {
    this.name = 'func1'
}
var Func2 = function () {
    Func1.call(this)
    this.say = 'this is func2'
}
Func2.prototype = Func1.prototype
Func2.prototype.cousturctor = Func2

// 判断是否是数字
var isNumber = function (val) {
    return typeof val === 'number' && isFinite(val)
}

// 判断是否是数组，不同帧或窗口创建的数组也可以判断。
var isArray = function (val) {
    return Object.prototype.toString.apply(val) === '[object Array]'
}

// 遍历对象所有属性
for (var name in object) {
    //过滤掉原型链上的属性
    if (object.hasOwnProperty(name)) {
        console.log(name)
    }
}

// 字符串数组元素排序
var array = ['aa', 'A', 'b', 'a', 'ccc', 'dsfw', 'N', 'B']
array.sort(function (a, b) {
    return a.localeCompare(b)
})

// ---------------------------------------------------------
// 简单封装  Fetch：
/**
 * 将对象转成 a=1&b=2的形式
 * @param obj 对象
 */
function obj2String (obj, arr = [], idx = 0) {
    for (let item in obj) {
        arr[idx++] = [item, obj[item]]
    }
    return new URLSearchParams(arr).toString()
}

/**
 * 真正的请求
 * @param url 请求地址
 * @param options 请求参数
 * @param method 请求方式
 */
function commonFetcdh (url, options, method = 'GET') {
    const searchStr = obj2String(options)
    let initObj = {}
    if (method === 'GET') { // 如果是GET请求，拼接url
        url += '?' + searchStr
        initObj = {
            method: method,
            credentials: 'include'
        }
    } else {
        initObj = {
            method: method,
            credentials: 'include',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: searchStr
        }
    }
    fetch(url, initObj).then((res) => {
        return res.json()
    }).then((res) => {
        return res
    })
}

/**
 * GET请求
 * @param url 请求地址
 * @param options 请求参数
 */
function GET (url, options) {
    return commonFetcdh(url, options, 'GET')
}

/**
 * POST请求
 * @param url 请求地址
 * @param options 请求参数
 */
function POST (url, options) {
    return commonFetcdh(url, options, 'POST')
}
// --------------------------------------------------------------