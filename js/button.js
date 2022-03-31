//Selecting all the buttons and the select here:
var all_buttons = document.getElementsByTagName('button');
var select = document.querySelector('.select');

//Copying all the classes of the buttons to an array: 
    //This is to later bring it back when we click random / reset:
var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[0]);
}

//AddEventListener: (listens to the click of the select):
select.addEventListener('click', buttonWhichColorChecker)


//Checks which option user chose and redirects to another function based on the selected option:
function buttonWhichColorChecker() {
    if (select.value === 'red') {
        buttonsRed()
    } else if (select.value === 'green') {
        buttonsGreen();
    } else if (select.value === 'blue') {
        buttonsBlue();
    } else if (select.value === 'reset') {
        buttonsReset();
    } else if (select.value === 'random') {
        buttonsRandom();
    }

}

//Function if color is red:
function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[0]);
        all_buttons[i].classList.add('yahoo');
    }
}

//Function if color is green:
function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[0]);
        all_buttons[i].classList.add('facebook');
    }
}

//Function if color is blue:
function buttonsBlue() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[0]);
        all_buttons[i].classList.add('wee');
    }
}

//Function if color is reset:
function buttonsReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[0]);
        all_buttons[i].classList.add(copyAllButtons[i])
    }
}

//Function if color is random:
function buttonsRandom() {
    //4 options:
    let options = ['yahoo', 'wee', 'facebook', 'google'];

    for (let i = 0; i < all_buttons.length; i++) {
        //Generates random number from 0 to 3
        let randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber)
        all_buttons[i].classList.remove(all_buttons[i].classList[0]);
        //Example: if the random number = 3:
                // Then the classList becomes: options[3] = google! So color = yellow 🤯
        all_buttons[i].classList.add(options[randomNumber]);
    }
}