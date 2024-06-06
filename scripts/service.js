
let petSalon ={               //obj
    name:"Suds and Scrubs",     //var
    phone: "203 555 1234",      //var
    hours:{
        open:"9:00 am",       //var
        close:"5:00 pm"       //var
    },
    services:[]                   //array
}



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
    if(service.price==""){
        validation=false;
        $("#txtPrice").addClass("alert-error");
    }

    return validation;
}


function displayNewServiceRow(){
    let table="";
    const serviceTable=document.getElementById("newServiceTable");
    for(let i=0;i<petSalon.service.length;i++){
        let pet = petSalon.service[i]        
        table+=`
            <tr>
                <th>${pet.description}</th>
                <th>${pet.price}</th>
                <th><button class="btn btn-danger" onclick="deleteService(${i})">Delete</button></th>
                </tr>
            `;
    }
    serviceTable.innerHTML=table;
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
        if (isValid(newService)){
            saveItem(newService);
            $("input").val("") //this fn is under storeManger


            petSalon.services.push(newService);
            displayNewServiceRow();
        }
    }


    function deleteService(index){
        petSalon.services.splice(index,1);
        displayNewServiceRow();
    }
    



        function init(){
            let newService1 = new Service("Nail Trim",20); //declaring obj
            let newService2 = new Service("Dental Clean",100); //declaring obj
            petSalon.services.push(newService1);
            petSalon.services.push(newService2);
            displayNewServiceRow();
        }






        window.onload=init;  //waiting to render html