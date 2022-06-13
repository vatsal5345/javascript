function validateForm() {
    event.preventDefault();
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let address = document.getElementById("staddress");
    let address2 = document.getElementById("staddress2");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let zipcode = document.getElementById("zipcode");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");


    let fname_pattern = "[a-zA-Z]{2,30}$";
    if(!fname.value.match(fname_pattern)){
        let text;
        text = 'Name must only contain alphabets and its length should be between 2 and 30'
        document.getElementById("OP1").innerHTML = text; 

    }

    let lname_pattern = "[a-zA-Z]{2,30}$";
    if (!lname.value.match(fname_pattern)) {
        let text;
        // text = 'Please do not let the name be empty or the name should not contain any other charcters than alphabets'
        text = 'Name must only contain alphabets and its length should be between 2 and 30'
        document.getElementById("OP2").innerHTML = text;    
    }

    let add_pattern = "[a-zA-Z0-9]{3,600}$"

    if (!address.value.match(add_pattern)){
        let text;
        text = 'Invalid Address'
        document.getElementById("OP3").innerHTML = text;
    }

    if (!address2.value.match(add_pattern)){
        let text;
        text = 'Invalid Address'
        document.getElementById("OPa").innerHTML = text;
    }

    let city_pattern = "[a-zA-Z]$"

    if (!city.value.match(city_pattern)){
        let text;
        text = 'City name must only have alphabets and its length should be between 2 and 31'
        document.getElementById("OP4").innerHTML = text;
    }

    if (!state.value.match(city_pattern)){
        let text;
        text = 'State name must only have alphabets and its length should be between 2 and 31'
        document.getElementById("OP5").innerHTML = text;
    }

    let zip_pattern = "^[1-9]{1}[0-9]{5}$"

    if (!zipcode.value.match(zip_pattern)){
        let text;
        text = 'Zip code must contatin numbes only and it should be of length 6'
        document.getElementById("OP6").innerHTML = text;
    }

    let phone_pattern = "\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$"

    if (!phone.value.match(phone_pattern)){
        let text;
        text = 'The phone number must be of the given pattern'
        document.getElementById("OP7").innerHTML = text;
    }

    let email_pattern = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"

    if (!email.value.match(email_pattern)){
        let text;
        text = 'Email is invalid'
        document.getElementById("OP8").innerHTML = text;
    }
    
    let feedback_pattern = ".{3,100}"

    if (!feedback.value.match(feedback_pattern)){
        let text;
        text = 'please give us feedback'
        document.getElementById("OP9").innerHTML = text;
    }

    let suggestion_pattern = ".{3,100}"
    if (!suggestion.value.match(suggestion_pattern)){
        let text;
        text = 'please give us suggestion'
        document.getElementById("OP10").innerHTML = text;
    }

     
        if(document.getElementById('male').checked) { 
          
        } 
        else if(document.getElementById('female').checked) { 
            
        } 
        else if(document.getElementById('other').checked) { 
            //  
        } 
       
        else { 
            document.getElementById("error").innerHTML 
                = "You have not selected any season"; 
        } 
     
}
