// Code your solutions in this file

const names = ['Guadalupe', 'Ollie', 'Aki']
const newMessage = []

function writeCards(names, message) {
    for (let i = 0; i < names.length; i++) {
        newMessage.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
    }
    return newMessage
}



function countDown(){
    let counter = 10;
    while(counter >=0){
        console.log(counter)
        counter = counter - 1;
    }
    return counter
}
countDown()