var assert = require('assert');
var idioma = require('../ejercicio-01.js');

//don't touch this code
describe('holaMundo', function (){
  it('Should return in Spanish', function(){
    assert.equal(idioma.holaMundo("es"),"Hola Mundo!")
  });
  it('Should return in English', function(){
    assert.equal(idioma.holaMundo("en"), "Hello World!")
  });
  it('Should return in Aleman', function(){
    assert.equal(idioma.holaMundo("de"), "Hallo Welt!");
  });
  it('Should not accept any wrong param type', function(){
    assert.equal(idioma.holaMundo(1), "Error de dato");
  });
  it('Should not accept if the param of function is missing', function(){
    assert.equal(idioma.holaMundo(undefined), "Error");
  })


});
