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