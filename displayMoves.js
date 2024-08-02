const displayMoves = (path, squareCoord) => {
    // Remove any existing p tags from previous move, if any
    if (document.querySelector('p') !== null) {
        const displayDiv = document.querySelector('div');
        const pNodes = displayDiv.querySelectorAll('p');
        pNodes.forEach((pNode) => pNode.remove());
    }

    const displayDiv = document.querySelector('div');
    const moveNumber = document.createElement('p');
    const coordList = document.createElement('p');
    moveNumber.textContent = `Shortest path: ${path.length - 1} moves`;
    coordList.innerHTML = squareCoord.join('<br>');
    displayDiv.appendChild(moveNumber);
    displayDiv.appendChild(coordList);
}

export { displayMoves };