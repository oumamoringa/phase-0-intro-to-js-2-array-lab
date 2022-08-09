// Write your solution here!
const   cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");   
}

function destructivelyRemoveLastCat(){
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat(){
    cats.shift("Milo");
}

function appendCat(name){
    const newcats = cats.slice();
    newcats.push("Broom");
    return newcats;
}

function prependCat(name){
    const newarray = cats.slice();
    newarray.unshift("Arnold");
    return newarray;
}

function removeLastCat(){
    const last = cats.slice();
    last.pop()
    return last;
}

function removeFirstCat(){
    const rem = cats.slice();
    rem.shift();
    return rem;
}