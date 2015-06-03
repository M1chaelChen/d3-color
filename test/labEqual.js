var tape = require("tape"),
    color = require("../");

tape.Test.prototype.labEqual = function(actual, l, a, b) {
  this._assert(actual instanceof color.lab
      && (isNaN(l) ? isNaN(actual.l) && actual.l !== actual.l : l - 1e-6 <= actual.l && actual.l <= l + 1e-6)
      && (isNaN(a) ? isNaN(actual.a) && actual.a !== actual.a : a - 1e-6 <= actual.a && actual.a <= a + 1e-6)
      && (isNaN(b) ? isNaN(actual.b) && actual.b !== actual.b : b - 1e-6 <= actual.b && actual.b <= b + 1e-6), {
    message: "should be equal",
    operator: "labEqual",
    actual: [actual.l, actual.a, actual.b],
    expected: [l, a, b]
  });
};
