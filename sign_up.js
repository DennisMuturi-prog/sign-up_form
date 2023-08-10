const password=document.querySelector('#password');
const password2=document.querySelector('#password2');
password2.addEventListener('focusout',function(){
    let pass=password.value;
    let pass2=password2.value;
    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
    if(pass!=pass2)
    {
        addCSS("#password2{ border-color:red; }label[for='password2']::after{content:'password mismatch';font-size:0.5rem;color:red;}");
    }
    else{
        const mystyle=document.querySelector('style');
        mystyle.remove();   
    }
})
const createBtn=document.querySelector('button');
createBtn.addEventListener('click',function(){

    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;
     addCSS("input:invalid{border-color:red;}")
})