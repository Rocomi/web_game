
// 탭 기능
function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.style.display = "none");
  document.getElementById(tabId).style.display = "block";
}
document.addEventListener("DOMContentLoaded", function () {
  showTab("game1");
  setRandomColor();
  createTicTacToeBoard();
});

// 숫자 맞추기 게임
const answer = Math.floor(Math.random() * 100) + 1;
let tries = 0;
function checkNumberGuess() {
  const input = parseInt(document.getElementById("numberInput").value);
  const result = document.getElementById("numberResult");
  tries++;
  if (input > answer) result.textContent = `Down! (${tries}회 시도)`;
  else if (input < answer) result.textContent = `Up! (${tries}회 시도)`;
  else result.textContent = `정답! (${tries}회 만에 맞춤)`;
}

// 색상 맞추기
const colors = [
  { color: "#000000", name: "검정색" },
  { color: "#000080", name: "감색" },
  { color: "#0000FF", name: "파란색" },
  { color: "#006400", name: "짙은녹색" },
  { color: "#008000", name: "녹색" },
  { color: "#008080", name: "청록색" },
  { color: "#00BFFF", name: "진하늘색" },
  { color: "#00CED1", name: "청록색" },
  { color: "#00FF00", name: "형광녹색" },
  { color: "#00FF7F", name: "스프링그린색" },
  { color: "#00FFFF", name: "청록색" },
  { color: "#191970", name: "남색" },
  { color: "#1E90FF", name: "진하늘색" },
  { color: "#228B22", name: "숲색" },
  { color: "#2E8B57", name: "해풍녹색" },
  { color: "#2F4F4F", name: "잿빛남색" },
  { color: "#32CD32", name: "라임그린색" },
  { color: "#3CB371", name: "중간녹색" },
  { color: "#40E0D0", name: "터쿼이즈색" },
  { color: "#4169E1", name: "로열블루색" },
  { color: "#4682B4", name: "강청색" },
  { color: "#483D8B", name: "짙은남색" },
  { color: "#4B0082", name: "남보라색" },
  { color: "#556B2F", name: "올리브색" },
  { color: "#5E548E", name: "감색" },
  { color: "#6A5ACD", name: "슬레이트블루색" },
  { color: "#6B8E23", name: "올리브그린색" },
  { color: "#708090", name: "먹색" },
  { color: "#778899", name: "회청색" },
  { color: "#7B68EE", name: "중간남색" },
  { color: "#7CFC00", name: "형광녹색" },
  { color: "#800000", name: "자색" },
  { color: "#800080", name: "보라색" },
  { color: "#808000", name: "올리브색" },
  { color: "#808080", name: "회색" },
  { color: "#87CEEB", name: "하늘색" },
  { color: "#87CEFA", name: "연하늘색" },
  { color: "#8B0000", name: "짙은빨간색" },
  { color: "#8B008B", name: "짙은보라색" },
  { color: "#8B4513", name: "밤색" },
  { color: "#8E4585", name: "자주색" },
  { color: "#8FBC8F", name: "연한녹색" },
  { color: "#90EE90", name: "연녹색" },
  { color: "#9370DB", name: "중간보라색" },
  { color: "#9400D3", name: "보라색" },
  { color: "#9932CC", name: "보라색" },
  { color: "#9ACD32", name: "연두색" },
  { color: "#9B870C", name: "황갈색" },
  { color: "#A0522D", name: "시엔나색" },
  { color: "#A29BFE", name: "라벤더색" },
  { color: "#A52A2A", name: "갈색" },
  { color: "#ADFF2F", name: "형광연두색" },
  { color: "#ADD8E6", name: "연하늘색" },
  { color: "#B0C4DE", name: "연청회색" },
  { color: "#B0E0E6", name: "포그블루색" },
  { color: "#B22222", name: "불타는빨간색" },
  { color: "#B87333", name: "구리색" },
  { color: "#BA55D3", name: "중간보라색" },
  { color: "#BC8F8F", name: "로지브라운색" },
  { color: "#C0C0C0", name: "은색" },
  { color: "#C71585", name: "매젠타색" },
  { color: "#CD5C5C", name: "다홍색" },
  { color: "#CD853F", name: "페루색" },
  { color: "#D2691E", name: "진한갈색" },
  { color: "#D2B48C", name: "탠색" },
  { color: "#D8BFD8", name: "연보라색" },
  { color: "#DA70D6", name: "오키드색" },
  { color: "#DAA520", name: "황금색" },
  { color: "#DB7093", name: "연자홍색" },
  { color: "#DC143C", name: "진홍색" },
  { color: "#E0BBE4", name: "연보라색" },
  { color: "#E0FFFF", name: "연청록색" },
  { color: "#E6E6FA", name: "라벤더색" },
  { color: "#E9967A", name: "연한살구색" },
  { color: "#E97451", name: "테라코타색" },
  { color: "#EE82EE", name: "바이올렛색" },
  { color: "#EEE8AA", name: "파파야색" },
  { color: "#F08080", name: "연분홍색" },
  { color: "#F0E68C", name: "연노랑색" },
  { color: "#F0FFF0", name: "허니듀색" },
  { color: "#F4A460", name: "샌디브라운색" },
  { color: "#F5DEB3", name: "밀색" },
  { color: "#F5F5F5", name: "백색" },
  { color: "#F5FFFA", name: "민트크림색" },
  { color: "#FA8072", name: "연어색" },
  { color: "#FAEBD7", name: "살구빛아이보리색" },
  { color: "#FAF0E6", name: "린넨색" },
  { color: "#FAFAD2", name: "레몬색" },
  { color: "#FF0000", name: "빨간색" },
  { color: "#FF1493", name: "진분홍색" },
  { color: "#FF4500", name: "오렌지레드색" },
  { color: "#FF6347", name: "토마토색" },
  { color: "#FF69B4", name: "진분홍색" },
  { color: "#FF6F61", name: "코랄색" },
  { color: "#FF8C00", name: "짙은주황색" },
  { color: "#FFA07A", name: "연살구색" },
  { color: "#FFB347", name: "살구색" },
  { color: "#FFB6C1", name: "연분홍색" },
  { color: "#FFC0CB", name: "분홍색" },
  { color: "#FFD700", name: "금색" },
  { color: "#FFDAB9", name: "복숭아색" },
  { color: "#FFDEAD", name: "내추럴색" },
  { color: "#FFE4B5", name: "모카색" },
  { color: "#FFE4E1", name: "미스트로즈색" },
  { color: "#FFF0F5", name: "연보라색" },
  { color: "#FFF5EE", name: "바다조개색" },
  { color: "#FFFACD", name: "레몬색" },
  { color: "#FFFAFA", name: "눈색" },
  { color: "#FFFF00", name: "노란색" },
  { color: "#FFFFE0", name: "연노랑색" },
  { color: "#FFFFFF", name: "흰색" }
];

