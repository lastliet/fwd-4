function fare_calculator() {
    let base = Number(prompt("Enter base : "));
    let distance = Number(prompt("Enter distance : "));
    let minutes_late = Number(prompt("Enter minutes_late : "));
    let seed = Number(prompt("Enter seed : "));
    let fare = base + 7 * distance;
    if (minutes_late > 15) {
        fare += 20;
    }
    if (distance > 10) {
        fare += 0.10 * fare;
    }
    if (seed % 2 == 0) {
        fare += seed;
    }
    else {
        fare -= seed;
    }
    let final_fare = Math.ceil(fare / 5) * 5;
    alert("Final fare : " + final_fare);
}