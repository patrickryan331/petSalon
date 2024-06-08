
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


function displayTotalServices(){
    document.getElementById("total").innerHTML=petSalon.services.length;
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
            displayTotalServices();
            getServices()
        }
    }




    function deleteService(index){
        petSalon.services.splice(index,1);
        displayNewServiceRow();
        displayTotalServices();
        getServices()
    }
    



        function init(){
            let newService1 = new Service("Nail Trim",20); //declaring obj
            let newService2 = new Service("Dental Clean",75); //declaring obj
            petSalon.services.push(newService1);
            petSalon.services.push(newService2);
            displayNewServiceRow();
            displayTotalServices();
            getServices()
        }


        function displayNewServiceRow(){
            let table="";
            const serviceTable=document.getElementById("newServiceTable");
            for(let i=0;i<petSalon.services.length;i++){
                let service = petSalon.services[i]        
                table+=`
                    <tr>
                        <th>${service.description}</th>
                        <th>$${service.price}</th>
                        <th><button class="btn btn-danger" onclick="deleteService(${i})">Delete</button></th>
                        </tr>
                    `;
            }
            serviceTable.innerHTML=table;
        }
        


        window.onload=init;  //waiting to render html