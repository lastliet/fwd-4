function contest_judge() {
    let a = Number(prompt("Enter a : "));
    let b = Number(prompt("Enter b : "));
    let c = Number(prompt("Enter c : "));
    let score = 3 * a + b - 2 * c ;
    if (score < 0) {
        score = 0 ;
    }
    if ((a + b + c) > 50) {
        score -= 10 ;
    }
    if (score >= 60) {
        alert(score + "PASS");
    }
    else {
        alert(score + "FAIL");
    }
}