let divContainer = document.getElementById("container");
let buttonReset = document.getElementById("reset");
function createDivs() {
    let numberOfDivs = prompt("Please enter a number", 16);
    let x = divContainer.offsetHeight / numberOfDivs;
    let y = divContainer.offsetWidth / numberOfDivs;
    let numOfSquares = numberOfDivs * numberOfDivs;

    for (let i = 0; i < numOfSquares; i++) {

        let dummyDiv = document.createElement("div");
        dummyDiv.style.height = `${x - 1}px`;
        dummyDiv.style.width = `${y}px`;
        dummyDiv.style.borderWidth = "1px";
        dummyDiv.style.borderStyle = "solid";
        dummyDiv.style.borderColor = "black";
        dummyDiv.style.borderCollapse = "collapse";
        dummyDiv.style.alignContent = "stretch";
        divContainer.appendChild(dummyDiv);
    }
}

function addHoverColor() {
    let allDivs = divContainer.querySelectorAll('div');

    allDivs.forEach(div => {
        let temph;
        let temps;
        let l = 90;
        div.addEventListener('mouseover', (e) => {
            let h = changeColor(360);
            let s = changeColor(100);
            if (!div.style.backgroundColor) {
                temph = h;
                temps = s;
                div.style.backgroundColor = `hsl(${h},${s}%,${l}%)`;
            } else {
                if (l <= 0) {
                    l = 0
                } else {
                    l = l - 10;
                };
                div.style.backgroundColor = `hsl(${temph},${temps}%,${l}%)`
            }
        })
    })
}

function changeColor(max) {
    return Math.floor(
        Math.random() * (max + 1)
    )
}

function clearContainer() {
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.lastChild);
    }
}

function startSketching() {
    if (divContainer.hasChildNodes) {
        clearContainer()
    }
    createDivs();
    addHoverColor();
}

startSketching();

buttonReset.addEventListener('click', startSketching)