const googleGOne = document.querySelector('.span-g-one');
const googleOOne = document.querySelector('.span-o-one');
const googleOTwo = document.querySelector('.span-o-two');
const googleGTwo = document.querySelector('.span-g-two');
const googleL = document.querySelector('.span-l');
const googleE = document.querySelector('.span-e');
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', onBtnClick);

async function onBtnClick(e) {
    e.preventDefault();

    googleGOne.innerHTML = 'O';
    googleOOne.innerHTML = 'd';
    googleOTwo.innerHTML = 'd';
    googleGTwo.innerHTML = 'i';
    googleL.innerHTML = 't';
    googleE.innerHTML = 'y';

}