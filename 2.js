function roll_seed() {
    let num = Number(prompt("Enter value of number  :  "));
    let seed = Number(prompt("Enter value of seed  :  "));
    for (let i = 0; i < 3; i++) {
        if (num % 2 == 0) {
            num = (num / 2) + seed;
        }
        else {
            num = (num * 3) - seed;
        }
    }
    if (num <= 999 && num >= 100) {
        let mid = Math.floor(num / 10) % 10 ;
        if (mid == seed) {
            alert("YES " + num);
        }
    }
    else {
        alert("NO");
    }
}