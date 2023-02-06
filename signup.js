
function fname_validation(){
    let fname=document.getElementById("fname");
    let fname_error=document.getElementById("fname_error");
    let firstname = /^[a-zA-Z]{3,30}$/; 
    if(firstname.test(fname.value)){
        fname.style.borderColor="green";
        fname_error.innerHTML = "";
        return true;    
    }
    else if(fname.value.trim()===""){
        fname.style.borderColor="red";
        fname_error.style.color="red";
        fname_error.innerHTML="Field can't be empty";
        return false;
    }
    else{
        fname.style.borderColor="red";
        fname_error.style.color="red";
        fname_error.innerHTML="Invalid";
        return false;
    }     
}

function email_validation(){
    let email=document.getElementById("email");
    let email_error=document.getElementById("email_error");   
    let emailid= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(emailid.test(email.value)){
        email.style.borderColor="green";
        email_error.innerHTML="";
        return true;
    }
    else if(email.value.trim()===""){
        email.style.borderColor="red";
        email_error.style.color="red";
        email_error.innerHTML="Field can't be empty";
        return false;
    }
    else{
        email.style.borderColor="red";
        email_error.style.color="red";
        email_error.innerHTML="Invalid format";
        return false;
    }
}

function mobile_validation(){
    let mobile=document.getElementById("mobile");
    let mobile_error=document.getElementById("mobile_error");   
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneno.test(mobile.value)){
        mobile.style.borderColor="green";
        mobile_error.innerHTML="";
        return true;
    }
    else if(mobile.value.trim()===""){
        mobile.style.borderColor="red";
        mobile_error.style.color="red";
        mobile_error.innerHTML="Field can't be empty";
        return false;
    }
    else{
        mobile.style.borderColor="red";
        mobile_error.style.color="red";
        mobile_error.innerHTML="Invalid";
        return false;
    }
}

function pwd_validation(){
    let pwd=document.getElementById("pwd");
    let pwd_error=document.getElementById("pwd_error");
    let strengthBadge = document.getElementById('StrengthDisp');
    var strong = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    var medium = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(pwd.value.match(strong)){ 
        pwd.style.borderColor="green";
        pwd_error.innerHTML="";
        strengthBadge.style.backgroundColor = "green";
        strengthBadge.textContent = 'Strong';
        return true;
    }
    else if(pwd.value.match(medium)){ 
        pwd.style.borderColor="orange";
        pwd_error.style.color ="orange" ;
        strengthBadge.style.backgroundColor = 'orange';
        strengthBadge.textContent = 'Medium';
        pwd_error.innerHTML = "Password must contain minimum 8 characters and atleast one special character";
        return false;
    }
    else if(pwd.value.trim()===""){
        pwd_error.style.color ="red" ;
        pwd.style.borderColor="red";
        pwd_error.innerHTML = "Field can't be empty";
        strengthBadge.style.backgroundColor = '';
        strengthBadge.textContent = '';
        return false;
    }
    else {
        pwd_error.style.color ="red" ;
        pwd.style.borderColor="red";
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'Weak';
        pwd_error.innerHTML = "Password must contain minimum 8 characters, at least one uppercase, lowercase, number and special character";
        return false;
    }   
}

function re_pwd_validation(){
    let pwd=document.getElementById("pwd");
    let re_pwd=document.getElementById("re_pwd");
    let re_pwd_error=document.getElementById("re_pwd_error");
    if(re_pwd.value.trim()===""){
        re_pwd.style.borderColor="red";
        re_pwd_error.style.color="red";
        re_pwd_error.innerHTML="Field can't be empty";
        return false;
    }
    else if(pwd.value===re_pwd.value){
        re_pwd.style.borderColor="green";
        re_pwd_error.innerHTML="";
        return true;
    }
    else{
        re_pwd.style.borderColor="red";
        re_pwd_error.style.color="red";
        re_pwd_error.innerHTML="Password doesn't match";
        return false;
    }
}

function signup_validation(){
    if(fname_validation() && email_validation()  && mobile_validation() && pwd_validation() && re_pwd_validation()){
        alert("Successfully submitted");
        return true;
    }
    else{
        alert("Please fill the mandatory fields");
        return false;
    }
}

function login_validation(){
    if(email_validation() && pwd_validation()){
        alert("Successfully submitted");
        return true;
    }
    else{
        alert("Please fill the mandatory fields");
        return false;
    }
}