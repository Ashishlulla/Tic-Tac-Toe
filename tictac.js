let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg")
let newgame=document.querySelector(".new-game")

let turnO= true;// Player X,PlayerO

const wining_pattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Button was clicked !!!");
        if(turnO==true){
            box.innerText="X";
            turnO=false;

        }else{
            box.innerText="O";
            turnO=true;
            console.log(box.getAttribute("id"));
        }
        box.disabled= true;
        checkwinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
}


const showwinner=(winner)=>{
    msg.classList.remove("hide");
    msg.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
    for(pattern of wining_pattern){
        let posn1=boxes[pattern[0]].innerText;
        let posn2=boxes[pattern[1]].innerText;
        let posn3=boxes[pattern[2]].innerText;
        if(posn1 !="" && posn2 !="" && posn3 !=""){
            if(posn1===posn2 && posn2===posn3){
                showwinner(posn1);

            }

        }else{

        }


        
    }
}


const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}

resetbtn.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);