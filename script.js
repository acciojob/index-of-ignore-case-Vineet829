function indexOfIgnoreCase(s1, s2) {
    return s1.toLowerCase().indexOf(s2.toLowerCase()) !== -1 ? s1.toLowerCase().indexOf(s2.toLowerCase()) : -1;
}
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
