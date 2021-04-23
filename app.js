const binaryInput = document.getElementById("binaryInput");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn")
let binaryValue = '';
let finalValue = 0;

const calculate = () => {

    binaryValue = binaryInput.value;

    if(binaryValue === ''){
        alert('Input field may not be empty');
        return;
    }

    if(binaryValue.includes('2') || binaryValue.includes('3') || binaryValue.includes('4') || binaryValue.includes('5') || binaryValue.includes('6') || binaryValue.includes('7') || binaryValue.includes('8') || binaryValue.includes('9')){
        alert('This is not a binary number');
        binaryValue === '';
        return;
    }

    if (binaryValue.length > 8) {
        alert('Number must not exceed 8 characters');
        return;
    }

    let binaryLength = binaryValue.length;
    console.log(binaryLength);

    

    for (let index = 0; index < binaryLength; index++) {
        let bit = binaryValue.charAt(binaryLength-index-1);
        finalValue += parseInt(bit) * Math.pow(2, index);
    }

    console.log(finalValue);

    const displayResult = document.createElement('p');
    document.body.appendChild(displayResult);
    displayResult.innerHTML = `${finalValue}`;

    binaryInput.value = '';
    resetBtn.style.display = 'block';
    submitBtn.style.display = 'none';

}

const reset = () => {
    finalValue = 0;
    console.log(finalValue);
    document.querySelector('p').remove();
    resetBtn.style.display = 'none';
    submitBtn.style.display = 'block';
}


submitBtn.addEventListener('click', calculate);
resetBtn.addEventListener('click', reset);


