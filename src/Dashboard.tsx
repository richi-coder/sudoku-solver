import { useState } from "react"
import Cell from "./Cell"
import { solveSudoku } from "./scripts/solver";
import { LineNumber, SquareDashboard } from "./types/GeneralTypes";
import { TypeDashboard } from "./types/GeneralTypes";

const initSudoku = new Array(9).fill(new Array(9).fill(0))

function Dashboard() {
    const [dashboard, setDashboard] = useState<TypeDashboard>(() => {
      try {
        const initDashboard = window.localStorage.getItem('dashboard');
        return initDashboard ? JSON.parse(initDashboard) : initSudoku
      } catch (error) {
        return initSudoku
      }
    })

    const userSudoku = (position: any, cell: number):void => {
        const { i, j} = position;
        const copy = dashboard.slice(0);
        const iLine = copy[i].map((square: SquareDashboard, index: number) => index === j ? cell : square)
        copy[i] = iLine;
        const updatedDashboard = [...copy]
        window.localStorage.setItem('dashboard', JSON.stringify(updatedDashboard))        
        setDashboard(updatedDashboard)
    }

    const startSudokuSolver = () => {
      const countingLackingSquares = dashboard.map((line: LineNumber)  => line.filter((square: SquareDashboard) => square == 0));
      let count = 0;
      countingLackingSquares.forEach((zeroLine: LineNumber) => zeroLine.forEach((zeroSquare: SquareDashboard) => {
        count++;
      }))
      console.log(count, 'Lacking squares!');
      setDashboard(solveSudoku(dashboard))
    }
    
    const cleanDashboard = () => {
        window.localStorage.setItem('dashboard', JSON.stringify(initSudoku))
        setDashboard(initSudoku)
    }

  return (
    <div className='flex flex-row'>
      <div className='grid grid-cols-9'>
          {
              dashboard.map((line: LineNumber, i: number) => 
                  line.map((cell: SquareDashboard, j: number) => 
                          <Cell key={String(i) + String(j)} position={{i, j}} cell={cell} sudokuPuzzle={userSudoku} />
              ))
          }
          
      </div>
      <button
          onClick={startSudokuSolver}
          className='bg-blue-700 text-white'>
          solve
      </button>
      <button
          onClick={cleanDashboard}
          className='bg-orange-700 text-white'>
          clean
      </button>
    </div>
  )
}

export default Dashboard