const form = document.getElementById("create-task-form");

form.addEventListener("submit", (e) => {            
  e.preventDefault();
  const taskStatus = form.status.value;
  const taskInfo = {
    title: form.title.value,
    description: form.description.value,
    developer: form.developer.value,
    estimate: form.estimate.value,
  };
  console.log(taskInfo);
});



 <div class="task-card" title="This is a Dummy Task">
  <h3>Chat Box</h3>
  <div>
    <span class="badge">3 Days</span>
    <span class="image">S</span>
  </div>
</div> 


