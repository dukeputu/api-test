
let a = [];

function fourDigit() {
    const ran = rand()
    const rands = ran + '';

    if (rands.length == 4) { 
        return rands;
    }
    else {
        return fourDigit()
    }

}

function rand() {
    let b = Math.round(Math.random() * 10000);
    return b;
}


console.log(a);
// rand()


