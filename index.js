
let firstName = "Zentaro" //string
let age;
age = 20; //num
let student = true; //bool
let usrname;
console.log(usrname);

age = age + 1;

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enroled", student);

//document.getElementById("p2").innerHTML = "you are " + age, "years old";
//document.getElementById("p3").innerHTML = "Enrolled: " + student;

document.getElementById("myButton").onclick = function(){

    usrname = document.getElementById("myText").value;
    console.log(usrname);
    document.getElementById("p1").innerHTML = usrname;

}

