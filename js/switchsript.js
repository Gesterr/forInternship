let forWhat = 'Business';

function switchContact(contact){
    let Business = document.getElementById('Business');
    let Customers = document.getElementById('Customers');
    let BusinessContactSales = document.getElementById('Business-ContactSales');
    let CustomersContactSales = document.getElementById('Customers-ContactSales');
    if(contact == 'Business' && contact != forWhat){
        Business.classList.add('yellowLine__button_active');
        Customers.classList.remove('yellowLine__button_active');
        forWhat = contact;
        if(window.screen.width < 450){
            BusinessContactSales.style.display = 'none';
            CustomersContactSales.style.display = 'none';
            return ;
        }
        BusinessContactSales.style.display = 'flex';
        CustomersContactSales.style.display = 'none';
        
    } else if(contact == 'Customers' && contact != forWhat){
        Business.classList.remove('yellowLine__button_active');
        Customers.classList.add('yellowLine__button_active');
        forWhat = contact;
        if(window.screen.width < 450){
            CustomersContactSales.style.display = 'none';
            BusinessContactSales.style.display = 'none';
            return ;
        }
        console.log(window.screen.width);
        BusinessContactSales.style.display = 'none';
        CustomersContactSales.style.display = 'flex';
        
    }
}

function redirection(magazine){
    if(window.screen.width < '450px'){
        return ;
    }

    if (magazine === 'Google'){
        window.location.href='/';
    } else if(magazine === 'Apple'){
        window.location.href='/'
    }
}