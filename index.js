const thankyoupage = document.querySelector('.thank-you');
const mainpage = document.querySelector('.main');
const submitButton = document.querySelector('.submit-btn');
const rateButtons = document.querySelectorAll('.btn button');
const rating = document.querySelector('#rating');

rateButtons.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML;

        submitButton.addEventListener('click', function () {
            thankyoupage.classList.remove('hidden');
            mainpage.classList.add('hidden');
        });
    });
});




