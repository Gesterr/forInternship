function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
let cookiecook = getCookie("cookiecook"),
cookiewin = document.getElementsByClassName('cookie-notice')[0];    
// Проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
if (cookiecook != "no") {
    // Показываем    
    cookiewin.style.display="flex"; 
    // Закрываем по клику
    document.getElementById("cookie_close").addEventListener("click", function(){
        cookiewin.style.display="none";    
        // Записываем cookie на 1 день, с которой мы не показываем окно
        let date = new Date;
        date.setDate(date.getDate() + 1);    
        document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();      
    });
}
// Функции снизу, просто для проверки работаспособности кнопок 
document.getElementById("cookie_close").addEventListener("click", function(){
    cookiewin.style.display="none";    
    // Записываем cookie на 1 день, с которой мы не показываем окно
    let date = new Date;
    date.setDate(date.getDate() + 1);    
    document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();      
});

function closeCookies(){
    cookiewin.style.display="none";    
}





let menuBlock = document.getElementsByClassName('drop-left-menu')[0];
let aboveMenu = document.getElementById('aboveMenu');
function openMenu(){
    menuBlock.style.display='flex';
}

function closeMenu(){
    menuBlock.style.display='none'
}
let ContactSales = document.getElementById('contact_sales');
function openContactSales(){
    ContactSales.style.display='flex';
}
function closeContactSales(){
    ContactSales.style.display='none';
    aboveMenu.style.display='none';
}


// Всё что снизу отвечает за Contact sales
let username = document.getElementById('Name');
let email = document.getElementById('Email');
let phone = document.getElementById('Phone');

let nameError = document.getElementById('error1_1')
let nameError2 = document.getElementById('error1_2')

let emailError = document.getElementById('error2_1')
let emailError2 = document.getElementById('error2_2')

let phoneError = document.getElementById('error3_1')
let phoneError2 = document.getElementById('error3_2')

let fullError = document.getElementById('error-full');


let button = document.getElementById('Button-contact-sales')

function checkName(){
   if(username.value.length === 0){
    username.style.border = '1px solid red';
    nameError.style.display='block';
    nameError2.style.display='none';
    checkButton();
   } else if(username.value.trim().length === 0){
    username.style.border = '1px solid red';
    nameError2.style.display='block';
    nameError.style.display='none';
    checkButton();
   }
   else {
    username.style.border = '1px solid #F1F1F1';
    nameError.style.display='none';
    nameError2.style.display='none';
    checkButton();
   }
}

function checkEmail(){
    if(email.value.trim().length < 5){
        email.style.border = '1px solid red';
        emailError.style.display='block';
        emailError2.style.display='none';
        checkButton();
    } else if(email.value.trim().includes('@') === false){
        email.style.border = '1px solid red';
        emailError2.style.display='block';
        emailError.style.display='none';
        checkButton();
    }  
    else {
        email.style.border = '1px solid #F1F1F1';
        emailError.style.display='none';
        emailError2.style.display='none';
        checkButton();
    }
}

function checkNumber(){
    if(phone.value.length === 0){
        phone.style.border = '1px solid red';
        phoneError.style.display='block';
        phoneError2.style.display='none';
        checkButton();
    } else if(phone.value.length < 18){
        phone.style.border = '1px solid red';
        phoneError.style.display='none';
        phoneError2.style.display='block';
        checkButton();
    } 
    else {
        phone.style.border = '1px solid #F1F1F1';
        phoneError.style.display='none';
        phoneError.style.display='none';
        phoneError2.style.display='none';
        checkButton();
    }
}

function checkButton(){
    if(phone.value.length > 0 && email.value.length > 0 && username.value.length > 0 && phone.value.length === 18){
        fullError.style.display='none';
        button.classList.remove('button-ContactSales_disabled');
    } else{
        fullError.style.display='block';
        button.classList.add('button-ContactSales_disabled');
    }
}

function showAboveMenu(){
    let aboveMenu = document.getElementById('aboveMenu');
    button.classList.add('button-ContactSales_disabled');
    phone.value = '';
    email.value = '';
    username.value = '';
    aboveMenu.style.display='flex';
}