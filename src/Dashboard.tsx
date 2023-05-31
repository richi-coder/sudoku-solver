import { useState } from "react"
import Cell from "./Cell"

function Dashboard() {
    const [dashboard, setDashboard] = useState(() => {
      try {
        const initDashboard = window.localStorage.getItem('dashboard');
        return initDashboard ? JSON.parse(initDashboard) : new Array(9).fill(new Array(9).fill(''))
      } catch (error) {
        return new Array(9).fill(new Array(9).fill(''));
      }
    })

    const userSudoku = (position: any, cell: string):void => {
        const { i, j} = position;
        const copy = dashboard.slice(0);
        const iLine = copy[i].map((square: string, index: number) => index === j ? cell : square)
        copy[i] = iLine;
        const updatedDashboard = [...copy]
        window.localStorage.setItem('dashboard', JSON.stringify(updatedDashboard))        
        setDashboard(updatedDashboard)
    }

  return (
    <div className='flex flex-row'>
      <div className='grid grid-cols-9'>
          {
              dashboard.map((line: [], i: number) => 
                  line.map((cell: string, j: number) => 
                          <Cell key={String(i) + String(j)} position={{i, j}} cell={cell} sudokuPuzzle={userSudoku} />
              ))
          }
          
      </div>
      <button className='bg-blue-700 text-white'>solve</button>
    </div>
  )
}

export default Dashboard