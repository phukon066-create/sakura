function checkTemperature(temperature){
    let message ="" ;

    if(temperature<20){
        message ="Cold";
}
    else if(temperature<=30){
        message = "Normal";
    }else {
        message ="Hot"
    }
    return message;
}
console.log(checkTemperature(22));
console.log(checkTemperature(30));
console.log(checkTemperature(2));
console.log(checkTemperature(-2));