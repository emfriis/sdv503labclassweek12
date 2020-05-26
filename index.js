let currVals = [100.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01]; // Creates an array matching the values of currency in the register.

function checkCashRegister(price, cash, cid) { // Returns the status of the register and the change given.
    let due = cash - price; // Sets change due to the difference between price and cash given.
    let currTotal = 0; // Sets the register's total currency to 0.
    for (var i = 0; i < 9; i++) { // Executes code for each currency bucket in register.
        currTotal += cid[i][1]; // Adds the currency from each bucket to the total.
    };
    if (currTotal === due) { // Executes code if the change due is equal to the total currency in the register.
        return {status: "CLOSED", change: cid} // Returns the register is closed and the register's change.
    }
    let currChange = []; // Sets the total change given to an empty array.
    let cidRev = cid.slice().reverse(); // Reverses the order of the buckets in the register.
    for (var i = 0; i < 9; i++) { // Executes code for each currency bucket in register.
        let curr = 0; // Sets change given from current bucket to 0.
        let currItems = cidRev[i][1] / currVals[i]; // Sets the repetitions for checking buckets to the number of currency items in the bucket.
        for (var j = 0; j < currItems; j++) { // Executes code for each currency item in the bucket.
            if (due >= currVals[i] && cidRev[i][1] > 0) { // Executes code if change due is larger than the current bucket currency and if their is currency in the bucket.
                due -= currVals[i]; // Subtracts the change given from the change due.
                cidRev[i][1] -= currVals[i]; // Subtracts the change given from the register's currency.
                curr += currVals[i]; // Adds the change given to the change given from the current bucket.
            };
        };
        if (curr > 0) { // Executes if change was given from the current bucket.
            currChange.push([cidRev[i][0], curr]); // Pushes the change given from the current bucket to the total change given.
        };
        if (due > 0 && i === 8 && cidRev[i][1] === 0) { // Executes code if the currency in the register cannot make up the change required.
            return {status: "INSUFFICIENT_FUNDS", change: []}; // Returns that the register has insufficient funds.
        };
    };
    if (due === 0) { // Executes code if all change due has been paid.
        return {status: "OPEN", change: currChange}; // Returns that the register is open and the total change given.
    } else if (due > 0 && due < 0.01 && cidRev[8][1] > 0) { // Executes if JavaScript has an error with floating point number precision and there is still currency in the penny bucket.
        currChange[currChange.length -1][1] += 0.01; // Adds 1 penny to the total change given.
        return {status: "OPEN", change: currChange}; // Returns that the register is open and the total change given.
    };
};

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));





