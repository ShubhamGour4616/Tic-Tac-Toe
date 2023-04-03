let turn='X';
function trunF(){
  turn = turn==='X'? 'O':'X';
}
let turnaudio=new Audio("music/turnaudio.mp3");
let gameoveraudio=new Audio("music/wintone.wav");
let resetaudio=new Audio("music/resetaudio.wav");


function winF(){
   var cellsn=document.getElementsByClassName("cell");
    winarr.forEach(e=>{
     if(cellsn[e[0]].innerText!=='' && cellsn[e[0]].innerText===cellsn[e[1]].innerHTML && cellsn[e[1]].innerText ===cellsn[e[2]].innerText){
      e.forEach(element=>{ 
        cellsn[element].classList.add("fillColor");
      })
      gameoveraudio.play();
      if(cellsn[e[0]].innerText=='X'){
        document.getElementById("wingame").innerHTML= "Win : X ";
        
      }
      else{
        document.getElementById("wingame").innerHTML= "Win : O ";
      }
    displayBlocAfterWin();
     }
   });

}

let cells=document.getElementsByClassName("cell");
const cellarr= Array.from(cells);
cellarr.forEach(element => {
  element.addEventListener('click',()=>{
       element.innerHTML=turn;
       turnaudio.play();
       element.classList.add("disable");
       trunF();
       winF();
  })
  
});

let winarr=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

// reset the game 

btn.addEventListener('click',reset);

function reset(){
    resetaudio.play();
cellarr.forEach(e=>{
e.innerText="";
e.classList.remove("disable");
e.classList.remove("fillColor");
document.getElementById("wingame").innerHTML= "";

turn='X';
});
}

function displayBlocAfterWin(){
    cellarr.forEach(e=>{
        e.classList.add("disable");
        });
}





  
  