let h = Number(prompt("In put your height in cm"));
let w = Number(prompt("In put your weight in Kg"));
let BMI = w/(h*h)*100*100;
if(BMI<16){
    console.log("Severely underweight ");
}
else if(BMI<18.5){
    console.log("Underweight ");
}
else if(BMI<25){
    console.log("Normal ");
}
else if(BMI<30){
    console.log("Overweight ");
}
else{
    console.log("Obese ");
}