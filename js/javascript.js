

const gamesBoardContainer = document.querySelector('#gamesboard-container');
const optionContainer = document.querySelector('.option-container');
const flipButton = document.querySelector('#flip-button');
const sub = document.querySelector('.submarine');


// Option choosing
let angle = 0;

function flip() {
    const optionShips = Array.from(optionContainer.children);
    
    // if(angle === 0) {
    //     angle = 90;
    // } else {
    //     angle = 0;
    // }
    // OR
    // If angle is equal to 0 then return 90 otherwise return 0
    angle = angle === 0 ? 90 : 0;

    optionShips.forEach(optionShip => optionShip.style.transform = `rotate(${angle}deg)`);
}

// Creating Boards
const width = 10;

function createBoard(color, user) {
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.classList.add('game-board');
    gameBoardContainer.style.backgroundColor = color;
    gameBoardContainer.id = user;

    for(let i = 0; i < width * width; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.id = i;
        gameBoardContainer.append(block);
    }
    gamesBoardContainer.append(gameBoardContainer);
}
createBoard('yellow', 'player');
createBoard('pink', 'computer');

flipButton.addEventListener('click', flip);

// Creating Ships
class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
    }
}

const destroyer = new Ship('destroyer', 20);
const submarine = new Ship('submarine', 3);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);

// Array of battleships
const ships = [destroyer, submarine, cruiser, battleship, carrier];

function addShipPiece() {
    const allBoardBlocks = document.querySelectorAll('#computer div');
    let randomStartIndex = Math.floor(Math.random() * width * width);
    console.log(randomStartIndex);
}

addShipPiece();