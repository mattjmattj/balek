module.exports = function(ErrorType) {
    return function(fn) {
        return function() {
            try {
                return fn.apply(this, arguments)
            } catch (e) {
                if (e instanceof ErrorType) {
                    // je m'en bats les couilles, frère
                } else {
                    throw e
                }
            }
        }
    }
}