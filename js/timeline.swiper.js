//JavaScript file for the About section timeline feature
/*
Timeline tutorial credit:
https://webdesign.tutsplus.com/building-a-horizontal-timeline-with-css-and-javascript--cms-28378t
*/

//Controls to keep the quote blocks an even size
//Declared variables
const elH = document.querySelectorAll(".timeline li > div");

//Equal heights control function
const setEqualHeight = (el) => {
    let counter = 0;

    for (let i = 0; i < el.length; i++) {
        const singleHeight = el[i].offsetHeight;

        if (counter < singleHeight) {
            counter = singleHeight;
        }
    }

    for (let i = 0; i < el.length; i++) {
        el[i].style.height = `${counter}px`;
    }
}

//Initialized function
const init = () => {
    setEqualHeight(elH);
}

//Event listener for the `init` function
window.addEventListener("load", init);