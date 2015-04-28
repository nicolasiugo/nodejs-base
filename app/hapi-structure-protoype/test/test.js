var should   = require('should');
var probando = require('../server/helpers/probando.js');

describe('Probando', function() {
	describe('#prueba()', function() {
       it('should add two numbers', function() {
           var result = probando.prueba(3,4);

           result.should.be.exactly(7).and.be.a.Number;
       });
   });

	describe('#otraPrueba()', function() {
		it('should return 5 if parameter passed is grater than 5', function() {
			probando.otraPrueba(4).should.be.exactly(4);
			probando.otraPrueba(5).should.be.exactly(5);
			probando.otraPrueba(6).should.be.exactly(5);
		});
	});
});