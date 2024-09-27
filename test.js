const box = document.querySelector(".box");
const container = document.querySelector(".container");
box.addEventListener("dragstart", (e) => {
  console.log("dragging started");
});
box.addEventListener("dragend", (e) => {
  console.log("dragging ended"); // when it goes back to its original
  // position after we leave dragging, that means dragging ended.
});
//adding dragenter,dragover,dragleave and drop events to container.
container.addEventListener("dragenter", () => {
  console.log("some dragged element entered the container");
});
container.addEventListener("dragleave", () => {
  console.log("some dragged element left the container");
});
container.addEventListener("dragover", (event) => {
  //by default the dragover will not allow the drop event to trigger
  // even if the element is dropped.
  // preventing the default behaviour will enable the drop event.
  event.preventDefault();
  console.log("some dragged element is on top of the container"); //dragover event
  // keeps on triggering until box leave the container
});
container.addEventListener("drop", () => {
  console.log("some dragged element is dropped on the container"); //by default the
  // drop event will be prevented by the dragover event
  container.appendChild(box);// it is appended to container and disconnects 
  // box from its initial position beacause inside the DOM tree there should 
  //no two nodes with the same memory reference.
});

// both these events are added to a draggable element only, whose
// draggable attribute is set to true

//// The events named "dragenter","dragover","dragleave" can be attached
//// to any element weather that element has draggble attribute is true or false
//// doesn't matter.

//when a movable element(box) enters the region of another(container) element
// (when cursor(not box) touches the boundary of container) then
// dragenter event is triggered. And when the movable element leaves the region of
//that element(container) then dragleave event is triggered.

//when box is on top of container then dragover event is triggered.
