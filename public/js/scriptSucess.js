vali();

function vali(){
    if(localStorage.getItem('token') == null){
        localStorage.setItem('token','0123')
        setTimeout(function(){
            document.querySelector('.div-login-sucesso').style.display = 'none';
        },2000);
    }else{
        document.querySelector('.div-login-sucesso').style.display = 'none';
    }
}

console.log("OI "+localStorage.getItem('token'));
