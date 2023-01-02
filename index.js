// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return `${cats.push(name)}`;
}

destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
    return `${cats.unshift(name)}`;
}

destructivelyPrependCat("Bob");

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveLastCat() {
    return `${cats.pop()}`;
}
destructivelyRemoveLastCat()

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');

function destructivelyRemoveFirstCat() {
    return `${cats.shift()}`;
}
destructivelyRemoveFirstCat()

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function appendCat(name) {
    return `${cats.splice(3, 0, name)}`
}

appendCat('Broom');

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

function prependCat(name){
    return `${cats.splice(0,0,name)}`
}
prependCat("Arnold");
console.log(cats);

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');
function removeLastCat(){
    return `${cats.}`
}



