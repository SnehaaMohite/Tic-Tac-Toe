let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; 
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            box.innerText = turn0 ? "O" : "X";
            turn0 = !turn0; 
            box.disabled = true;
            checkWinner();
        }
    });
});


const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes(); 
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let firstbox = boxes[pattern[0]].innerText;
        let secondbox = boxes[pattern[1]].innerText;
        let thirdbox = boxes[pattern[2]].innerText;

        if (firstbox !== "" && firstbox === secondbox && secondbox === thirdbox) {
            showWinner(firstbox);
            return;
        }
    }
};


newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
