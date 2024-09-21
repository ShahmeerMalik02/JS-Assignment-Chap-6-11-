//                                      Question # 1

// var a = +prompt("Enter any number");
// document.write("The value of a is : " + a +"<br>" +"<br>");
// ++a;
// document.write("The value of ++a is " + a +"<br>");
// document.write("Now the value of a is " + a +"<br>" +"<br>");
// a++ ;
// document.write("The value of a++ is " + a +"<br>");
// document.write("Now the value of a is " + a +"<br>" +"<br>");
// --a ;
// document.write("The value of --a is " + a +"<br>");
// document.write("Now the value of a is " + a +"<br>" +"<br>");
// a-- ;
// document.write("The value of a-- is " + a +"<br>");
// document.write("Now the value of a is " + a +"<br>" +"<br>");

//                                      Question # 2

// var a = 2;
// var b = 1;
// document.write("a is : " + a +"<br>");
// document.write("b is : " + b +"<br>");
// --a;
// document.write(a +"<br>"); 
// --a - --b ;
// document.write(a +"<br>"); 
// --a - --b + ++b;
// document.write(a +"<br>"); 
// --a - --b + ++b + b--; 
// document.write(a +"<br>");
// var result= --a - --b + ++b + b--;
// document.write("Result : "+ result +"<br>" +"<br>");

//                                        Question # 3

// var name = prompt("Enter your name");
// document.write("Hello " + name  +"<br>");

//                                         Question # 4

// var userNo = +prompt("Enter any number");
// var num2 = 1 ;
// var table = userNo * num2 ;
// document.write(userNo+ " X " + num2 + "=" + table +"<br>");

// var num2 = 2 ;
// var table = userNo * num2 ;
// document.write(userNo+ " X " + num2 + "=" + table +"<br>");

// var num2 = 3 ;
// var table = userNo * num2 ;
// document.write(userNo+ " X " + num2 + "=" + table +"<br>");

// var num2 = 4 ;
// var table = userNo * num2 ;
// document.write(userNo+ " X " + num2 + "=" + table +"<br>");

// var num2 = 5 ;
// var table = userNo * num2 ;
// document.write(userNo+ " X " + num2 + "=" + table +"<br>");

// var num2 = 6 ;
// var table = userNo * num2 ;
// document.write(userNo+ " X " + num2 + "=" + table +"<br>");

// var num2 = 7 ;
// var table = userNo * num2 ;
// document.write(userNo+ " X " + num2 + "=" + table +"<br>");

// var num2 = 8 ;
// var table = userNo * num2 ;
// document.write(userNo+ " X " + num2 + "=" + table +"<br>");

// var num2 = 9 ;
// var table = userNo * num2 ;
// document.write(userNo+ " X " + num2 + "=" + table +"<br>");

// var num2 = 10 ;
// var table = userNo * num2 ;
// document.write(userNo+ " X " + num2 + "=" + table +"<br>");

//                                                Question # 5

// var subjectOne = prompt("Enter Subject One");
// var subjectOneMarks = +prompt("Enter the Marks Obtained in " + subjectOne);

// var subjectTwo = prompt("Enter Subject Two");
// var subjectTwoMarks = +prompt("Enter the Marks Obtained in " + subjectTwo);

// var subjectThree = prompt("Enter Subject Three");
// var subjectThreeMarks = +prompt("Enter the Marks Obtained in " + subjectThree);

// var eachSubjectTotal = 100;

// var SubjectOnePer = (subjectOneMarks / eachSubjectTotal) * 100;
// var SubjectTwoPer = (subjectTwoMarks / eachSubjectTotal) * 100;
// var SubjectThreePer = (subjectThreeMarks / eachSubjectTotal) * 100;

// var totalMarks = 300;
// var totalObtainedMarks = subjectOneMarks + subjectTwoMarks + subjectThreeMarks;

// var finalPercentage = (totalObtainedMarks / totalMarks) * 100;

// document.write(`

//     <table>
//         <tr>
//             <th>Subject</th>
//              <th>Total</th>
//              <th>Obtained</th>
//              <th>Percentage</th>
//         </tr>
//         <tr>
//             <td> ${subjectOne} </td>
//             <td> ${eachSubjectTotal} </td>
//             <td> ${subjectOneMarks} </td>
//             <td> ${SubjectOnePer}% </td>
//          </tr>
//           <tr>
//             <td> ${subjectTwo} </td>
//             <td> ${eachSubjectTotal} </td>
//             <td> ${subjectTwoMarks} </td>
//             <td> ${SubjectTwoPer}% </td>
//          </tr>
//           <tr>
//             <td> ${subjectThree} </td>
//             <td> ${eachSubjectTotal} </td>
//             <td> ${subjectThreeMarks} </td>
//             <td> ${SubjectThreePer}% </td>
//          </tr>

//           <tr>
//             <th> Total </th>
//             <th> ${totalMarks} </th>
//             <th> ${totalObtainedMarks} </th>
//             <th> ${finalPercentage}% </th>
//          </tr>
//     </table>

//     `);