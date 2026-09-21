const inputTarea = document.getElementById("input-tarea");
const btnAgregar = document.getElementById("btn-agregar");
const listaTareas = document.getElementById("lista-tareas");

function agregarTarea() {
  const texto = inputTarea.value;

  if (texto === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = texto;
  listaTareas.appendChild(li);

  inputTarea.value = "";
}

btnAgregar.addEventListener("click", agregarTarea);

inputTarea.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    agregarTarea();
  }
});