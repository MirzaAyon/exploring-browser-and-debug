//settime out ekbar cholbe but set interval bar bar cholbe 

console.log('first');
let seconds = 0;
const timeId = setInterval(() => {
    seconds++;
    console.log(seconds);
    if (seconds > 15) {
        clearInterval(timeId); //timeId = parameter
    }
}, 1000)
//16 te giye atke jabe 
console.log('second');
//ekhn dekha jachee je ek ek kore bartese
//infinite run bondho korar jnno console e ba terminal e  giye control + c dite hbe tahole bar bar run off hoye jabe

//animation typer kono kichu bananor jonno othoba kono kichu bar bar bar bar cholbe ta thamanor jonno settimeout,setinterval use hbe 