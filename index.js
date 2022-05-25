
let jonSnowAttack = 25;
let johSnowHealth = 100;


let jamieLannisterAttack = 107;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has better attack than Jamie Lannister')
} else if (jonSnowAttack < jamieLannisterAttack) {
    console.log('Jamie Lannister has better attack than Jon Snow')
} else {
    console.log('Jon Snow and Jamie Lannister have the same attack')
}

if (johSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow has been slain")
} else {
    johSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is down to ${johSnowHealth}`);
}