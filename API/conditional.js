/** if - else statement */
// Syntax
/* if(condition){
        //code
    } else{
        //code
        }
*/

const age = 20;
const gender = "Male"

if(age>=18){
    console.log("I am inside if statement");
} else{
    console.log("I am else statement");
}

/** if - else if -else ladder statement */
if(age>=0 && age<=5){  
    console.log("toddler");
}
else if(age>=6 && age<12){
    console.log("children");
}
else if(age>13 && age<19){
    console.log("teenager");
}
else if(age>=20 && age<35){
    console.log("adult");
}
else if(age>=36 && age<55){
    console.log("middle age");
}
else if(age>=56){
    console.log("elderly");
}
else{
    console.log("Invalid Age");
}


/** Nested if - else statement */
if(age>=18){
    if(gender == 'Male'){
    console.log("Adult Male");
    }else{
    console.log("Adult Female");
    }
}else{
    if(gender == 'Male'){
    console.log("Children Male");
    }else{
        console.log("Children Female");
    };
}


/** switch statement */
const day = "Sunday";
switch(day){
    case "Sunday":
        console.log("Sunday")
        break;
    case "Monday":
        console.log("Monday")
        break;
    case "Tuesday":
        console.log("Tuesday")
        break;
    case "Wednesday":
        console.log("Wednesday")
        break;
    case "Thursday":
        console.log("Thursday")
        break;
    case "Friday":
        console.log("Friday")
        break;
    case "Saturday":
        console.log("Saturday")
        break;
    default:
        console.log("Invalid Day")
        break;
}

/** Ternary operator */
if(age>=18){
    console.log("Adult");
} else{
    console.log("Children");
}

age >= 18 ? console.log("Adult") : console.log("Children");

