const btns = document.querySelectorAll('.from');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(btn2 => {
            btn2.classList.remove('checked');
        });
        btn.classList.add('checked');
        let lang = document.querySelector('.checked').children[1].dataset.lang;
        let toDisable = document.getElementsByName('toLang');
        toDisable.forEach(elem => {
            elem.disabled = false;
            elem.parentElement.classList.remove('disabled');
            if (elem.dataset.lang == lang) {
                elem.disabled = true;
                elem.parentElement.classList.add('disabled');
            }
        });
    });
});

const foreign = document.querySelectorAll('.target');

foreign.forEach(btn => {
    btn.addEventListener('click', () => {
        foreign.forEach(btn2 => {
            btn2.classList.remove('checked_foreign');
            }
        );
        
        btn.classList.add('checked_foreign');
    }
    );
});

const type = document.querySelectorAll('.type__button');

type.forEach(btn => {
    btn.addEventListener('click', () => {
        type.forEach(btn2 => {
            btn2.classList.remove('checked_button');
            }
        );
        
        btn.classList.add('checked_button');
    }
    );
});

const transType = document.forms['order-form'].elements['translation-type'];
const valueContainer = document.querySelector('.form__order-type-value')

    transType.forEach(btn =>{
        btn.addEventListener('click', () => {
        let type = document.forms['order-form'].elements['translation-type'].value;
        valueContainer.innerHTML = type;        
    });
});

// const tabArea = document.querySelector('.upload-tabs')
// const fileInput = document.forms['order-form'].elements['file-input'];
//     fileInput.addEventListener('input', () =>{
//         let fileName = document.forms['order-form'].elements['file-input'].value.replace('C:\\fakepath\\','');
//         let fileBlock = document.createElement('div')
//         fileBlock.innerHTML = fileName;
//         tabArea.after(fileBlock)
        
//     })

const term = document.querySelectorAll('.term-buttons');
const termPlace = document.querySelector('.form__order-term-value');
term.forEach(btn => {
    btn.addEventListener('click', () => {
        term.forEach(btn2 => {
            btn2.classList.remove('checked_term');
            }
        );
        
        btn.classList.add('checked_term');
        let chk = document.getElementsByName('term')
        chk.forEach(elem =>{
            if (elem.checked){
                let elemValue = elem.value;
                termPlace.innerHTML = elemValue + " օր";
            }

        })
    }
    );
});



const countInput = document.querySelector('.pages-count-value');
const countPlace = document.querySelector('.form__order-count-value');
countInput.addEventListener('input', () => {
    let value = countInput.value;
    countPlace.innerHTML = value + " էջ";
    });