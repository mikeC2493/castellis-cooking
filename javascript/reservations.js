
function clearFields(){
    var formFields = ["firstName", "lastName", "email"];
    for(var i=0; i<formFields.length; i++){
        document.getElementById(formFields[i]).value = "";
    }
}