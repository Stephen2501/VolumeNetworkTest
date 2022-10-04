import { neighborBombCount } from '../../helpers/misc'
import type Board from '../../types/Board'
import type Coords from '../../types/Coords'
import './Display.css'

interface DisplayProps {
    board: Board;
    coords?: Coords;
}

function Display({ board, coords }: DisplayProps) {
    const numBombs = coords && neighborBombCount(board, coords)

    return (
        <div className="display">
            {!coords && (
                <div className="no-cell">
                    No cell selected. Click on a cell
                </div>
            )}
            {coords && (<div>Position: {coords[0]}, {coords[1]}</div>)}
            {coords && (<div>Number of neighbouring bombs: {numBombs}</div>)}
        </div>
    )
}

export default Display
