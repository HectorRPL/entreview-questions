let obj = {
  foo: function () {return 'foo'},
  bar: function () {
    // var that = this; // hack
    document.addEventListener('click', function (event) {
      this.foo() // that.foo // hack
    }).bind(this)
  },
}


