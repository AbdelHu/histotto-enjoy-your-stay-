// variable declarations
const mousePosText = document.getElementById("mousePosText");
let mousePos;
let el;
let isClick = false;
let timeDigit = 0;

// updates mouse X and Y positions
window.addEventListener("mousemove", function OnMouseMove(event) {
    mousePos = { x: event.clientX, y: event.clientY };
    if (mousePosText) {
        mousePosText.textContent = ["Your mouse coordinates: " + "(" + mousePos.x, mousePos.y + ")"].join(", ");
    }
});

// when user clicks, add create a div with the effect styles
window.addEventListener("mousedown", (event) => {
    if (mousePos) {
        if (timeDigit == 0) {
            DeleteClickEffectsTimer(250);
        }

        el = document.createElement("div");

        el.style.position = "fixed";
        el.style.left = mousePos.x - 14 + 'px';
        el.style.top = mousePos.y - 14 + 'px';
    
        el.className = "ClickEffectClass";
    
        document.body.appendChild(el);
    
        setInterval(DeleteUnwantedClickEffects(8), 1000);
        // RGBEffect();
    }
});

// delete unwanted (leftover) div's
function DeleteUnwantedClickEffects(leftover) {
    let selectClass = document.getElementsByClassName("ClickEffectClass");
    for (i = 0; i < selectClass.length; i++) {
        if (i != 0) {
            if (selectClass.length > leftover) {
                selectClass[i].remove();
            }
        }
    }
}

function DeleteAllClickEffects() {
    let selectClass = document.getElementsByClassName("ClickEffectClass");
    for (i = -1; i < selectClass.length; i++) {
        if (selectClass.length > 0) {
            if (i = -1) {
                selectClass[0].remove();
            } else {
                selectClass[i].remove();
            }
        }
    }
}

// a little while after clicking, delete all the click effects for performance
function DeleteClickEffectsTimer(interval) {
    timeDigit = 0;
    // keep increasing a digit. if it reaches a max value, delete all effects.
    let timeInterval = setInterval(() => {
        if (timeDigit < 30) {
            timeDigit++;
        } else if (timeDigit >= 30) {
            clearInterval(timeInterval);
            timeDigit = 0;
            DeleteAllClickEffects();
        }
        window.onclick = (() => {
            timeDigit = 0;
        });
    }, interval);
}

// make the effect look colorful
/* function RGBEffect() {
    let r = 0; let g = 0; let b = 0;

    let rRandom, gRandom, bRandom;

    rRandom = Math.floor(Math.random() * 255) + 1;
    gRandom = Math.floor(Math.random() * 255) + 1;
    bRandom = Math.floor(Math.random() * 255) + 1;

    r = rRandom;
    g = gRandom;
    b = bRandom;

    el.style.boxShadow = "0px 0px 10px 15px rgb(" + r + ", " + g + ", " + b + ")";

    el.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
} */