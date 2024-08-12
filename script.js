const cells = document.getElementsByClassName("item");
let winner = document.getElementsByClassName("winn-none")[0];
let XfirstTurn = ["X","O","X","O","X","O","X","O","X"];
let OfirstTurn = ["O","X","O","X","O","X","O","X","O"];
let win =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let dicep1 = document.getElementsByClassName("g-1-dice")[0];
let dicep2 = document.getElementsByClassName("g-2-dice")[0];
let p1turn = document.getElementsByClassName("p-1-turn")[0];
let p2turn = document.getElementsByClassName("p-2-turn")[0];
let p1turn_2 = document.getElementsByClassName("p-1-t")[0];
let p2turn_2 = document.getElementsByClassName("p-2-t")[0];
var count = 0;
var theWinner = "none";
let guess = document.getElementsByClassName("guess-hidden")[0];
var you = "";


function clickBox(ele){
    if(ele.children[0].textContent == ""){
        ele.children[0].textContent = XfirstTurn[count];
        // turn.textContent = XfirstTurn[count + 1];
        
        count++;
        win.forEach(checker);
        if (p1turn.textContent == "X") {
          p2turn.textContent = "O";
          p1turn.textContent = "";
          p2turn_2.textContent = "O";
          p1turn_2.textContent = "";
        } else if (p1turn.textContent == "O") {
          p2turn.textContent = "X";
          p1turn.textContent = "";
          p2turn_2.textContent = "X";
          p1turn_2.textContent = "";
        } else if (p2turn.textContent == "X") {
          p1turn.textContent = "O";
          p2turn.textContent = "";
          p1turn_2.textContent = "O";
          p2turn_2.textContent = "";
        } else if (p2turn.textContent == "O") {
          p1turn.textContent = "X";
          p2turn.textContent = "";
          p1turn_2.textContent = "X";
          p2turn_2.textContent = "";
        }
    }
    if(theWinner != "none" || count == 9){
        if(you == theWinner){
            winner.children[0].textContent = "You won :)";
        } else if (you != theWinner) {
            winner.children[0].textContent = "You Lost :(";
        } else {
            winner.children[0].textContent = "oops Draw";
        }
        winner.className = "winn"
        p1turn.textContent = "";
        p2turn.textContent = "";
        p1turn_2.textContent = "";
        p2turn_2.textContent = "";
        setTimeout(() => {
        winner.className = "winn-none";
        window.theWinner = "none";
        window.count = 0;
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerHTML = " ";
        }
        }, 1500);
    }
    }

function checker(el){
    if(cells[el[0]].textContent == "X" && cells[el[1]].textContent == "X" && cells[el[2]].textContent == "X"){
        window.theWinner = "X";
        return theWinner;
    } else if (cells[el[0]].textContent == "O" && cells[el[1]].textContent == "O" && cells[el[2]].textContent == "O") {
        window.theWinner = "O";
        return theWinner;
    }
    return null;
}

function clear(ment){
    ment.textContent = "";
}

function lightoff() {
  dicep1.style.opacity = 0;
  dicep2.style.opacity = 0;
}
function lighton() {
  dicep1.style.opacity = 1;
  dicep2.style.opacity = 1;
}

function play(){
    for (let i = 0; i < cells.length; i++) {
            cells[i].innerHTML = "";
        }
        window.you = "";
    guess.className = "guess"
    let ran1 = Math.floor(Math.random() * 6 + 1);
    let ran2 =  Math.floor(Math.random() * 6 + 1);
    
    dicep1.src = `Set/dice-${ran1}.svg`;
    dicep2.src = `Set/dice-${ran2}.svg`;
    p1turn_2.textContent = "";
    p2turn_2.textContent = "";
    p1turn.textContent = "";
    p2turn.textContent = "";
    setTimeout(() => {
        if(ran1 > ran2){
            p1turn.textContent = XfirstTurn[0];
            p1turn_2.textContent = XfirstTurn[0];
            window.you = "O";
            setTimeout(() => {
                guess.className = "guess-hidden";
            }, 1000);
        } else if(ran1 < ran2) {
            p2turn.textContent = XfirstTurn[0];
            p2turn_2.textContent = XfirstTurn[0];
            window.you = "X";
            setTimeout(() => {
              guess.className = "guess-hidden";
            }, 1000);
        } else {
            for (let i = 0; i < cells.length; i++) {
              cells[i].innerHTML = " ";
            }
            setTimeout(lightoff , 100);
            setTimeout(lighton , 200);
            setTimeout(lightoff , 300);
            setTimeout(lighton , 400);
            setTimeout(lightoff , 500);
            setTimeout(lighton , 600);
             setTimeout(() => {
               guess.className = "guess-hidden";
             }, 700);
        }
    }, 500);

}



