const addJs = document.getElementById("add-js");
const todos = [];

const main = document.getElementById("main");

let html = "";
let x = "";

addJs.addEventListener("click", () => {
  const todoInput = document.getElementById("input-todo-js").value;

  if (todoInput === "") {
    alert("Please inptu a Todo");
  } else {
    todos.push(todoInput);
    document.getElementById("input-todo-js").value = "";

    todos.forEach((todo, index) => {
      x = `
       <div
            class="mb-3 rounded-2xl bg-wheat flex items-center justify-between bg-[#F1F0E9] overflow-hidden"
          >
            <p class="ms-5">${todo}</p>
            <button  class="bg-red-300 px-5 py-2 cursor-pointer delete-js" data-index=${index}>
              Delete
            </button>
          </div>
         `;
    });
    html += x;
    main.innerHTML = html;
  }

  console.log(todos);
});

function deleteTask(event) {
  if (event.target.classList.contains("delete-js")) {
    event.target.parentElement.remove();
    const index = event.target.getAttribute("data-index");
    todos.splice(index, 1);
    console.log(todos);
  }
}

main.addEventListener("click", deleteTask);
