//settime out ekbar cholbe but set interval bar bar cholbe 

console.log('first');
let seconds = 0;
const timeId = setInterval(() => {
    // seconds++;
    console.log(++seconds);
    if (seconds > 15) {
        clearInterval(timeId); //timeId = parameter
    }
}, 1000)
//16 te giye atke jabe 
console.log('second');
//ebar abr 1 diye shuru hbe 
//eki vabe --, ++ o korte pari