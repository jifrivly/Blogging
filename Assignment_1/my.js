
function validate() {
    var firstname = document.getElementById('firstname')
    // var firstname = document.forms["reg_form"]["firstname"];
    var lastname = document.getElementById("lastname");
    var dob = document.getElementById("dob");
    var state = document.getElementById("state");
    var district = document.getElementById("district");
    var place = document.getElementById("place");
    var pincode = document.getElementById("pincode");
    var address = document.getElementById("address");
    var qualification = document.getElementById("qualification");
    var guardian = document.getElementById("guardian");
    var gender = document.getElementsByName("gender");
    var blood_group = document.getElementById("blood_group");
    var mobile = document.getElementById("mobile");
    var email = document.getElementById("email")
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");


    var confirm = true
    if (!confirmPasswordInputCheck.call(confirm_password)) { confirm = false }
    if (!passwordInputCheck.call(password)) { confirm = false }
    if (!emailInputCheck.call(email)) { confirm = false }
    if (!phoneInputCheck.call(mobile)) { confirm = false }
    if (!inputCheck.call(blood_group)) { confirm = false }
    if (!radioInputCheck.call(gender)) { confirm = false }
    if (!inputCheck.call(guardian)) { confirm = false }
    if (!inputCheck.call(qualification)) { confirm = false }
    if (!inputCheck.call(address)) { confirm = false }
    if (!pincodeInputCheck.call(pincode)) { confirm = false }
    if (!inputCheck.call(place)) { confirm = false }
    if (!inputCheck.call(district)) { confirm = false }
    if (!inputCheck.call(state)) { confirm = false }
    if (!inputCheck.call(dob)) { confirm = false }
    if (!inputCheck.call(firstname)) { confirm = false }

    // console.log(password.value)
    // console.log(confirm_password.value)
    if (confirm) {
        console.log("Successfully checked")
        let alert = '<div class="alert alert-success text-center" role="alert"> Registered Successfully </div>'
        document.getElementById("confirmdiv").innerHTML = alert
    } else {
        console.log("false input, try again..")
    }

}


// function to check normal inputs
function inputCheck() {
    if (this.value == "" | this.value == " ") {
        requiredOutput.call(this);
        return false;
    } else {
        successOutput.call(this)
        return true;
    }
}


// function to check radio button input 
function radioInputCheck() {
    // console.log("checking radio input..")
    var option = ""
    for (let i = 0; i < this.length; i++) {
        // console.log("checking radio input.." + i)
        // console.log(this[i])
        if (this[i].checked) {
            option = this[i].value;
            successOutput.call(this[this.length - 1].parentNode.parentNode)
            return option
        }
    }
    if (option == "") {
        requiredOutput.call(this[this.length - 1].parentNode.parentNode)
        return false
    }
}


// function to check pincode input
function pincodeInputCheck() {
    var pincode = this.value.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
    if (pincode == "" && pincode == " ") {
        requiredOutput.call(this)
        return false
    } else if (pincode.length != 6) {
        requiredOutput.call(this, " * Not a valid pincode.. ")
        return false
    } else {
        successOutput.call(this)
        return true
    }
}


// function to check mobile number input
function phoneInputCheck() {
    var number = this.value.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
    if (number == "" | number == " ") {
        requiredOutput.call(this);
        return false;
    } else if (number.length < 10) {
        requiredOutput.call(this, " * 10 digits required.. ")
        return false
    } else if (number.length > 10) {
        requiredOutput.call(this, " * maximum 10 digits allowed.. ")
        return false
    } else if (["9", "8", "7", "6"].indexOf(number.charAt(0)) == -1) {
        // console.log("1st digit checking started")
        requiredOutput.call(this, " * Not a valid number.. ")
        return false
    } else {
        successOutput.call(this)
        return true
    }
    // console.log(number.charAt(0) + ["9", "8", "7", "6"].indexOf(this.value.charAt(0)))

}


function emailInputCheck() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (this.value == "" | this.value == " ") {
        requiredOutput.call(this)
        return false
    } else if (!this.value.match(mailformat)) {
        requiredOutput.call(this, " * Not a valid email.. ")
        return false
    } else {
        successOutput.call(this)
        return true
    }
}


function passwordInputCheck() {
    let password = true
    var lowercase_letter = /[a-z]/g
    var uppercase_letter = /[A-Z]/g
    var numbers = /[0-9]/g
    if (this.value == "" | this.value == " ") {
        requiredOutput.call(this)
        password = false
        return password
    }

    if (this.value.length < 8) {
        requiredOutput.call(this, " * Password must contains ")
        this.nextElementSibling.innerHTML += 'atleast 8 characters '
        password = false
        // } else { 

    }
    if (!this.value.match(lowercase_letter)) {
        if (password) {
            requiredOutput.call(this, " * Password must contains ")
        }
        this.nextElementSibling.innerHTML += 'lowercase letters '
        password = false
        // } else {

    }
    if (!this.value.match(uppercase_letter)) {
        if (password) {
            requiredOutput.call(this, " * Password must contains ")
        }
        this.nextElementSibling.innerHTML += 'uppercase letters '
        password = false
        // } else {

    }
    if (!this.value.match(numbers)) {
        if (password) {
            requiredOutput.call(this, " * Password must contains ")
        }
        this.nextElementSibling.innerHTML += 'number'
        password = false
        // } else { 

    }

    if (password) {
        successOutput.call(this)
        return password
    }
    return password

}

function confirmPasswordInputCheck() {
    if (this.value == "" | this.value == " ") {
        requiredOutput.call(this)
        return false
    } else {
        if (document.getElementById("password").value === document.getElementById("confirm_password").value) {
            successOutput.call(this)
            return true
        } else {
            requiredOutput.call(this, " * Not match")
            return false
        }
    }

}




function requiredOutput(msg = " * This field is required") {
    // console.log(this)
    // console.log(this.nextElementSibling)
    if (this.nextElementSibling.classList != "") {
        // console.log("hiii classes removed and text-danger added")
        this.nextElementSibling.classList = ""
    }
    this.nextElementSibling.classList.add("text-danger")
    this.nextElementSibling.innerHTML = msg
    this.focus()
}

function successOutput() {
    // console.log(this)
    // console.log(this.nextElementSibling)
    if (this.nextElementSibling.classList != "") {
        // console.log("hiii classes removed and text-success added")
        this.nextElementSibling.classList = ""
    }
    this.nextElementSibling.classList.add("text-success")
    this.nextElementSibling.innerHTML = '<i class="fa fa-check fa-lg"></i> Input success.';
}