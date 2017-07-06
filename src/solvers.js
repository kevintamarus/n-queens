/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

//helper function
window.generalLoop = function(n, y, board) {
  board.togglePiece(0, y);
  solutions.push(board.get(0));
  for (var i = 1; i < board.get('n'); i++) {
    for(var m = 1; m < board.get('n'); m++) {
      board.togglePiece(i, m);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(i, m);
      }
    }
    solution.push(board.get(i).slice());
  }
  return solution;
};


window.findNRooksSolution = function(n) {
  var solution = [];
  var board = new Board({n: n});
  
  
  ///2 for loops
  //toggle on the first square(0,0)
  //check if next squares conflict with the squares already taken, if not, we toggle those squares and push to solution array
  for (var i = 0; i < board.get('n'); i++) {
    for (var m = 0; m < board.get('n'); m++) {
      board.togglePiece(i, m);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(i, m);
      }
    }
    solution.push(board.get(i).slice());
  }
  
  

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var arrayCount = [1];
  var arrayPossible = [1];
  var number = 1;
  while (arrayPossible.length < n ) {
    number++;
    arrayCount.push(number);
    arrayPossible.push(number * arrayPossible[arrayPossible.length - 1]);
  }
  return arrayPossible[n - 1];
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
