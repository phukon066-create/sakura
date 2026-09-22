function checkTemperature(temperature){
    let messege="";
    if(temperature<20){
        messege="cold";
    }else if(temperature<=30){
        messege="Normal";
    }else if(temperature>30){
        messege="Hot";
    }
    return messege;

}
console.log(checkTemperature(-2));
console.log(checkTemperature(40));