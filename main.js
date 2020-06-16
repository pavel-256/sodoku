import { generateBoard, func } from "./components/board.js";

let board = document.getElementById("large");

generateBoard(board);

/////////////////////////////////////////

window.func = func;
window.generateBoard = generateBoard;
