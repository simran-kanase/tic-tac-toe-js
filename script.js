let boxes = document.querySelectorAll(".box");
let resetBtn=document.getElementById("reset-btn");
let turnO = true;
let newGameBtn = document.getElementById("new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];



const resetgame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const enableBoxes = ()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO = false;
        }
        else
        {
            box.innerText="X"
            turnO = true;
        }
        box.disabled = true;

        if(!checkWinner()){
            checkTie();
        }
    });
});

const showWinner = (winner)=>{
    msg.innerText ="Congratulations...! ,Winner is " + winner;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const showTie = () => {
    msg.innerText = "It's a tie!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = ()=>{
    for(let pattern of winPatterns){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val !== "" && pos1Val === pos2Val && pos1Val === pos3Val) {
            console.log("Winner: " + pos1Val);
            showWinner(pos1Val);
            disableBoxes();
        }
    }
};

const checkTie = () => {
    let allBoxesFilled = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            allBoxesFilled = false;
            break;
        }
    }
    if (allBoxesFilled) {
        showTie();
    }
};

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
newGameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame)