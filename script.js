
"use strict";

function FIRST () {

  setTimeout(function() {
    console.log(1);
  }, 1500);
}

function SECOND() {
  console.log(2);
}

FIRST();
SECOND ();
 

function LEARN_JS(lang,callback) {
console.log(`Я УЧУ:  ${lang}`);
callback();
}

LEARN_JS('JavaScript', function(){
console.log('Я ПРОШЕЛ ЭТОТ УРОК')
});




















