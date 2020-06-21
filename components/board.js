/* the Board Module:  9*9 board
 */

let name = document.cookie;
console.log(name); // save the user name on cookie and dispaly it at the title
document.getElementById("newName").innerHTML = "Welcome Back " + name + " !";

let matrixTest = [
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

let matrixOrigin = [
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

window.onload = () => {
  // when user press reset we call to function random()
  var reloading = sessionStorage.getItem("reloading");
  if (reloading) {
    // from Storage class
    sessionStorage.removeItem("reloading");
    random(25); // If you only want to run it when the page is reloaded
  }
};

let reset = () => {
  // when the page reloaded
  sessionStorage.setItem("reloading", "true");
  document.location.reload();
};

let back = () => {
  // the back button
  window.location.reload();
};

/**
 *
 *
 *  Create 2 random numbers in while loop itaration that  we delete from original matrix
 *
 *
 * @param m - could by any number
 *
 */
let random = (m) => {
  document.cookie = name + "=; Max-Age=0"; // delete cookie for new user
  document.getElementById("box").style.display = "none"; // welcome not visible
  document.getElementById("button_board").style.display = "block"; // board visible
  let counter = 0;
  while (counter < m) {
    // increse the empty fields
    let test1 = Math.floor(Math.random() * 9); // random numbers 0-9
    let test2 = Math.floor(Math.random() * 9);
    console.log(test2); // could be 5 for example
    console.log(test1); //  could be 7 for example
    let index = delete matrixOrigin[test1][test2];
    if (index) {
      // delete random element everey itaration
      // empty element change with empty string
      matrixOrigin[test1][test2] = " "; // space
    }
    counter++; // count the number of deleted fields
    console.log(counter);
  }

  /**
 *
 *
 * Build board 9*9  use insertAdjacentHTML("beforeend")
 * The module will create inside of the players input divs,
   that each input is a square in the board   
 *
 *
 */
  let board = document.getElementById("large");
  for (let col = 0; col < 9; col++) {
    for (let row = 0; row < 9; row++) {
      board.insertAdjacentHTML(
        "beforeend", // create html elelments in JS
        `<input type='number' min='1' max='9' value='${matrixOrigin[col][row]}'    name='sodokuField' id='field' class='board-square'/> </form> `
      );
    }
  }
};

/**
 *
 *  The final function to compare beetwin user and original matrix - JSON.stringify
 *
 *  Takes NodeList Object From getElementsByName attr of filtered martix
 *  and build a analogic matrix  as original to compare - user types the miised elements
 *
 *  JSON.stringify for check
 *
 *
 *
 */

let func = () => {
  // when user fill all missed places
  let nodeList = document.getElementsByName("sodokuField"); // 81 elements with this name atribute
  let arr = []; // new arr with all elememts
  for (let index = 0; index < nodeList.length; index++) {
    let final = nodeList[index].value;
    arr.push(final);
  }

  let matrixUser = [];

  while (arr.length) {
    // build 9*9 matrix
    matrixUser.push(arr.splice(0, 9));
  }

  console.log(matrixUser); //  the new arr with user inputs
  console.log(matrixTest); // the original array

  let isEqual = JSON.stringify(matrixTest) === JSON.stringify(matrixUser);
  console.log(isEqual); // convert 2 matrix into JSON for compere true or false

  let exists = (arr, search) => {
    return arr.some((row) => row.includes(search));
  }; //  this func check if threr is empty elements in matrix for alert
  let space = exists(matrixUser, "");
  console.log(space);
  // the validation of the board when user finish
  if (space === true) {
    alert("Please fill the empty fields");
    return false;
  } else if (isEqual === false) {
    alert("You failed, try next time!");
    window.location.replace("./board.html");
    return true;
  }
  if (isEqual === true) {
  }
  alert("You won!");
  window.location.replace("./board.html");
  return true;
  // relocate to welcome page*/
};
// the first possition when threr is only levels dislpayed
document.getElementById("button_board").style.display = "none";
export { func, random, reset, back };
