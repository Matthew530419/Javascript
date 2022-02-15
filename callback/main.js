class Counter {
    constructor(){
        this.counter = 0;
        console.log(this.counter);
    }

    increase(runIf5Times) {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0) {
            runIf5Times(this.counter);
        }
    }
}

function printSomething(num) {
    console.log(`yo! ${num}`);
}

function alertNum(num) {
    alert(`Wow! ${num}`);
}

const coolCounter = new Counter();
coolCounter. increase(printSomething);
coolCounter. increase(printSomething);
coolCounter. increase(printSomething);
coolCounter. increase(printSomething);
coolCounter. increase(alertNum);


