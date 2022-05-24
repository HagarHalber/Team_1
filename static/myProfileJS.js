const FullName = document.getElementById("Full-Name");
const Email = document.getElementById("Email");
const PhoneNumber = document.getElementById("Phone-Number");
const Destnation = document.getElementById("Destnation");
const From = document.getElementById("From");
const To = document.getElementById("To");

function edit() {
    FullName.contentEditable = true;
    Email.contentEditable = true;
    PhoneNumber.contentEditable = true;
    Destnation.contentEditable = true;
    From.contentEditable = true;
    To.contentEditable = true;
    FullName.style.backgroundColor = "#dddbdb";
    Email.style.backgroundColor = "#dddbdb";
    PhoneNumber.style.backgroundColor = "#dddbdb";
    Destnation.style.backgroundColor = "#dddbdb";
    From.style.backgroundColor = "#dddbdb";
    To.style.backgroundColor = "#dddbdb";
}


function save () {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(FullName.textContent == ''){
        alert("Full name is required");
    }
    else if (!Email.textContent.match(pattern)) {
        alert("Enter a valid Email");
    }
    else if(!PhoneNumber.textContent.match(re)){
        alert("Phone Number must be digits only");
    }
    else if(Destnation.textContent == ''){
        alert("Destnation is required");
    }
    else if(From.textContent == ''){
        alert("From is required");
    }
    else{
        FullName.contentEditable = false;
        Email.contentEditable = false;
        PhoneNumber.contentEditable = false;
        Destnation.contentEditable = false;
        From.contentEditable = false;
        To.contentEditable = false;
        FullName.style.backgroundColor = "#f5f5f5";
        Email.style.backgroundColor = "#f5f5f5";
        PhoneNumber.style.backgroundColor = "#f5f5f5";
        Destnation.style.backgroundColor = "#f5f5f5";
        From.style.backgroundColor = "#f5f5f5";
        To.style.backgroundColor = "#f5f5f5";
    }
    
  
} 