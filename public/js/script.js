function validstrength(){
    var pwd = document.getElementById("pwd");
    var passed = document.getElementById("pwd").value.length;
    var pass = document.getElementById("pass");
    var color = "";
    var strength = "";
        switch (passed) {
            case 0:
            case 1:
                strength = "Weak";
                color = "red";
                pass.innerHTML = strength;
                pass.style.color = color;
                pwd.style.border = "2px solid red";
                break;
            case 4:
                strength = "Good";
                color = "darkorange";
                pass.innerHTML = strength;
                pass.style.color = color;
                pwd.style.border = "2px solid darkorange";
                break;
            case 8:
                strength = "Strong";
                color = "green";
                pass.innerHTML = strength;
                pass.style.color = color;
                pwd.style.border = "2px solid green";
                break;
            case 12:
                strength = "Very Strong";
                color = "darkgreen";
                pass.innerHTML = strength;
                pass.style.color = color;
                pwd.style.border = "2px solid darkgreen";
                break;
        }
}

// email & password validation
function validate(){
    var str = document.getElementById("pwd").value;
    var mail = document.getElementById("email").value;
    var regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9]{3,5})+.([a-zA-Z0-9]{3,5})$/
    
    // email format validation
    if (regexp.test(mail)){
        // alert("Valid Email");
    }
    else{
        alert("Invalid Email! (eg:- abcd@gmail.com)");
        return false;
    }

    // password format validation
    if (str.match(/[a-z]/g) && str.match(/[A-Z]/g) && str.match(/[0-9]/g) && str.match(/[^a-zA-Z\d]/g) && str.length >= 8){
        alert("Your account is ready. You can LogIn now !");
        return true;
    }
    else{
        alert("Password must contain minimum 8 characters including atleast one lowercase,one uppercase,one digit and one special character");
        return false;
    }

}


// login password format validation
function loginval(){
    var str1 = document.getElementById("loginpass").value;
    var loginpass = document.getElementById("loginpass");
    
    if (str1.match(/[a-z]/g) && str1.match(/[A-Z]/g) && str1.match(/[0-9]/g) && str1.match(/[^a-zA-Z\d]/g) && str1.length >= 8){
        alert("Logged in successfully!");
        return true;
    }
    else{
        alert("Password must contain minimum 8 characters including atleast one lowercase,one uppercase,one digit and one special character");
        loginpass.style.border = "2px solid red";
        return false;
    }
}