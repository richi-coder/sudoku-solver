import { TypeDashboard } from "../types/GeneralTypes";
import { blockSolver } from "./blockSolver";
import { linearSolver } from "./linearSolver";

export const solveSudoku = (dashboard: TypeDashboard) => {
    const initialTime = Date.now()
    
    // 1. Convert strings into numbers
    const dashboardNumber: TypeDashboard = converToNumber(dashboard);

    // 1.5 Iterations
    let iteration: TypeDashboard = dashboardNumber;

    for (let k = 0; k < 50; k++) {
        iteration = converToNumber(iteration)
        // first solver: LINEAR SOLVER
        iteration = linearSolver(iteration, k)
        iteration = blockSolver(iteration, k)

    }
    
    // *******************************************
    const totalTime = Date.now() - initialTime;
    console.log(totalTime + 'ms', 'TOTAL-TIME')
    return iteration;
}

const converToNumber = (dashboard: TypeDashboard) => {
    const dashboardNumber: TypeDashboard = dashboard.map(line => line.map(numberString => String(numberString).length > 1 ? 0 : Number(numberString)))
    return dashboardNumber;
}