function digit_gatekeeper() {
    let l = Number(prompt("Enter l : "));
    let r = Number(prompt("Enter r : "));
    let k = Number(prompt("Enter k : "));
    let count = 0;
    for (let x = l; x < r; x++) {
        if (x % k === 0) {
            let temp = x;
            let sum = 0;
            let has_zero = false;
            while (temp > 0) {
                let digit = temp % 10;
                if (digit === 0) {
                    has_zero = true;
                    break;
                }
                sum = sum + digit;
                temp = Math.floor(temp / 10);
            }
            if (has_zero === false && sum > 1) {
                let is_prime = true;
                for (let i = 2; i <= Math.sqrt(sum); i++) {
                    if (sum % i === 0) {
                        is_prime = false;
                        break;
                    }
                }
                if (is_prime === true) {
                    count++;
                }
            }
        }
    }
    alert(count);
}