let petSalon ={               //object litteral
    name:"Suds and Scrubs",     //var
    phone: "203 555 1234",      //var
    hours:{
        open:"9:00 am",       //var
        close:"5:00 pm"       //var
    },
    pets:[]                   //array
}

//constructor
function Pet(name,age,gender,service,type,breed,payment){
    //properties = parameter;
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.type=type; 
    this.breed=breed;
    this.payment=payment;
}


function isValid(aPet){
    let validation =true;

    if(aPet.name==""){
        validation=false;
        document.getElementById("txtName").classList.add("alert-error");
    }
    if(aPet.service==""){
        validation=false;
    document.getElementById("txtService").classList.add("alert-error");
    }
    if(aPet.type==""){
        validation=false;
    document.getElementById("txtType").classList.add("alert-error");
    }
    if(aPet.gender==""){
        validation=false;
    document.getElementById("txtGender").classList.add("alert-error");
    }
    if(aPet.breed==""){
        validation=false;
    document.getElementById("txtBreed").classList.add("alert-error");
    }
    if(aPet.age==""){
        validation=false;
    document.getElementById("txtAge").classList.add("alert-error");
    }
    if(aPet.payment==""){
        validation=false;
    document.getElementById("txtPayment").classList.add("alert-error");
    }
    return validation;
}



function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputType = document.getElementById("txtType").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputPayment = document.getElementById("txtPayment").value;

    let newPet = new Pet(inputName,inputAge,inputGender,inputService,inputBreed,inputType,inputPayment);
    if(isValid(newPet)){
        petSalon.pets.push(newPet);
        displayRow();
        displayTotalPets();
        displayServiceCount();
    }
}


function deletePet(index){
    petSalon.pets.splice(index,1);
    displayRow();
    displayTotalPets();
    displayServiceCount();
}


function getServices(){
    //read the local storage to get the services
    let serviceList = readItems();
    // let option = "";
    let option ="";
        //travel the array of services
    for(let i=0;i<serviceList.length;i++){
        //create the <option> on the HTML
        option=`<option value="${serviceList[i].description}"> ${serviceList[i].description} </option>`;
        //insert the <option> into the HTML select
            $("#txtService").append(option);
    }
}


function init(){
    let pet1 = new Pet("Scooby",7,"Male","Grooming","Dog","Great Dane"); //declaring obj
    let pet2 = new Pet("Scrappy",4,"Male","Grooming","Dog","Pug"); //declaring obj
    petSalon.pets.push(pet1);
    petSalon.pets.push(pet2);
    displayRow();
    // displayTotalPets();
    displayServiceCount();
    getServices();
}

window.onload=init; //waiting to render html
