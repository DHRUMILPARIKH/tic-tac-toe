var nextTurn = 0;
var symbols = ["X", "O"];
var blocks = [
  "cell_00",
  "cell_01",
  "cell_02",
  "cell_10",
  "cell_11",
  "cell_12",
  "cell_20",
  "cell_21",
  "cell_22",
];
document.getElementById("h1_id").innerHTML = "Tics Tac Toe";
document.getElementById("now_turn").innerHTML = symbols[0];

/**
 * Change state of the game
 *
 * @param {string} id id of button tag
 */
function onCellClick(id) {
  // 1: Check cell is previously selected or not
  var is_data_exist = document.getElementById(id).innerText;
  if (is_data_exist === symbols[0] || is_data_exist === symbols[1]) {
    return;
  }
  // 2: Set value on cell and change in nextTurn
  document.getElementById(id).innerHTML = symbols[nextTurn];
  if (nextTurn == 0) {
    nextTurn = 1;
  } else {
    nextTurn = 0;
  }
  /**
   *  TODO: Check state of the game
   *         - game is completed or not
   *         - if completed then who is the winner
   */
  document.getElementById("now_turn").innerHTML = symbols[nextTurn];
}

/**
 * This function will check, whether game is completed or not.
 *
 * @returns {boolean} true if game is completed else false
 */
function checkStateOfGame() {}

/**
 * Reset the game
 */
function clearGame() {
  for (i = 0; i < blocks.length; i++) {
    document.getElementById(blocks[i]).innerText = "";
  }
}
