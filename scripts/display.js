// function displayCards(){
//     //declare variables
//     let card="";
//     const petDiv=document.getElementById("petDiv");
//     //travel the array of pets
//     for(let i=0;i<petSalon.pets.length;i++){
//         let pet = petSalon.pets[i]        
//         //create html template
//         card+=`
//             <div class="petCard">
//                 <h4>${pet.name}</h4>
//                 <p>${pet.type}<p>
//                 <p>Age: ${pet.age}</p>
//                 <p>${pet.gender}</p>
//                 <p>${ pet.service}</p>
//                 </div>
//             `; 
//     }
//     petDiv.innerHTML=card; 
//     //insert the tmp into HTML
// }


function displayRow(){
    let table="";
    const petTable=document.getElementById("petTable");
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i]        
        table+=`
            <tr>
                <th>${pet.name}</th>
                <th>${pet.type}</th>
                <th>${pet.age}</th>
                <th>${pet.gender}</th>
                <th>${pet.service}</th>
                <th>${pet.breed}</th>
                <th><button class="btn btn-danger" onclick="deletePet(${i})">Delete</button></th>
                </tr>
            `;
    }
    petTable.innerHTML=table; 
}





function displayTotalPets(){
    document.getElementById("total").innerHTML=petSalon.pets.length;
}

function displayServiceCount(){
    let grooming=0;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.service=="Grooming"){
            grooming++;
        }
    }
    let vaccines=0;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.service=="Vaccines"){
            vaccines++;
        }
    }
    // let bathing=0;
    // for(let i=0;i<petSalon.pets.length;i++){
    //     let pet = petSalon.pets[i];
    //     if(pet.service=="Bathing"){
    //         bathing++;
    //     }
    // }
    // let dog=0;
    // for(let i=0;i<petSalon.pets.length;i++){
    //     let pet = petSalon.pets[i];
    //     if(pet.type=="Dog"){
    //         dog++;
    //     }
    // }
    // let cat=0;
    // for(let i=0;i<petSalon.pets.length;i++){
    //     let pet = petSalon.pets[i];
    //     if(pet.type=="Cat"){
    //         cat++;
    //     }
    // }





    document.getElementById("totalGroomings").innerHTML=grooming;

    document.getElementById("totalVaccines").innerHTML=vaccines;
}