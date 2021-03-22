const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");


//classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Show todays date
const options = {weekday :"long", month:"short", day:"numeric"}; 
const today = new Date();

dateElement.innerHTML = today.toDateString("en-US", options);

//add to do function

function addToDo(toDo){

    const item = `
    <i class="fa fa-circle-thin co" job="complete" id="0"></i>
    <p class="text">${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="0"></i>
    `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);

}

addToDo("Make Lunch");


