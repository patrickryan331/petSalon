let petSalon ={ 
    name:"The Pet Store", 
    phone: "1231231234", 
    hours:{
        open:"9:00 am", 
        close:"9:00 pm"
    },
    pets:[ 
        {
            name: "Scooby",
            age: 5,
            gender: "Male",
            service: "Grooming",
            breed: "Great Dane",
        },
        {
            name: "Scrappy",
            age: 3,
            gender: "Male",
            service: "Nail Clipping",
            breed: "pit bull",
        },
        {
            name: "Daisy",
            age: 8,
            gender: "Female",
            service: "Grooming",
            breed: "Boxer",
        }

    ]
}



function displayNames(){
let names="";
for(let i=0;i<3;i++){
    names+=`<p> ${petSalon.pets[i].name}</p>`
    console.log(names);
}
document.getElementById("petNames").innerHTML=names;
}

function countPets(){
console.log(petSalon.pets.length);
document.write(innerHTML=petSalon.pets.length);
    }


displayNames()
countPets()