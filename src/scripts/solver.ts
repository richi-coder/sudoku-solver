import { TypeDashboard } from "../types/GeneralTypes";
import { linearSolver } from "./linearSolver";



export const solveSudoku = (dashboard: TypeDashboard) => {
    const initialTime = Date.now()
    
    // 1. Convert strings into numbers
    const dashboardNumber: TypeDashboard = converToNumber(dashboard);

    // 1.5 Iterations
    let iteration = dashboardNumber;

    for (let k = 0; k < 500; k++) {

        // first solver: LINEAR SOLVER
        iteration = linearSolver(iteration, k)

    }
    
    // *******************************************
    const totalTime = Date.now() - initialTime;
    console.log(totalTime + 'ms', 'TOTAL-TIME')
    return iteration;
}

const converToNumber = (dashboard: TypeDashboard) => {
    const dashboardNumber: TypeDashboard = dashboard.map(line => line.map(numberString => Number(numberString)))
    return dashboardNumber;
}