# balek

"Je m'en bats les couilles, frère." 

Une librairie qui permet de faire fi de certaines erreurs

[![Kaaris est dithyrambique à propos de cette librairie](http://img.youtube.com/vi/GMvI9HG2Uk4/0.jpg)](https://www.youtube.com/watch?v=GMvI9HG2Uk4)

## Usage

```javascript

var balek = require("balek")

function foobar(obj) {
    obj.foo()
}

foobar(null) // throws TypeError

foobar2 = balek(TypeError)(foobar)
foobar2(null) // s'en bat les couilles
```