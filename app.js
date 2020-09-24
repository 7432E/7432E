
const letters = document.querySelectorAll("#tletters path");


for(let i = 0; i<letters.length; i++) {
    console.log(`Letter ${i} is ${letters[i].getTotalLength()}`);
}