let boxes=document.querySelectorAll(".box1");
let reset_button=document.querySelector("#reset-butt");
let restart_button=document.querySelector("#restart-butt");
let msg_container = document.querySelector(".msg_container ");
let msg_winner=document.querySelector(".msg");

let player1=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disable_box=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enable_box=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="rgb(55, 55, 87)";
    }
}

const restart_Game=()=>{
    player1=true;
    enable_box();
    msg_container.classList.add("hide");

}

restart_button.addEventListener("click",restart_Game);
reset_button.addEventListener("click",restart_Game);

const showWinner=(Winner)=>{
    msg_winner.innerText=`Congratulations ,Winner is ${Winner}`;
    msg_container.classList.remove("hide");
    disable_box();
   

}

const check_winner=()=>{
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
               
            
        }
    }
    
    
}
const changeStyle = ()=>{
    box1.addEventListener
} 
const check_game=boxes.forEach((box1)=>{
    box1.addEventListener("click",()=>{
        
        if(player1===true){
            box1.innerText="0";
            box1.style.backgroundColor="white";
            

            player1=false;
        }
        else{
            box1.innerText="X";
            
            player1=true;

        }
        box1.disabled="true";
        check_winner();
        
    })

})

