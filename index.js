
let jonSnowAttack = 25;
let johSnowHealth = 100;
let jonSnowDefense = 0;

let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has better attack than Jamie Lannister');
} else if (jonSnowAttack < jamieLannisterAttack) {
    console.log('Jamie Lannister has better attack than Jon Snow');
} else {
    console.log('Jon Snow and Jamie Lannister have the same attack');
}

if (johSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow has been slain");
} else {
    johSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${johSnowHealth}`);
}

//Jon picks up a shield
jonSnowDefense += 25;

if (johSnowHealth <= (jamieLannisterAttack - jonSnowDefense)) {
    console.log("Jon Snow has been slain");
} else {
    johSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    console.log(`Jon Snow's health is down to ${johSnowHealth}`);
}

// Peasant throws Jon a health kit of 50: heal up!
const healthKit = 50;

if ((johSnowHealth + healthKit) >= 100) {
    johSnowHealth = 100;
} else {
    johSnowHealth += healthKit;
}

