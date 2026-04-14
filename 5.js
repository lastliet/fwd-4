function skipping_numbers() {
    let seed = Number(prompt("Enter seed : "));
    let n = Number(prompt("Enter N : "));
    let m = 0 ;
    let sum = 0 ;
    while(sum < n) {
        m++ ;
        if (m % (seed + 2) != 0) {
            sum += m ;
        }
    }
    alert(m + sum);
}