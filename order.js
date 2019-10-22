document.getElementById("submitForm").addEventListener("click", submit);

function submit() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;

    console.log(name);
    let cEmail = checkEmail(email);
    let cPhone = checkPhone(phone);
    let cQty = checkQuantity(quantity);
    let cName = checkName(name);
    let cAdd = checkAddress(address);
    let cPro = checkProduct(product);
    let cTerm = checkAgree();

    if (cName && cEmail && cPhone && cQty && cAdd && cPro && cTerm) {
        // window.open("index.html");
        alert("Order Success");
    }
    else {
        // window.open("newproducts.html");
        var evaluate = `name : ${document.getElementById("name").value}\nemail : ${document.getElementById("email").value}\nquantity: ${document.getElementById("quantity").value}\n`;
        alert(evaluate)
    }
}

function checkProduct(product) {
    if (product != "") {
        return true;
    }
    else {
        document.getElementById("product").style.borderBottomColor = "red";
        document.getElementById("product").style.color = "red";
        return false;
    }
}

function checkAddress(address) {
    if (address != "") {
        return true;
    }
    else {
        document.getElementById("address").style.borderBottomColor = "red";
        document.getElementById("address").style.color = "red";
        return false;
    }
}

function checkDigit(testVar) {
    let regex = /^\d+$/;
    return regex.test(testVar);
}

function checkPhone(phone) {
    if (checkDigit(phone)) {
        return true;
    }
    else {
        document.getElementById("phone").style.borderBottomColor = "red";
        document.getElementById("phone").style.color = "red";
        return false;
    }
}

function checkEmail(email) {
    if (/\w+@\w+\.\w+/.test(email) && !/\s+/.test(email)) {
        return true;
    }
    document.getElementById("email").style.borderBottomColor = "red";
    document.getElementById("email").style.color = "red";
    return false;
}

function checkQuantity(quantity) {
    if (checkDigit(quantity) && +quantity > 0) {
        return true;
    }
    else {
        document.getElementById("quantity").style.borderBottomColor = "red";
        document.getElementById("quantity").style.color = "red";
        return false;
    }
}

function checkName(name) {
    if (name != "") {
        console.log("true");
        return true;
    }
    else {
        document.getElementById("name").style.borderBottomColor = "red";
        document.getElementById("name").style.color = "red";
        return false;
    }
}

function checkAgree(){
    var check = document.getElementById("inputAgree").checked;
    if (!check){
        document.getElementById("agreeText").style.color = "red";
        return false;
    }
    return true;
}
