document.addEventListener("DOMContentLoaded", () => {

  const taskInput = document.getElementById("taskInput");
  const button = document.getElementById("button");
  const taskList = document.getElementById("taskList");

  button.addEventListener("click", addTask);

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }


    const taskItem = document.createElement("li");
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    const actionButton = document.createElement("div");
    actionButton.className = "action-buttons";

    const completeButton = document.createElement("button");
    completeButton.textContent = "Completed";
    completeButton.addEventListener("click", () => {
      taskContent.classList.toggle("completed");
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    actionButton.appendChild(completeButton);
    actionButton.appendChild(removeButton);
    
    taskItem.appendChild(taskContent);
    taskItem.appendChild(actionButton);
    taskList.appendChild(taskItem);
    taskInput.value = "";

  }

});

// function greet(name) {
//   console.log("hello " + name + "!")
// }

// greet("ime")

// const voce = ["jabuka", "breskva", "kruska", "lubenica"]
// function favoriteFruit(fruit) {
//   console.log(voce["jabuka"])
//   for (i = 0; i < voce.length; i++) {
//     if (fruit === voce[i]) {
//       return console.log("yes its a favorite")
//     }
//     else {
//       return console.log("no")
//     }
//   }
// }

// favoriteFruit("jabuka")
// favoriteFruit("sljiva")

// const person = {
//   name : "John",
//   age: 23,
//   city:"Zagreb"
// }

// function introducePerson() {
//   console.log("Hello my name is " + person.name + " I am " + person.age + "I am from " + person.city)
// }

// introducePerson();


// const number = [1, 3, 5, 3, 6]
// function doubleNumbers(arr) {
//   for (i = 0; i < number.length; i++){
//     arr[i] = arr[i]*2;
//   }
//   return arr;
// }

// doubleNumbers(number);
// console.log(number)
