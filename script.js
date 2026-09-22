const inputTarea = document.getElementById("input-tarea");
const btnAgregar = document.getElementById("btn-agregar");
const listaTareas = document.getElementById("lista-tareas");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function guardarTareas() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function renderizarTareas() {
  listaTareas.innerHTML = "";

  tareas.forEach(function (tarea, indice) {
    const li = document.createElement("li");
    if (tarea.completada) {
      li.classList.add("completada");
    }

    const spanTexto = document.createElement("span");
    spanTexto.textContent = tarea.texto;
    spanTexto.addEventListener("click", function () {
      tarea.completada = !tarea.completada;
      guardarTareas();
      renderizarTareas();
    });

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "×";
    btnBorrar.addEventListener("click", function () {
      tareas.splice(indice, 1);
      guardarTareas();
      renderizarTareas();
    });

    li.appendChild(spanTexto);
    li.appendChild(btnBorrar);
    listaTareas.appendChild(li);
  });
}

function agregarTarea() {
  const texto = inputTarea.value;

  if (texto === "") {
    return;
  }

  tareas.push({ texto: texto, completada: false });
  guardarTareas();
  renderizarTareas();

  inputTarea.value = "";
}

btnAgregar.addEventListener("click", agregarTarea);

inputTarea.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    agregarTarea();
  }
});

renderizarTareas();