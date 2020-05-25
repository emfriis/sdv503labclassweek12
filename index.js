let currVals = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
];

function checkCashRegister(price, cash, cid) {
    let due = cash - price;
    let currChange = [];
    let cidRev = cid.slice().reverse();
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < (cidRev[i][1] / currVals[i][1]); j++) {
            if (due > currVals[i][1] && cidRev[i][1] > 0) {
                due -= currVals[i][1];
                currVals[i][1] -= currVals[i][1];
            } else if (due !== 0 && due < currVals[i][1] && cidRev[i][1] !== 0) {
                currChange.unshift(cidRev[i]);
            } else if ( due > 0 && i === 8 && cidRev[i][1] === 0) {
                return {status: "INSUFFICIENT_FUNDS", change: []};
            };
        };
    };
    if (due === 0) {
        return {status: "OPEN", change: currChange};
    };
};
  
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));












var potat = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
console.log(potat.slice().reverse())

function checkCashRegisterStuff(price, cash, cid) {
    let changeNet = 0;
    for (let curr in cid) {
        changeNet += cid[curr][1];
    };
    if (cash - price > changeNet) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    let currArr = [];
    for (let curr in cid) {
        currArr.unshift([(cid[curr])])
    };
  };

function gg () {
    for (var i = 0; i < 3; i++) {
        console.log("potat")
    }
}

console.log(gg())