let currentColor = null;
let previousColors = [];
const recentLimit = 5;
function setRandomColor() {
  let newColor;
  if (colors.length <= recentLimit) {
    console.warn("색상 개수가 recentLimit보다 많아야 합니다.");
  }
  do {
    newColor = colors[Math.floor(Math.random() * colors.length)];
  } while (previousColors.includes(newColor) && previousColors.length < colors.length);
  currentColor = newColor;
  previousColors.push(newColor);
  if (previousColors.length > recentLimit) {
    previousColors.shift();
  }
  document.getElementById("colorBox").style.backgroundColor = currentColor.color;
  document.getElementById("colorResult").textContent = "";
  document.getElementById("colorHint").textContent = "";
}
function showHint() {
  if (!currentColor) return;
  const name = currentColor.name;
  const hint = `랜덤 한글자: "${name[Math.floor(Math.random() * (name.length - 1))]}", 글자 수: ${name.length}글자`;
  document.getElementById("colorHint").textContent = hint;
}
function showAns() {
  if (!currentColor) return;
  document.getElementById("colorHint").textContent = currentColor.name;
}
function checkColor() {
  const guess = document.getElementById("colorGuess").value.trim();
  const result = document.getElementById("colorResult");
  if (guess === currentColor.name) {
    setRandomColor();
    result.textContent = "정답입니다!";
  } else {
    result.textContent = "틀렸어요. 정확한 색 이름을 입력해보세요!";
  }
}

