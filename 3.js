function mirror_corridor() {
    let n = Number(prompt("Enter n : "));
    let k = Number(prompt("Enter k : "));
    let x_exists = false;
    for(let x = 0 ; x < 10000 ; x++) {
        let num = x + n ;
        if(num % k == 0) {
            let temp = num ;
            let rev_num = 0 ;
            while(temp > 0) {
                let rem = temp % 10 ;
                temp = Math.floor((temp - rem) / 10) ;
                rev_num = (rev_num * 10) + rem ;
            }
            if(temp == rev_num) {
                x_exists = true;
                alert(x);
                break ;
            }
        }
    }
    if(x_exists == false) {
        alert("-1");
    }
}