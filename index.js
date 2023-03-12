// Code your solutions in this file
function writeCards(name, type) {
    let message = [];

    for (let i = 0; i < name.length; i++) {
      message.push (`Thank you, ${name[i]}, for the wonderful ${type} gift!`);
    }

    return message;
}

function countDown(i) {
    let downCount = i;
    while (downCount >= 0)  {
        console.log(downCount--);
    }
}