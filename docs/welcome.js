
console.log("hello");
var i = 1;
function cardFlip(){
     console.log("card" + i.toString())
    anime({
        targets: document.getElementsByClassName("card")[i - 1],
        loop: false,
        translateX: 1000,
        translateY: -500,
        rotate: '1turn',
        duration: 10000
      });

      //Make the card flip from the top rather than bottom
      var div = document.getElementsByClassName("card")[i - 1];
      document.getElementsByClassName("card")[i -1].style.boxShadow = 'none';
      document.getElementsByClassName("card")[i].style.visibility = 'visible';
      //setTimeout(() => {div.remove()}, 10000);
    i++;
}

function showBut(){
    for(var index =  0; index < 4; index++){
        document.getElementsByClassName("welcBut")[index].style.visibility = 'visible';
    }
    document.getElementsByClassName("arrow")[0].style.visibility = "hidden";
    document.getElementsByClassName("arrowText")[0].style.visibility = "hidden";
}
