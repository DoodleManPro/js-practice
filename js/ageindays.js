//Age in days:
let clickMe = document.querySelector('.click-me');
let reset = document.querySelector('.reset');
let result = document.querySelector('.result');

clickMe.addEventListener('click', ageInDays);
reset.addEventListener('click', resetDays);

function ageInDays() {
    let question = prompt('How many years old are you?');
    let answer = question * 365
    
    result.innerText = answer + ' days old';
}

function resetDays() {
    result.innerText = '0 days old'
}
