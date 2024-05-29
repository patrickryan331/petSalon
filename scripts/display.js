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
    const petDiv=document.getElementById("petTable");
    console.log("displayRow is running");
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i]        

        table+=`
            <tr class="petTable">
                <th>${pet.name}</th>
                <th>${pet.type}</th>
                <th>${pet.age}</th>
                <th>${pet.gender}</th>
                <th>${pet.service}</th>
                </tr>
            `;
    }
    petDiv.innerHTML=table; 
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

    document.getElementById("totalGroomings").innerHTML=grooming;

    document.getElementById("totalVaccines").innerHTML=vaccines;
}