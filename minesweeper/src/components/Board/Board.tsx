import * as React from 'react'

import getBoard from '../../helpers/getBoard'
import type Coords from '../../types/Coords'
import Cell from '../Cell'
import Display from '../Display'

import './Board.css'

function BoardComponent() {
    // Selected coords
    const [
        selectedCoords,
        setSelectedCoords,
    ] = React.useState<Coords | undefined>()

    // Load the board
    const board = getBoard()

    const output = []

    const renderRow = (x: number) => {
        const renderedRow = []

        for (let y = 0; y < board[x].length; y++) {
            const isSelected = selectedCoords && (
                selectedCoords[0] === x && selectedCoords[1] === y
            )
            renderedRow.push(
                <Cell
                    board={board}
                    isSelected={isSelected}
                    onClick={() => setSelectedCoords([x, y])}
                    x={x}
                    y={y}
                />
            )
        }

        return renderedRow
    }

    for (let x = 0; x < board.length; x++) {
        output.push(
            <div className="board-row">
                {renderRow(x)}
            </div>
        )
    }
    
    return (
        <>
            <Display
                board={board}
                coords={selectedCoords}
            />
            {output}
        </>
    )
}

export default BoardComponent
