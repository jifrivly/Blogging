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
    // var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");


    console.log(gender)

    if (inputCheck.call(firstname) &&
        inputCheck.call(dob) &&
        inputCheck.call(state) &&
        inputCheck.call(district) &&
        inputCheck.call(place) &&
        inputCheck.call(pincode) &&
        inputCheck.call(address) &&
        inputCheck.call(qualification) &&
        inputCheck.call(guardian) &&
        radioInputCheck.call(gender) &&
        inputCheck.call(blood_group) &&
        phoneInputCheck.call(mobile) &&
        inputCheck.call(email) &&
        inputCheck.call(password) &&
        inputCheck.call(confirm_password)) {
        console.log("Successfully checked")
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
        console.log(this[i])
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

// function to check mobile number input
function phoneInputCheck() {
    if (this.value == "" | this.value == " ") {
        requiredOutput.call(this);
        return false;
    } else if (this.value.length < 10) {
        requiredOutput.call(this, " * 10 digits required.. ")
    } else if (this.value.length > 10) {
        requiredOutput.call(this, " * maximum 10 digits allowed.. ")
    } else if (["9", "8", "7", "6"].indexOf(this.value.charAt(0)) == -1) {
        console.log("1st digit checking started")
        requiredOutput.call(this, " * Not a valid number.. ")
    } else {
        successOutput.call(this)
    }
    console.log(this.value.charAt(0) + ["9", "8", "7", "6"].indexOf(this.value.charAt(0)))

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