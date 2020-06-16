/* the Board Module: exporter

                            will generate 1 matrix
                            the players board and  the matrix size is 9 * 9

                            generateBoard(arg)

                            the module will create inside of the players div divs,
                            that each div is a square in the board   */

let matrix = [
  [, 9, , , 4, 2, 1, 3, 6],
  [, , , 9, 6, , 4, 8, 5],
  [, , , 5, 8, 1, , ,],
  [, , 4, , , , , ,],
  [5, 1, 7, 2, , , 9, ,],
  [6, , 2, , , , 3, 7],
  [1, , , 8, , 4, , 2],
  [7, , 6, , , , 8, 1],
  [3, , , , 9, , , ,],
];

let solvedMatrix = [
  ["8", "9", "5", "7", "4", "2", "1", "3", "6"],
  ["2", "7", "1", "9", "6", "3", "4", "8", "5"],
  ["4", "6", "3", "5", "8", "1", "7", "9", "2"],
  ["9", "3", "4", "6", "1", "7", "2", "5", "8"],
  ["5", "1", "7", "2", "3", "8", "9", "6", "4"],
  ["6", "8", "2", "4", "5", "9", "3", "7", "1"],
  ["1", "5", "9", "8", "7", "4", "6", "2", "3"],
  ["7", "4", "6", "3", "2", "5", "8", "1", "9"],
  ["3", "2", "8", "1", "9", "6", "5", "4", "7"],
];

let counter = 0;
while (counter < 20) {
  let test1 = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  let test2 = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
  let deleted = delete solvedMatrix[test1][test2];
  if (deleted) {
    solvedMatrix[test1][test2] = " ";
  }
  counter++;
}

let generateBoard = (board) => {
  for (let col = 0; col < 9; col++) {
    for (let row = 0; row < 9; row++) {
      board.insertAdjacentHTML(
        "beforeend",
        `<div  value='' id='large' name='sodokuField' class='board-square'>${solvedMatrix[col][row]}</div>`
      );
    }
  }
};

let func = () => {
  var nodeList = document.getElementsByName("sodokuField");
  var arr = [];
  for (var index = 0; index < nodeList.length; index++) {
    let final = nodeList[index].value;
    arr.push(final);
  }

  var slovedUserMatrix = [];

  while (arr.length) {
    slovedUserMatrix.push(arr.splice(0, 9));
  }
  console.log(slovedUserMatrix);
};

export { generateBoard, func };
