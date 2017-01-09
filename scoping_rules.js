function varTest() {
  var x = 31;
  if (true) {
    var x = 71;
    console.log(x);
  }
  console.log(x);
}

function letTest() {
  let x = 31;
  if (true) {   //block scope
    let x = 71;
    console.log(x);
  }
  console.log(x);
}

varTest();
letTest();
