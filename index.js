let currVals = [100.00, 20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01];

function checkCashRegister(price, cash, cid) {
    let due = cash - price;
    console.log(due)
    let currTotal = 0;
    for (var i = 0; i < 9; i++) {
        currTotal += cid[i][1];
    };
    if (currTotal === due) {
        return {status: "CLOSED", change: cid}
    }
    let currChange = [];
    let cidRev = cid.slice().reverse();
    console.log(cidRev)
    for (var i = 0; i < 9; i++) {
        let curr = 0;
        let currItems = cidRev[i][1] / currVals[i];
        for (var j = 0; j < currItems; j++) {
            if (due >= currVals[i] && cidRev[i][1] > 0) {
                console.log(j)
                due -= currVals[i];
                cidRev[i][1] -= currVals[i];
                curr += currVals[i];
                console.log(curr)
            };
        };
        if (curr > 0) {
            currChange.unshift([cidRev[i][0], curr]);
        };
        if (due > 0 && i === 8 && cidRev[i][1] === 0) {
            return {status: "INSUFFICIENT_FUNDS", change: []};
        };
    };
    console.log(currChange)
    console.log(due)
    if (due === 0) {
        return {status: "OPEN", change: currChange};
    };
};

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));





