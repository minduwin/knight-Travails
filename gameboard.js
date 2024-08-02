// Create the chess board module

const gameBoard = () => {

    // Instantiate variables and create chessboard table
    const defaultStartLocation = [0, 0];
    const coordArray = [];
    const chessTable = document.createElement('table');

    // Create the board cells and aplly position values to each cell
    chessTable.setAttribute('class', 'center');
    for (let i = 0; i < 8; i++) {
        const tableRow = document.createElement('tr');
        let cellRowCoord = Math.abs(i - 7);
        // tableRow.textContent = cellRowCoord;    // REMOVE WHEN DONE
        for (let z = 0; z < 8; z++) {
            const tableCell = document.createElement('td');
            let cellColumnCoord = z;
            // tableCell.textContent = cellColumnCoord;    // REMOVE WHEN DONE
            if ((i + z) % 2 == 0) {
                tableCell.setAttribute('class', 'cell whitecell');
                tableRow.appendChild(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellColumnCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0, 2);
            } else {
                tableCell.setAttribute('class', 'cell blackcell');
                tableRow.appendChild(tableCell);
                coordArray.push(cellRowCoord);
                coordArray.push(cellColumnCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0, 2);
            }
        }

        chessTable.appendChild(tableRow);
    }

    // Create Knight and place it at position 0,0
    const cellNodes = chessTable.querySelectorAll('td');
    cellNodes.forEach((cellNode) => {
        if (defaultStartLocation.toString() === cellNode.dataset.coordArray) {
            let knightImg = document.createElement('img');
            knightImg.src = './k1.svg';
            cellNode.appendChild(knightImg);
        }
    });

    document.body.appendChild(chessTable);
};

const reset = (function() {
    const resetButton = document.querySelector('.clear-board');
    resetButton.addEventListener('click', function() {
        location.reload();
    });
})();

export { gameBoard };