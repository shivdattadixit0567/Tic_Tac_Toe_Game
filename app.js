let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let winner = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let gameBtn = document.querySelector(".start");
// winner.hidden = true;
winner.classList.add("hide")
let turn0 = false;

const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame = () =>{
    turn0 = false;
    enableBoxes();
    winner.classList.add("hide");
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (val) =>{
    msg.innerText = `Winner is ${val}`;
    winner.classList.remove("hide");
    disableBoxes();
}

boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            if(turn0===true){
                box.innerText = "O";
                console.log(`box is clicked!`)
                turn0 = false;
            }else if(turn0===false){
                box.innerText = "X";
                console.log(`box is clicked`);
                turn0 = true;
            }
            box.disabled = true;
            let val = checkWinner()
            if(val==='X'||val==='O'){
                showWinner(val);
                // winner.innerText = `Winner is ${val}`;
            }
        })
})

const checkWinner = () =>{
    for(let pattern of winningPattern){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if((val1==='X'&&val2==='X'&&val3==='X')||(val1==='O'&&val2==='O'&&val3==='O')){
            return val1;
        }
    }
    return null;
}
if(resetBtn){
    resetBtn.addEventListener("click",resetGame);
}
gameBtn.addEventListener("click",resetGame);
