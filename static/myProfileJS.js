var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
var yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 

today = yyyy+'-'+mm+'-'+dd;
const FullName = document.getElementById("Full-Name");
const Email = document.getElementById("Email");
const PhoneNumber = document.getElementById("Phone-Number");
const Destnation = document.getElementById("Destnation");
const From = document.getElementById("From");
const To = document.getElementById("To");
const todayDate = Date.parse(today);

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
    var isValidDateTo = Date.parse(To.textContent);
    var isValidDateFrom = Date.parse(From.textContent);

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
    else if(isNaN(isValidDateFrom) || isValidDateFrom < todayDate){
        alert("From must be a date dd/mm/yy after today date"+" "+ today);
    }
    else if(isNaN(isValidDateTo) || isValidDateTo<isValidDateFrom){
        alert("To must be a date dd/mm/yy after From date"+" "+ From.textContent);
    }
    else{
        FullName.contentEditable = false;
        Email.contentEditable = false;
        PhoneNumber.contentEditable = false;
        Destnation.contentEditable = false;
        From.contentEditable = false;
        To.contentEditable = false;
        FullName.style.backgroundColor = "#cdf2f3b3";
        Email.style.backgroundColor = "#cdf2f3b3";
        PhoneNumber.style.backgroundColor = "#cdf2f3b3";
        Destnation.style.backgroundColor = "#cdf2f3b3";
        From.style.backgroundColor = "#cdf2f3b3";
        To.style.backgroundColor = "#cdf2f3b3";
    }
} 