const squares  = document.getElementById('square');
let boxes;

function createDivs(){
    for (let i=1; i<=20; i++){
        const div = document.createElement('div');
        div.classList.add('box');
        const h2 = document.createElement('h2');
        squares.appendChild(div);
        div.appendChild(h2);
        h2.innerText = i;
        boxes = document.querySelectorAll('.box');
    }
}

window.addEventListener('scroll', checkBoxes);

function checkBoxes(){
    const triggerBottom = window.innerHeight/5 * 4;
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}   
