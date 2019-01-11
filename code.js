
var pole = document.createElement("div");
document.body.appendChild(pole);
pole.classList.add("osnova");

var figw=["&#9814;","&#9816;","&#9815;","&#9819;","&#9812;","&#9815;","&#9816;","&#9814;"];
var c = 1;
   for(q=0;q<4;q++){
for(var i =0;i<8;i++){
  
    if(i%2==0){
var doska = document.createElement("div");
document.getElementsByClassName("osnova")[0].appendChild(doska);
doska.style.backgroundColor = "black"; 
    }
    
   else if(i%2!=0){
var doska = document.createElement("div");
document.getElementsByClassName("osnova")[0].appendChild(doska);
doska.style.backgroundColor = "white";
    }
    
   if(q==0){
doska.innerHTML='<h2>'+figw[i]+'</h2>';
    
   }
    if(q==3){
     doska.innerHTML='<h3>&#9823;</h3>';
   }
    c++;
}
       
for(var i =0;i<8;i++){
    if(i%2==0){
var doska = document.createElement("div");
document.getElementsByClassName("osnova")[0].appendChild(doska);
doska.style.backgroundColor = "white";
    }
   else if(i%2!=0){
var doska = document.createElement("div");
document.getElementsByClassName("osnova")[0].appendChild(doska);
doska.style.backgroundColor = "black";
    }
    if(q==0){
    doska.innerHTML='<h2>&#9817;</h2>';
   }
    if(q==3){
   doska.innerHTML='<h3>'+figw[i]+'</h3>';
   }
}         
   }
