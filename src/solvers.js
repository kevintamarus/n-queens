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

window.findNRooksSolution = function(n) {
  var solution = [];
  var board = new Board({n: n});

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
  var board = new Board({n: n});
  var solution;

  var recurse = function(row) {
    if (row === n) {
      solution = [];
      // solution = board;
      for (var p = 0; p < board.get('n'); p++) {
        solution.push(board.get(p).slice());
      }
      return;
    }

    for (var i = 0; i < board.get('n'); i++) {
      board.togglePiece(row, i);
      if (!(board.hasAnyQueensConflicts())) {
        recurse(row + 1);
      }
      board.togglePiece(row, i);
    }
  };

  if (!solution) {
    solution = [];
    for (var x = 0; x < board.get('n'); x++) {
      solution.push([]);
    }
  }
  recurse(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});

  var recurse = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < board.get('n'); i++) {
      board.togglePiece(row, i);
      if (!(board.hasAnyQueensConflicts())) {
        recurse(row + 1);
      }
      board.togglePiece(row, i);
    }
  };

  recurse(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
