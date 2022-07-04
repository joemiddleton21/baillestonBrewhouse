/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function print(output) {
    document.getElementById("output").innerHTML = 
            document.getElementById("output").innerHTML + output;
}
function println(output) {
    if (output === undefined) {
        output = '';
    }
    document.getElementById("output").innerHTML = 
            document.getElementById("output").innerHTML + "<br />" + output;
    
function createUser () {
    
    var fn = document.getElementById("newFirstName").value;
    var ln = document.getElementById("newLastName").value;
    var mob = document.getElementById("newMobileNo").value;
    var email = document.getElementById("newEmail").value;
    var help = document.getElementById("newHelp").value;
    var newPassword = document.getElementById("newPassword").value;
    var verifyPassword = document.getElementById("confirmPassword").value;
    
    var row = getTableRow(fn,ln,mob,email);
    document.getElementById("newTable").appendChild(row);

    return false;
}
//        I have added in functions to create and update user info although im not sure if it is the methods i should be using so i have just left them matching for now

function updateUser () {
    
    var fn = document.getElementById("upFirstName").value;
    var ln = document.getElementById("upLastName").value;
    var mob = document.getElementById("upMobileNo").value;
    var email = document.getElementById("upEmail").value;
    var help = document.getElementById("upHelp").value;
    
    var row = getTableRow(fn,ln,mob,email);
    document.getElementById("newTable").appendChild(row);

    return false;
}

function verifyPassword(){
var password1 = document.getElementById("newPassword").value;
var password2 = document.getElementById("confirmPassword").value;

  if(password1 !== password2)
  {   
    alert("Passwords entered do not match, please try again");  
  } else {  
    alert("Log in successful");  
    return false;
  }
 //       I couldnt get my verify method to register as used for some reason, im hoping you may be able to point me in the right direction after this has been submitted?
}


