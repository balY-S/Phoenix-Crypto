const submitBtn = document.querySelector('.submit-btn'),
result = document.querySelector('.result');

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    result.classList.add('active');
})
