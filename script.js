let divContainer = document.getElementById("container");

let numberOfDivs;

let x = divContainer.offsetHeight / 16;
let y = divContainer.offsetWidth / 16;


for (let index = 0; index < 256; index++) {

    let dummyDiv = document.createElement("div");

    dummyDiv.style.height = `${x}px`;
    dummyDiv.style.width = `${y - 1}px`;
    dummyDiv.style.borderWidth = "1px";
    dummyDiv.style.borderStyle = "solid";
    dummyDiv.style.borderColor = "red";
    dummyDiv.style.lineHeight

    divContainer.appendChild(dummyDiv);

}

let allDivs = divContainer.querySelectorAll('div');
console.log(allDivs);

allDivs.forEach(div => {
    div.addEventListener('click', (e) => {
        console.log(e);
    })
})