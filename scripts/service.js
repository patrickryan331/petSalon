// Use JQuery

function Service(description,price){
    this.description=description;
    this.price=price;
}


function isValid(service){
    let validation =true;

    if(service.description==""){
        validation=false;
        $("#txtDescription").addClass("alert-error");
}

    return validation;
}


function register(){
    console.log("Adding a new service");

        //getting the values
        let inputDescription = $("#txtDescription").val();
        let inputPrice = $("#txtPrice").val();
        //create the object
        let newService = new Service(inputDescription,inputPrice);
        //display it on the console
        if(isValid(newService)){
        console.log(newService);
        $("input").val("");
        }
}