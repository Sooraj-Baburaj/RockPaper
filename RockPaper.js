//Computer's output display
let comp = document.getElementById('comp');
//Player's input display
let my = document.getElementById('my');
let compScore =document.getElementById('CompScore');
let MyScore =document.getElementById('MyScore');

function randomComp(val) {
    let x = Math.floor(Math.random() * 10);
    let foo = null;
    if(x<=3) {
        comp.src ="Rock.png";
        foo=1;
    }else if(x<=6 && x>3) {
        comp.src = "paper.png";
        foo =2;
    }else if(x<10 && x>6) {
        comp.src = "Scissors.png";
        foo=3;
    };
    if( foo ==1 && val== 2) {
        MyScore.innerHTML = parseInt(MyScore.innerHTML) +1;
    }else if(foo==1 && val== 3) {
        compScore.innerHTML = parseInt(compScore.innerHTML) +1;
    }else if(foo==2 && val ==1) {
        compScore.innerHTML = parseInt(compScore.innerHTML) +1;
    }else if(foo==2 && val ==3) {
        MyScore.innerHTML = parseInt(MyScore.innerHTML) +1;
    }else if(foo==3 && val == 2) {
        compScore.innerHTML = parseInt(compScore.innerHTML) +1;
    }else if(foo==3 && val == 1) {
        MyScore.innerHTML = parseInt(MyScore.innerHTML) +1;
    }
}


function inputRock() {
    my.src = "Rock.png" ;
    randomComp(1);
}
function inputPaper() {
    my.src = "paper.png"
    randomComp(2);
}
function inputScissors() {
    my.src = "Scissors.png"
    randomComp(3);
}
function reset() {
    MyScore.innerHTML = 0;
    compScore.innerHTML = 0;
}