// 틱택토
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
let startingPlayer = "X";

function createTicTacToeBoard() {
  const boardContainer = document.getElementById("ticTacToeBoard");
  boardContainer.innerHTML = "";
  board.forEach((cell, index) => {
    const cellDiv = document.createElement("div");
    cellDiv.className = "tic-cell";
    cellDiv.dataset.index = index;
    cellDiv.textContent = cell;
    cellDiv.addEventListener("click", handleCellClick);
    boardContainer.appendChild(cellDiv);
  });
  document.getElementById("ticTacToeStatus").textContent = `${currentPlayer}의 차례입니다`;
}

function handleCellClick(event) {
  const index = event.target.dataset.index;
  if (board[index] !== "" || !gameActive) return;

  makeMove(index, "X");
  if (checkGameEnd()) return;

  // 컴퓨터 차례
  setTimeout(() => {
    const compIndex = bestMoveWithChance(0.7); // 70% 최적, 30% 랜덤
    makeMove(compIndex, "O");
    checkGameEnd();
  }, 300);
}

function makeMove(index, player) {
  board[index] = player;
  const cell = document.querySelector(`.tic-cell[data-index='${index}']`);
  cell.textContent = player;
  currentPlayer = player === "X" ? "O" : "X";
  document.getElementById("ticTacToeStatus").textContent = `${currentPlayer}의 차례입니다`;
}

function checkGameEnd() {
  const winnerIndex = checkWinner();
  if (winnerIndex !== -1) {
    const winner = currentPlayer === "X" ? "O" : "X";
    document.getElementById("ticTacToeStatus").textContent = `${winner} 승리!`;
    drawWinLine(winnerIndex);
    gameActive = false;
    return true;
  }

  if (!board.includes("")) {
    document.getElementById("ticTacToeStatus").textContent = "무승부입니다!";
    gameActive = false;
    return true;
  }

  return false;
}

// 난이도 조절
function bestMoveWithChance(chance = 0.9) {
  if (Math.random() < chance) {
    return bestMove(); // 완벽한 수
  } else {
    const available = board.map((v, i) => v === "" ? i : null).filter(i => i !== null);
    return available[Math.floor(Math.random() * available.length)];
  }
}

function bestMove() {
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      board[i] = "O";
      let score = minimax(board, 0, false);
      board[i] = "";
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}

function minimax(newBoard, depth, isMaximizing) {
  const result = checkWinnerForMinimax();
  if (result !== null) {
    const scores = { X: -1, O: 1, tie: 0 };
    return scores[result];
  }

  if (isMaximizing) {
    let best = -Infinity;
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === "") {
        newBoard[i] = "O";
        let score = minimax(newBoard, depth + 1, false);
        newBoard[i] = "";
        best = Math.max(score, best);
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === "") {
        newBoard[i] = "X";
        let score = minimax(newBoard, depth + 1, true);
        newBoard[i] = "";
        best = Math.min(score, best);
      }
    }
    return best;
  }
}

function checkWinnerForMinimax() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let [a,b,c] of winPatterns) {
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  if (!board.includes("")) return "tie";
  return null;
}

function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return i;
    }
  }
  return -1;
}


function resetTicTacToe() {
  board = ["", "", "", "", "", "", "", "", ""];
  startingPlayer = startingPlayer === "X" ? "O" : "X"; 
  currentPlayer = startingPlayer;
  gameActive = true;
  document.getElementById("winLine").innerHTML = "";
  createTicTacToeBoard();

  // 컴퓨터가 선공이면 바로 수 두게
  if (currentPlayer === "O") {
    setTimeout(() => {
      const compIndex = bestMoveWithChance(0.7);
      makeMove(compIndex, "O");
      checkGameEnd();
    }, 300);
  }
}

