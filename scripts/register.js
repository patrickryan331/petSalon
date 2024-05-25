let petSalon ={               //obj
    name:"The Pet Store",     //var
    phone: "1231231234",      //var
    hours:{
        open:"9:00 am",       //var
        close:"9:00 pm"       //var
    },
    pets:[]                   //array
}

//constructor
function Pet(name,age,gender,service,type,breed){
    //properties = parameter;
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.type=type; 
    this.breed=breed;
}




function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService= document.getElementById("txtService").value;
    let inputType= document.getElementById("txtType").value;
    let inputBreed= document.getElementById("txtBreed").value;

    let newPet = new Pet(inputName,inputAge,inputGender,inputService,inputBreed,inputType);
    petSalon.pets.push(newPet);
    console.log(petSalon.pets);
}


function init(){
    let pet1 = new Pet("scooby",7,"Male","grooming","dog","Great Dane"); //declaring obj
    let pet2 = new Pet("scrappy",4,"Male","Grooming","dog","pug"); //declaring obj
    petSalon.pets.push(pet1);
    petSalon.pets.push(pet2);
    console.log(petSalon.pets);
}

window.onload=init; //waiting to render html

