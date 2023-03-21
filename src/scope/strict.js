'use strict';
pi = 3.1416; // pi is not defined
console.log(pi);

function myFunction(){
    'use strict';
    return pi = 3.1416; // pi is not defined
}

console.log(myFunction());