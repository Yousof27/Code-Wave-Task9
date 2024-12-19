let num, sum = 0;
let result = document.querySelector("label");

while (sum < 100) {
    num = parseInt(prompt("Enter A Number (0 For Exit)", 1));
    if (num === 0 || sum + num > 100) {
        break;
    }
    sum += num;
}

result.innerHTML = sum;