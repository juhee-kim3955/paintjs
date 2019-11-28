const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");
const changeBtn = document.getElementById("jsChange");
const controls = document.getElementById("jsColors");
const dynamic = document.getElementById("dynamic");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// dynamic.width = canvas.width + document.getElementsByClassName("controls__color")[0].clientWidth;
// dynamic.style.width = (canvas.width + document.getElementsByClassName("controls__color")[0].clientWidth) + "px";


ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;
let column = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick() {

    if (filling === true) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";;
    }
}

function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function handleCM(event) {
    event.preventDefault();
}

function handleSaveClick() {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[🎨]"
    link.click();
}

function handleChangeClick() {
    if (column === false) {
        column = true;

        // controls.style.flexDirection = 'row';
        // dynamic.style.gridAutoFlow = 'row';
        // controls.style.marginLeft = '0px';
    } else {
        column = false;

        // dynamic.style.gridAutoFlow = 'column';
        // controls.style.flexDirection = 'column';
        // controls.style.marginLeft = '35px';
    }

    // var div = document.createElement("div");
    // div.style.background = "black";
    // div.style.width = 50;
    // div.style.height = 50;
    // document.getElementById("jsColors").appendChild(div);
    // if (column === false) {
    //     column = true;
    //     controls__column.style.visibility = 'hidden';
    //     controls.style.visibility = 'visible';
    // } else {
    //     column = false;
    //     controls__column.style.visibility = 'visible';
    //     controls.style.visibility = 'hidden';
    // }
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if (range) {
    range.addEventListener("input", handleRangeChange);
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}

if (changeBtn) {
    changeBtn.addEventListener("click", handleChangeClick);
}