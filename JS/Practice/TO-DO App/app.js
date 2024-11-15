let todo=[];
let req=prompt("Enter your request:");
console.log(req);
while(true){
    if(req=="quit"){
        console.log("Quitting");
        break;
    }
    else if(req=="list"){
        console.log("_____________");
        for(task of todo){
            consol.log(task);
        }
        console.log("_____________");
    }
    else if(req=="add"){
        let task=prompt("Enter the task you want to add:");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx=prompt("enter task index to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("Wrong req!")
    }

    req=prompt("Enter our request");
}