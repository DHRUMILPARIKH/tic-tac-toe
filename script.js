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
var tables = {
  rows: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ],
  colls: [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ],
  diagnoals: [
    [0, 4, 8],
    [2, 4, 6],
  ],
};
var states = [];
var selected = 0;
var gameIsOver = false;
document.getElementById("game_heading").innerHTML = "Tics Tac Toe";
document.getElementById("now_turn").innerHTML = symbols[0];

/**
 * Change state of the game
 *
 * @param {string} id id of button tag
 */
function onCellClick(id) {
  // 0; Check game is over or not
  if (gameIsOver) return;
  // 1: Check cell is previously selected or not
  var is_data_exist = document.getElementById(id).innerText;
  var currnetMove = symbols[nextTurn];
  if (is_data_exist === symbols[0] || is_data_exist === symbols[1]) {
    return;
  }
  // 2: Set value on cell and change in nextTurn
  document.getElementById(id).innerHTML = symbols[nextTurn];
  selected += 1;
  var index = blocks.findIndex((block) => block === id);
  states[index] = symbols[nextTurn];
  if (nextTurn == 0) {
    nextTurn = 1;
  } else {
    nextTurn = 0;
  }
  // 3:  Check state of the game
  var stateOfGame = checkWinnerOfGame();
  if (selected === 9 && !stateOfGame) {
    document.getElementById("game_over").innerHTML = "Game Over";
    document.getElementById("now_turn").innerHTML = "";
    document.getElementById("game_winner").innerHTML = "DRAW";
  } else if (stateOfGame) {
    gameIsOver = true;
    document.getElementById("game_over").innerHTML = "Game Over";
    document.getElementById("now_turn").innerHTML = "";
    document.getElementById("game_winner").innerHTML = currnetMove + " is WIN";
  } else {
    document.getElementById("now_turn").innerHTML = symbols[nextTurn];
  }
}

/**
 * This function will check, whether game is completed or not.
 *
 * @returns {boolean} true if game is completed else false
 */
function checkWinnerOfGame() {
  // 1: There is atlist 3 cell selected || return false
  if (selected < 3) {
    return false;
  }
  // 2: Match the cells of row. matched && return true.
  var checkRowBlock = matchTheBlocks("rows");
  if (checkRowBlock) return true;

  // 3: Match the cells of collumn. matched && return true.
  var checkCollBlock = matchTheBlocks("colls");
  if (checkCollBlock) return true;
  // 4: Match the cells of diagonal. matched && return true.
  var checkDiagonalBlock = matchTheBlocks("diagnoals");
  if (checkDiagonalBlock) return true;
  // 5: return false
  return false;
}

function matchTheBlocks(blockName) {
  var isWinnerFound = false;
  tables[blockName].forEach(([cell0, cell1, cell2]) => {
    if (
      isWinnerFound ||
      !symbols.includes(states[cell0]) ||
      !symbols.includes(states[cell1]) ||
      !symbols.includes(states[cell2])
    )
      return;
    if (states[cell0] === states[cell1] && states[cell1] === states[cell2]) {
      isWinnerFound = true;
      return;
    }
  });
  return isWinnerFound;
}

/**
 * Reset the game
 */
function clearGame() {
  states = [];
  selected = 0;
  nextTurn = 0;
  gameIsOver = false;
  document.getElementById("game_over").innerHTML = "";
  document.getElementById("now_turn").innerHTML = symbols[0];
  document.getElementById("game_winner").innerHTML = "";
  for (i = 0; i < blocks.length; i++) {
    document.getElementById(blocks[i]).innerText = "";
  }
}
