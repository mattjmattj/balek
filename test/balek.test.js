
var should = require('should')
var balek = require("../src/balek")

describe("balek", function() {
    
    it("doit s'en battre les couilles des erreurs dont on se bat les couilles", function() {
        var jeMEnBatsLesCouillesFrere = balek(TypeError)
        
        var fn = jeMEnBatsLesCouillesFrere(function() {
            null.foo()
        })
        
        should(fn).not.throw()
        
    })
    
    
    it("ne doit pas se battre les couilles des autres erreurs", function() {
        var jeMEnBatsLesCouillesFrere = balek(TypeError)
        
        var fn = jeMEnBatsLesCouillesFrere(function() {
            throw new Error()
        })
        
        should(fn).throw()
        
    })
    
    it("ne doit pas se battre les couilles des arguments et des valeurs de retour", function() {
        var jeMEnBatsLesCouillesFrere = balek(TypeError)
        
        var fn = jeMEnBatsLesCouillesFrere(function(msg, val) {
            return {msg:msg, val:val}
        })
        
        fn("foobar",1234567).should.eql({msg:"foobar",val:1234567})
    })
})
