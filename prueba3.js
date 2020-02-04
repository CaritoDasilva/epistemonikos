
var describe = require('mocha').describe;
var assertions = require('mocha').it;
var assert = require('assert');


var ParseBoolean = (search) => {

    /* Uncluir acá el código de la prueba de selección */

    return true
}

describe('Prueba 3', function() {
  describe('Parser expresión booleana', function() {
    it('Debería evaluar una expresión booleana NOT', function() {
      assert.deepEqual(ParseBoolean("!(f)"), true);
    });
    it('Debería evaluar una expresión booleana AND', function() {
      assert.deepEqual(ParseBoolean("&(t,t,f)"), false);
    });
    it('Debería evaluar una expresión booleana OR', function() {
      assert.deepEqual(ParseBoolean("|(f,!(f))"), true);
    });
    it('Debería evaluar una expresión booleana compleja', function() {
      assert.deepEqual(ParseBoolean("|(!(t),&(t,f,t))"), false);
    });
  });
});