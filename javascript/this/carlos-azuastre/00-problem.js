var obj = {
  foo: () => 'foo',
  bar: function () {
    document.addEventListener('click',  event => this.foo())
  },
}

console.log(obj.foo());
console.log(obj.bar()); // undefined


