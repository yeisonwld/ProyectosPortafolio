class ConnectFour {
    constructor() {
        this.ROWS = 6;
        this.COLS = 7;
        this.board = [];
        this.currentPlayer = 'red';
        this.gameOver = false;
        this.redScore = 0;
        this.yellowScore = 0;
        this.gameCount = 0;
        this.winningCells = [];
        
        this.initializeBoard();
        this.createBoardHTML();
        this.bindEvents();
        this.updateDisplay();
    }
    
    initializeBoard() {
        this.board = [];
        for (let row = 0; row < this.ROWS; row++) {
            this.board[row] = [];
            for (let col = 0; col < this.COLS; col++) {
                this.board[row][col] = null;
            }
        }
        this.gameOver = false;
        this.winningCells = [];
    }
    
    createBoardHTML() {
        const gameBoard = document.getElementById('gameBoard');
        gameBoard.innerHTML = '';
        
        const boardGrid = document.createElement('div');
        boardGrid.className = 'board-grid';
        
        for (let row = 0; row < this.ROWS; row++) {
            for (let col = 0; col < this.COLS; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.addEventListener('click', () => this.handleCellClick(col));
                boardGrid.appendChild(cell);
            }
        }
        
        gameBoard.appendChild(boardGrid);
    }
    
    handleCellClick(col) {
        if (this.gameOver) return;
        
        const row = this.getLowestEmptyRow(col);
        if (row === -1) return; // Columna llena
        
        this.board[row][col] = this.currentPlayer;
        this.updateCellDisplay(row, col);
        
        if (this.checkWin(row, col)) {
            this.handleWin();
        } else if (this.isBoardFull()) {
            this.handleDraw();
        } else {
            this.switchPlayer();
        }
    }
    
    getLowestEmptyRow(col) {
        for (let row = this.ROWS - 1; row >= 0; row--) {
            if (this.board[row][col] === null) {
                return row;
            }
        }
        return -1;
    }
    
    updateCellDisplay(row, col) {
        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        cell.classList.add(this.currentPlayer);
    }
    
    checkWin(row, col) {
        const directions = [
            [0, 1],   // Horizontal
            [1, 0],   // Vertical
            [1, 1],   // Diagonal /
            [1, -1]   // Diagonal \
        ];
        
        for (let [deltaRow, deltaCol] of directions) {
            const count = 1 + 
                this.countDirection(row, col, deltaRow, deltaCol) +
                this.countDirection(row, col, -deltaRow, -deltaCol);
            
            if (count >= 4) {
                this.markWinningCells(row, col, deltaRow, deltaCol);
                return true;
            }
        }
        
        return false;
    }
    
    countDirection(row, col, deltaRow, deltaCol) {
        let count = 0;
        let currentRow = row + deltaRow;
        let currentCol = col + deltaCol;
        
        while (
            currentRow >= 0 && currentRow < this.ROWS &&
            currentCol >= 0 && currentCol < this.COLS &&
            this.board[currentRow][currentCol] === this.currentPlayer
        ) {
            count++;
            currentRow += deltaRow;
            currentCol += deltaCol;
        }
        
        return count;
    }
    
    markWinningCells(row, col, deltaRow, deltaCol) {
        this.winningCells = [[row, col]];
        
        // Marcar en una dirección
        let currentRow = row + deltaRow;
        let currentCol = col + deltaCol;
        while (
            currentRow >= 0 && currentRow < this.ROWS &&
            currentCol >= 0 && currentCol < this.COLS &&
            this.board[currentRow][currentCol] === this.currentPlayer
        ) {
            this.winningCells.push([currentRow, currentCol]);
            currentRow += deltaRow;
            currentCol += deltaCol;
        }
        
        // Marcar en la dirección opuesta
        currentRow = row - deltaRow;
        currentCol = col - deltaCol;
        while (
            currentRow >= 0 && currentRow < this.ROWS &&
            currentCol >= 0 && currentCol < this.COLS &&
            this.board[currentRow][currentCol] === this.currentPlayer
        ) {
            this.winningCells.push([currentRow, currentCol]);
            currentRow -= deltaRow;
            currentCol -= deltaCol;
        }
        
        // Aplicar clase de victoria a las celdas ganadoras
        this.winningCells.forEach(([r, c]) => {
            const cell = document.querySelector(`[data-row="${r}"][data-col="${c}"]`);
            cell.classList.add('winning');
        });
    }
    
    isBoardFull() {
        for (let col = 0; col < this.COLS; col++) {
            if (this.board[0][col] === null) {
                return false;
            }
        }
        return true;
    }
    
    handleWin() {
        this.gameOver = true;
        
        if (this.currentPlayer === 'red') {
            this.redScore++;
        } else {
            this.yellowScore++;
        }
        
        this.updateScoreDisplay();
        this.showMessage(`¡${this.getPlayerName()} ha ganado!`, 'winner');
    }
    
    handleDraw() {
        this.gameOver = true;
        this.showMessage('¡Empate! El tablero está lleno.', 'draw');
    }
    
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'red' ? 'yellow' : 'red';
        this.updateDisplay();
    }
    
    getPlayerName() {
        return this.currentPlayer === 'red' ? 'Jugador Rojo' : 'Jugador Amarillo';
    }
    
    updateDisplay() {
        const currentPlayerDisplay = document.getElementById('currentPlayerDisplay');
        currentPlayerDisplay.textContent = this.getPlayerName();
        currentPlayerDisplay.className = `player-indicator ${this.currentPlayer}`;
    }
    
    updateScoreDisplay() {
        document.getElementById('redScore').textContent = this.redScore;
        document.getElementById('yellowScore').textContent = this.yellowScore;
    }
    
    showMessage(message, type = '') {
        const messageElement = document.getElementById('gameMessage');
        messageElement.textContent = message;
        messageElement.className = `game-message ${type}`;
        
        if (type === 'winner') {
            setTimeout(() => {
                messageElement.textContent = 'Haz clic en "Reiniciar Partida" para jugar de nuevo.';
                messageElement.className = 'game-message';
            }, 3000);
        }
    }
    
    restartGame() {
        this.gameCount++;
        // Alternar el jugador que comienza según el número de partidas
        this.currentPlayer = this.gameCount % 2 === 1 ? 'red' : 'yellow';
        
        this.initializeBoard();
        this.createBoardHTML();
        this.updateDisplay();
        
        const messageElement = document.getElementById('gameMessage');
        messageElement.textContent = '';
        messageElement.className = 'game-message';
    }
    
    resetScores() {
        this.redScore = 0;
        this.yellowScore = 0;
        this.gameCount = 0;
        this.updateScoreDisplay();
        this.restartGame();
        this.showMessage('Marcador reseteado. ¡Nueva serie de partidas!');
        
        setTimeout(() => {
            const messageElement = document.getElementById('gameMessage');
            messageElement.textContent = '';
        }, 2000);
    }
    
    bindEvents() {
        document.getElementById('restartGame').addEventListener('click', () => {
            this.restartGame();
        });
        
        document.getElementById('resetScores').addEventListener('click', () => {
            this.resetScores();
        });
    }
}

// Inicializar el juego cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new ConnectFour();
});

// Agregar efectos de sonido simulados (opcional)
function playSound(type) {
    // Aquí se podrían agregar efectos de sonido reales
    console.log(`Reproduciendo sonido: ${type}`);
}

// Función para agregar efectos visuales adicionales
function addVisualEffects() {
    // Efectos de partículas o animaciones adicionales
    console.log('Agregando efectos visuales');
}