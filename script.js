
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
/* ВЫВОДИТ  ТАК  
Я УЧУ:  JavaScript
Я ПРОШЕЛ ЭТОТ УРОК */



function LEARN_JS(lang,callback) {
  console.log(`Я УЧУ:  ${lang}`);
  callback();
  }
  
  function DONE () {
    console.log('Я ПРОШЕЛ ЭТОТ УРОК');
  }

  LEARN_JS('JavaScript', DONE );
  /* ВЫВОДИТ  ТАК  
Я УЧУ:  JavaScript
Я ПРОШЕЛ ЭТОТ УРОК */
  















