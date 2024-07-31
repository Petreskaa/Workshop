const marks = +prompt("Enter points: ");
console.log(marks);

if (marks > 90) { 
    console.log("AA")
}
else if (marks <= 90 && marks > 80) {
    console.log("AB");
}
else if (marks <= 80 && marks > 70) {
    console.log("BB");
}
else if (marks <= 70 && marks > 60) {
    console.log("BC");
}
else if (marks <= 60 && marks > 50) {
    console.log("CC");
}
else if (marks <= 50 && marks > 40) {
    console.log("CD");
}
else if (marks <= 40 && marks > 30) {
    console.log("DD");
}
else {
    console.log("FF");
}