const winCoordinates = [
  [ [0, 43], [250, 43] ],
  [ [0, 128], [250, 128] ],
  [ [0, 213], [250, 213] ],
  [ [43, 0], [43, 250] ],
  [ [128, 0], [128, 250] ],
  [ [213, 0], [213, 250] ],
  [ [0, 0], [250, 250] ],
  [ [255, 0], [0, 255] ]
];

function drawWinLine(index) {
  const svg = document.getElementById("winLine");
  svg.innerHTML = "";
  const [[x1, y1], [x2, y2]] = winCoordinates[index];
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  const length = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
  line.setAttribute("stroke", "red");
  line.setAttribute("stroke-width", "5");
  line.setAttribute("stroke-linecap", "round");
  line.setAttribute("stroke-dasharray", length);
  line.setAttribute("stroke-dashoffset", length);
  svg.appendChild(line);
  requestAnimationFrame(() => {
    line.style.transition = "stroke-dashoffset 0.5s ease";
    line.setAttribute("stroke-dashoffset", "0");
  });
}

// 리액션 테스트
let reactionStartTime = 0;
let reactionTimeout = null;
function startReactionTest() {
  const box = document.getElementById("reactionBox");
  const result = document.getElementById("reactionResult");
  const status = document.getElementById("reactionStatus");
  result.textContent = "";
  status.textContent = "준비하세요...";
  box.style.backgroundColor = "red";
  if (reactionTimeout) clearTimeout(reactionTimeout);
  box.onclick = () => {
    result.textContent = "너무 빨랐어요! 초록색 될 때까지 기다리세요.";
    box.onclick = null;
  };
  reactionTimeout = setTimeout(() => {
    box.style.backgroundColor = "green";
    status.textContent = "지금 클릭!";
    reactionStartTime = Date.now();
    box.onclick = () => {
      const reaction = Date.now() - reactionStartTime;
      result.textContent = `반응 속도: ${reaction}ms`;
      box.onclick = null;
    };
  }, Math.random() * 3000 + 2000);
}

// 클릭 정밀도
let clickScore = 0;
let clickGameActive = false;
let clickGameTimer = null;
let countdownInterval = null;
function moveClickTarget() {
  if (!clickGameActive) return;
  const target = document.getElementById("clickTarget");
  const maxX = window.innerWidth - 60;
  const maxY = window.innerHeight - 60;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.onclick = () => {
    if (!clickGameActive) return;
    clickScore++;
    document.getElementById("clickScore").textContent = `점수: ${clickScore}`;
    moveClickTarget();
  };
}
function startClickAccuracy() {
  clickScore = 0;
  clickGameActive = true;
  document.getElementById("clickScore").textContent = "점수: 0";
  const target = document.getElementById("clickTarget");
  const countdown = document.getElementById("clickCountdown");
  target.style.display = "block";
  countdown.style.display = "none";
  countdown.textContent = "";
  moveClickTarget();
  setTimeout(() => {
    let remaining = 5;
    countdown.textContent = remaining;
    countdown.style.display = "block";
    countdownInterval = setInterval(() => {
      remaining--;
      if (remaining > 0) {
        countdown.textContent = remaining;
      } else {
        clearInterval(countdownInterval);
        countdown.style.display = "none";
      }
    }, 1000);
  }, 5000);
  clickGameTimer = setTimeout(() => {
    clickGameActive = false;
    target.style.display = "none";
    countdown.style.display = "none";
    clearInterval(countdownInterval);
    alert(`게임 종료! 총 점수: ${clickScore}`);
  }, 10000);
}

// 엔터키
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("numberInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      checkNumberGuess();
    }
  });
  document.getElementById("colorGuess").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      checkColor();
    }
  });
});
