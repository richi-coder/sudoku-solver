import { useState } from "react"
import Cell from "./Cell"

function Dashboard() {
    const [dashboard, setDashboard] = useState(new Array(9).fill(new Array(9).fill('')))

    const userSudoku = (position: any, cell: string):void => {
        const { i, j} = position;
        const copy = dashboard.slice(0);
        const iLine = copy[i - 1].map((square: string, index: number) => index === j - 1 ? cell : square)
        copy[i - 1] = iLine;
        const updatedDashboard = [...copy]
        console.log(updatedDashboard, 'updated');
        setDashboard(updatedDashboard)
    }

  return (
    <div className='grid grid-cols-9'>
        {
            dashboard.map((line, i: number) => 
                line.map((cell: string, j: number) => 
                        <Cell key={String(i) + String(j)} position={{i: i+1, j: j+1}} cell={cell} sudokuPuzzle={userSudoku} />
            ))
        }
    </div>
  )
}

export default Dashboard