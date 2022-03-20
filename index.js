let pos=0;
function move(){
  let img_list=['img1.jpg','img2.jpg','img3.jpg'];
  
 
  if(pos<img_list.length-1){
      pos++;
  }
  else{
      pos=0;
  }
  var mon_img=img_list[pos];
  document.getElementById("head").src="head/"+mon_img;
  setTimeout(move,3000);

 }
 move();

 function show(){
    var show=document.getElementById("show");
    show.style.display="block";
}
function hide(){
    var show2=document.getElementById("show");
    show2.style.display="none";
}
let counts=setInterval(update,100);
let upto=0;
function update(){
    for(var x=0;x<4;x++){
    var count=document.getElementsByClassName("nbr")[x];
    count.innerHTML=++upto;
    if(upto===450){
        clearInterval(counts);
    }}
}

function  display(){
    var chose1=document.getElementById('chose1');
    var chose2=document.getElementById('chose2');
    var btn1=document.getElementById('hiba');
    var btn2=document.getElementById('ziaf');
    btn2.style.borderTop="none";
    btn1.style.borderTop="2px solid black";
   
    chose1.style.display='block';
    
    chose2.style.display='none';
}
function  display2(){
    var chose1=document.getElementById('chose1');
    var chose2=document.getElementById('chose2');
    var btn1=document.getElementById('hiba');
    var btn2=document.getElementById('ziaf');
    btn1.style.borderTop="none";
    btn2.style.borderTop="2px solid black";
    
    chose2.style.display='block';
    
    chose1.style.display='none';
}
 