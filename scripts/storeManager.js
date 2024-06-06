function saveItem(item){
    let items = readItems();
    items.push(item); // push (add) the new item to the array
    let val = JSON.stringify(items); // parses the object into JSON string
    console.log(val); // displays the object in the console as a string
    localStorage.setItem("services",val); // send the val to the local storage server
}

function readItems(){
    let data = localStorage.getItem("services"); //getting the calues from the local storage server

    if(!data){ // No Data
        return[];  // creating the array
    }else{
        let list = JSON.parse(data); //parse back into an array
        return list;
    }


}