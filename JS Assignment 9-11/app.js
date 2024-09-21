//                                                  Question # 1

// var userCity = prompt("Enter your city");
// if(userCity ==="karachi"){
//     alert("Welcome to the city of light");
// }

//                                                  Question # 2

// var userGender = prompt("Enter your Gender");
// if(userGender==="male"){
//     alert("Good Morning Sir");
// }

// else if(userGender==="female") {
//     alert("Good Morning Ma'am");
// }

//                                                   Question # 3

// var colorOfTrafficSignal = prompt("Enter your traffic signal color");
// if(colorOfTrafficSignal==="red"){
//     alert("Must Stop");
// }
// else if(colorOfTrafficSignal==="yellow"){
//     alert("Ready to move");
// }
// else if(colorOfTrafficSignal==="green"){
//     alert("Move Now");
// }

//                                                    Question # 4

// var remainingFuel = +prompt("Enter remaining fuel in car (In Liter) ");
// if(remainingFuel < 0.25){
//     alert("Please refill the fule in the car");
// }

//                                                    Question # 5

//                                                      (a)
// var a = 4;
// if(++a === 5){
//     alert("Given condition for variable a is true");
// }

// //                                                       (b)

// var b = 82;
// if(b++ === 83){
//     alert("Given condition for variable b is true");
// }

//                                                       (c)

// var c = 12;
// if(c++ === 13){
//     alert("condition 1 is true");
// }

// var c = 12;
// if(c === 13){
//     alert("condition 2 is true");
// }

// var c = 12;
// if(++c < 14){
//     alert("condition 3 is true");
// }

// var c = 12;
// if(c === 14){
//     alert("condition 4 is true");
// }

//                                                           (d)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = (materialCost + laborCost);
// if(totalCost === materialCost + laborCost){
//     alert("The cost equals")
// }

//                                                            (e)

// if(true){
//     alert("True");
// }

// if(false){
//     alert("False");
// }

//                                                            (f)

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

//                                                            Question # 6

var subjectOne = prompt("Enter Subject One");
var subjectOneMarks = +prompt("Enter the Marks Obtained in " + subjectOne);

var subjectTwo = prompt("Enter Subject Two");
var subjectTwoMarks = +prompt("Enter the Marks Obtained in " + subjectTwo);

var subjectThree = prompt("Enter Subject Three");
var subjectThreeMarks = +prompt("Enter the Marks Obtained in " + subjectThree);

var eachSubjectTotal = 100;

var SubjectOnePer = (subjectOneMarks / eachSubjectTotal) * 100;
var SubjectTwoPer = (subjectTwoMarks / eachSubjectTotal) * 100;
var SubjectThreePer = (subjectThreeMarks / eachSubjectTotal) * 100;



document.write(`

    <table>

        <tr>
            <th>Percentage</th>
             <th>Grade</th>
             <th>Remarks</th>
        </tr>

        <tr>
            <td> ${"Greater than or equal to 80"} </td>
            <td> ${"A-One"} </td>
            <td> ${"Excellent"} </td>
           
         </tr>

          <tr>
           <td> ${"Greater than or equal to 70"} </td>
            <td> ${"A"} </td>
            <td> ${"Good"} </td>
         </tr>

          <tr>
            <td> ${"Greater than or equal to 60"} </td>
            <td> ${"B"} </td>
            <td> ${"You need to improve"} </td>
         </tr>

        <tr>
            <td> ${"Greater than or equal to 50"} </td>
            <td> ${"Fail"} </td>
            <td> ${"Sorry"} </td>
         </tr>

    </table>

    `);

var totalMarks = 300;
document.write("Total Marks " + totalMarks +"<br>" +"<br>")
var totalObtainedMarks = subjectOneMarks + subjectTwoMarks + subjectThreeMarks;
document.write("Marks Obtained " + totalObtainedMarks +"<br>" +"<br>")
var percentage = (totalObtainedMarks / totalMarks) * 100;
document.write("Percentage " + percentage +"<br>" +"<br>")

var grade = '';
var remarks = '';

if (percentage >= 80) {
    grade = 'A-one';
    remarks = 'Excellent';
} else if (percentage >= 70) {
    grade = 'A';
    remarks = 'Good';
} else if (percentage >= 60) {
    grade = 'B';
    remarks = 'You need to improve';
} else {
    grade = 'Fail';
    remarks = 'Sorry';
}

document.write("Grade " + grade +"<br>" +"<br>");
document.write("Remarks " + remarks +"<br>" +"<br>");
















