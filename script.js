
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