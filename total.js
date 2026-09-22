function calculateTotal(numbers){
    let total=0;

    for(let i=0;i<numbers.length;i++){
        total +=numbers[i];
    }
    return total;
}
    function getStatus(total, target=100){
        if(total>=target){
            return "Target Reached";
        }else{
            return "Target not Reached";
        }
    



}
let total=calculateTotal([20,35,50]);

console.log(total);
console.log(getStatus(total));
