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
  }
}