let row = document.querySelector('.row');
let genBtn = document.querySelector('.generate-btn');

genBtn.addEventListener('click', catGen);

function catGen() {
    let cat = document.createElement('img');
    cat.src = 'images/cat.gif';
    cat.classList = 'gif'
    row.appendChild(cat);
}