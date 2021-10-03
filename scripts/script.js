let mainDiv = document.querySelector("#container");
let insertItem = document.createElement("p");
insertItem.textContent = "Hey I'm red!"
insertItem.style.color = "Red" ;
mainDiv.appendChild(insertItem);
insertItem = document.createElement("h3") ;
insertItem.style.color = "Blue";
insertItem.textContent = "I'm a blue h3!";
mainDiv.appendChild(insertItem);
insertItem = document.createElement("div");
insertItem.id = "child-div";
insertItem.style.border="solid 2px black";
insertItem.style.backgroundColor = "pink";
mainDiv.appendChild(insertItem);
mainDiv = document.querySelector("#child-div");
insertItem = document.createElement("h1");
insertItem.textContent = "I'm in a div" ;
mainDiv.appendChild(insertItem);
insertItem = document.createElement("p");
insertItem.textContent = "ME TOO!";
mainDiv.appendChild(insertItem);



