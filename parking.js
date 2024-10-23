function parking(number, yesterday, today) {
    let result = 0;
    for (let i = 0; i < number; i++) {
        if (yesterday[i] === "C" && today[i] === "C") {
            result++;
        }
    }
    return result;
}
y = ["C", "C", "C"]
z = ["C", "C", "."]
console.log(parking(3, y, z));
