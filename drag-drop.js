const todoContainer = document.getElementById("TODO");
const containers = document.querySelectorAll(".container");

let draggingElement = null;

// todoContainer.addEventListener("dragover", (event) => {
//   event.preventDefault();
// });

const onDragOver = (event) => {
  if (draggingElement.parentNode.id === event.currentTarget.id) {
    //trying to drop the element in the same container
    return;
  }
  event.preventDefault();
};

const onDrop = (event) => {
  //Dragged element should be placed inside the drop container
  event.currentTarget.appendChild(draggingElement);
  draggingElement = null;
};

for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("dragover", onDragOver);
  containers[i].addEventListener("drop", onDrop);
}

function onDragStart(event) {
  console.log(event.target);
  draggingElement = event.currentTarget;
}
