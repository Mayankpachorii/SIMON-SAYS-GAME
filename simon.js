let gameseq=[];
let userseq=[];

let btns=["red","green","yellow","purple"]; 

let h2=document.querySelector("h2");

let w=0;

let started=false;
let level =0;
document.addEventListener("keypress",function(){
   if(started==false) 
    { console.log("game started");
        started=true;
    
    levelup();
    }
});

function btnflash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");
 },100);    
}

function userflash(btn){
 btn.classList.add("userflash");
 setTimeout(function(){
    btn.classList.remove("userflash");
 },100);    
}

function levelup(){
    userseq=[];
    level++;
  h2.innerText=`Level ${level}`;
//random btn choose
let a= Math.floor(Math.random()*3);
let randcolor=btns[a];
let randbtn=document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
console.log(gameseq);   
  btnflash(randbtn);
}

function checkAns(idx){    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
  h2.innerHTML=`Game over ! your score was <b> ${level} <b> <br>press any key to start.`;    
  reset();
 document.querySelector("body").classList.add("wrong");
 setTimeout(function(){ document.querySelector("body").classList.remove("wrong");},150)

    }
}
//Now to add event listner.
function btnpress(){
    
    let btn= this;
    userflash(btn);
 userColor = btn.getAttribute("id");
 console.log(userColor);
 userseq.push(userColor);

 checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);  
}

function reset(){
    started=false;
    gameseq=[]; 
    userseq=[];
    level=0;
}