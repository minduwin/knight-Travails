import { gameBoard } from "./gameboard.js";
import { uiController } from "./uiMoves.js";


// DOM for chess board module
const appController = (function () {
    gameBoard();
    uiController();
})();