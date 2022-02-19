document.addEventListener('DOMContentLoaded', () => {
    const btnModalOpen = document.querySelector('#modal__open');
    const btnModalClose = document.querySelector('#modal__close');
    const form = document.querySelector('#form');
    const modalWindow = document.querySelector('#modal');
    const formInfo = document.querySelector('#form__info');
    const formSubmit = document.querySelector('#form__submit');
    
    btnModalOpen.addEventListener('click', () => {
        modalWindow.style.visibility = 'visible';
        modalWindow.style.opacity = '100';
    })
    
    btnModalClose.addEventListener('click', () => {
        modalWindow.style.visibility = 'hidden';
        modalWindow.style.opacity = '0';
    })
    
    document.addEventListener('click', (event) => {
        if(event.target.id === 'modal__area') {
            modalWindow.style.visibility = 'hidden';
            modalWindow.style.opacity = '0';
        }
    })
    
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.querySelector('#name').value;
        const mail = document.querySelector('#mail').value;
        const msg = document.querySelector('#msg').value;

        if(name && mail && msg) {
            createThankYou();
        } else {
            createError();
        }
    })

    function createThankYou() {
        formInfo.style.color = '#3A4574';
        formInfo.innerHTML = "Отправка...";
        formSubmit.disabled = true;

        setTimeout(() => {
            formInfo.innerHTML = "Отправка завершена. Спасибо!";
            form.reset();
            formSubmit.disabled = false;

            setTimeout(() => {
                formInfo.innerHTML = "";
            }, 2000);
        }, 2000);
    }


    function createError() {
        formInfo.style.color = 'red';
        formInfo.innerHTML = "Все поля должны быть заполнены!";
    }
})



