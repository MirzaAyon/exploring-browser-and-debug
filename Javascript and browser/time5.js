function doSomething() {
    console.log('I am coding JavaScript');
}
console.log('first');
console.log('second');
// setTimeout(doSomething, 5); //5 dile eta mili second e ashbe tokhn distance ta ami dekhbo na 
setTimeout(function () {
    console.log('I am using VS code');
}, 5000);
//ekta anonymous func create korlam
setTimeout(() => {
    console.log('exploring with arrow func')
}, 4000);
console.log('third');
console.log('forth');
//settime out dewar fole dosomething shobar pore ashche/  kaj kortese

//settime out use korle sheta synchronized bhabe hbe na asynchronised bhabe hbe 