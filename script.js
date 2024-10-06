const lowercaseletter="abcdefghijklmnopqrstuvwxyz";
const uppercaseletter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number="0123456789";
const symbol="~ ! @ # $ % ^ & * ( ) _ + - = { } [ ] : ; \" ' < > , . ? / \ |";
const lengthEL=document.getElementById('length');
const lowercaseEL=document.getElementById('chk_Lowercase');
const uppercaseEL=document.getElementById('chk_Uppercase');
const numbrsEL=document.getElementById('chk_Number');
const symbolEL=document.getElementById('chk_Symbol');
const btnGenerate=document.getElementById('btnPasswordGenerate');
const passeordEL=document.getElementById('txtpassword');


// BTN CLICK

btnGenerate.addEventListener('click',function(){

    const length=lengthEL.value;
    let character="";
    let password="";

    if(lowercaseEL.checked){
        character+=lowercaseletter;
    }
    if(uppercaseEL.checked){
        character+=uppercaseEL;
    }
    if(numbrsEL.checked){
        character+=numbrsEL;
    }
    if(symbolEL.checked){
        character+=symbolEL;
    }
    for(let i=0;i<length;i++){
        password+=character.charAt(Math.floor(Math.random()*character.length))
    }
    passeordEL.value=password;
});