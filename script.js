let result = document.getElementById('textbox');
let calculate=(num)=>{
  result.value += num;
}

let equals=()=>{
   try {
    result.value = eval(result.value);
    
   } catch (error) {
     alert("Entered input is invalid");
     clr();
   }
}

function clr(){
    result.value = "";
}

function del(){
    result.value = result.value.slice(0,-1);
}