function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
    printYes();
    } else {
    printNo();
    }
    }
    const printYes = function () {
    console.log('yes!');
    }
    const printNo = function () {
    console.log('no!');
    }
    randomQuiz('wrong', printYes, printNo);
    randomQuiz('love you', printYes, printNo);