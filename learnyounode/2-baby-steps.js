const args = process.argv.slice(2);
let sum = 0;
args.forEach((num) => {
    sum += parseInt(num);
});
console.log(sum);
