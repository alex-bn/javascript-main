'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// technique to select the modal buttons
for (let i = 0; i < btnsOpenModal.length; i++)
    console.log(btnsOpenModal[i].textContent);


const closeModal = function () {
    console.log('Button clicked');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
    // if (e.key === 'Escape') console.log('Esc was pressed!');
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});



// Lessons:
/*
1. If you want to use the same function in multiple event listeners then you need to specify that function(in a variable) as a separate function, and then you can pass that function as an argument to multiple event listeners.
2. Adding and removing classes is a well known method used to change the appearance of elements on the page. Classes allow us to aggregate multiple css properties in a single container.
3. Check is a class is present on a certain element 
*/
console.log(document.querySelector('.modal').classList.contains('hidden')); // -> return true :) 
/*
4. Keyboard events -> closing the modal by pressing Esc key
    document.addEventListener('')

    3 types of events for the keyboard: keyup -> happens when we lift our finger of the finger, keypress -> when we keep the finger pressed on a certain key, keydown -> fired as soon as we press down the key

*/




