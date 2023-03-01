
var { indexMin, indexMax} = require('../../array') 


describe('Funcionalidade lista', () => {
    it('Valida index do primeiro número da lista', () => {
        expect(indexMin).toBe(-1)
        expect(indexMax).toBe(8)

    });
});