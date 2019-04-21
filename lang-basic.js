/**
 * js basic 
 */

/**
 * array 
 */

/**
 * spread
 */
function arraySpread() {
console.log(...[1, 2, 3]);
}

function arrayPush(array, ...items) {
  array.push(...items);
}

function add(x, y) {
  return x + y;
}

const nums = [1, 2];
add(...nums);

// clone array [浅拷贝]
const a2 = [...a1];

/**
 * Array.from
 */

let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

let arr2 = Array.from(arrayLike);

/**
 * Array.of
 */

Array.of(3, 11, 8)

Array.of(3) // [3]

Array(3) // [,,]

/**
 * copyWithin
 */

[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

/**
 * find findIndex
 */

[1, 4, -5, 10].find((n) => n < 0)
// -5

[1, 4, -5, 10].findIndex((n) => n < 0)
// 2

// 这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。
function f(v){
  return v > this.age;
}
let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);    // 26

/**
 * fill
 */

['a', 'b', 'c'].fill(7)
// [7, 7, 7]

['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']

/**
 * entries, keys, values
 */

for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"

/**
 * includes
 */

[1, 2, 3].includes(2)     // true

/**
 * object
 */

/**
 * 简介
 */

const foo = 'bar';

const Pe = {
  foo,
  _gfoo: 'good',
  bar() {
    // do sth
  }
  get gfoo(){
    return rhis.gfoo;
  }
  set gfoo(v){
    this._gfoo = v + ' ---';
  }
}

/**
 * 属性名表达式
 */

let propKey = 'foo';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};

/**
 * 解构赋值
 */

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

/**
 * 扩展运算符
 */

let z = { a: 3, b: 4 };
let n = { ...z };

// defaults

let e = {
  e: 1,
};

let f = {
  f: 1,
  e: 2,
};

let ef = { ...e, ...f };


