import { displayMoves } from "./displayMoves.js";

// Employing a Graph Breadth-First-Search algo for the moves

const squareRegistry = new Map();

// Get/set current coords to the board
const chessSquare = (x, y) => {
    const xPosition = x;
    const yPosition = y;
    let predecessor;

    // Define array for hardcoded possible moves of Knight
    const knightMoves = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ]

    const getPredecessor = () => predecessor;
    const setPredecessor = (newPredecessor) => {
        predecessor = predecessor || newPredecessor;
    }

    const name = () => `${x}, ${y}`;

    // Evaluate current possible knight moves against offsets
    const possibleKnightMoves = () => {
        return knightMoves
            .map((offset) => newSquareFrom(offset[0], offset[1]))
            .filter((square) => square !== undefined);
    }

    // Calculate new set of square coords against the offsets
    const newSquareFrom = (xOffset, yOffset) => {
        const [newX, newY] = [xPosition + xOffset, yPosition + yOffset];
        if (0 <= newX && newX < 8 && 0 <= newY && y < 8) {
            return chessSquare(newX, newY);
        }
    }

    // Get/set map constructor object names
    if (squareRegistry.has(name())) {
        return squareRegistry.get(name());
    } else {
        const newSquare = { name, getPredecessor, setPredecessor, possibleKnightMoves};
        squareRegistry.set(name(), newSquare);
        return newSquare;
    }
}

// Intake the click coords from user and run the search algorithm
const knightTravails = (start, finish) => {
    squareRegistry.clear();

    const origin = chessSquare(...start);
    const target = chessSquare(...finish);

    const queue = [origin];
    while (!queue.includes(target)) {
        const currentSquare = queue.shift();

        const enqueueList = currentSquare.possibleKnightMoves();
        enqueueList.forEach((square) => square.setPredecessor(currentSquare));
        queue.push(...enqueueList);
    }
    const path = [target];
    while (!path.includes(origin)) {
        const prevSquare = path[0].getPredecessor();
        path.unshift(prevSquare);
    }

    // console.log(`Shortest path: ${path.length - 1} moves.`);
    // console.log('The moves were: ');
    let squareCoord = [];
    path.forEach((square) => {
        // console.log(square.name())
        squareCoord.push(square.name());
    });
    // console.log(squareCoord)
    displayMoves(path, squareCoord);

}

export { knightTravails };