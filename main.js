con1.innerText=null;
function buttonPressed(id){
let value1=document.getElementById(id).value;
con1.innerText+=value1;
}
var a=0;
var op;
function operatorPressed(id){
     a++;
     var operator = document.getElementById(id).value;
     op=operator;
     con1.innerText+=operator;
}

buttonac.addEventListener('click',function(){
    con1.innerText=null;
    con2.innerText=null;

})

function EqualButtonPressed(){
    try{
     con2.innerText=eval(con1.innerText);
    }
    catch(error){
        alert('Exception accured')
    }
}
function reversesign(){
    if(eval(con1.innerText)>0){
        con1.innerText='-'+con1.innerText;
    }
    else{
        con1.innerText='+'+con1.innerText;
    }
   
}
function remove(){
    let x = con1.innerText;
    const y = x.toString().split('').slice(0, -1).join('')
    if(y==0){
        con1.innerText=null
    }
    else{
        con1.innerText = Number(y)
    }
   
}
