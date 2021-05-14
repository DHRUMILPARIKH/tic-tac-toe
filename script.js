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
  console.log("id", id);
  var is_data_exist = document.getElementById(id).innerText;
  if (is_data_exist === symbols[0] || is_data_exist === symbols[1]) {
    return;
  }
  document.getElementById(id).innerHTML = symbols[nextTurn];
  if (nextTurn == 0) {
    nextTurn = 1;
  } else {
    nextTurn = 0;
  }
  document.getElementById("now_turn").innerHTML = symbols[nextTurn];
}

/**
 * Reset the game
 */
function clearGame() {
  for (i = 0; i < blocks.length; i++) {
    document.getElementById(blocks[i]).innerText = "";
  }
}
