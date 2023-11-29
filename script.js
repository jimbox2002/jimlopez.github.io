function mostrarDatos() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;

  document.getElementById("mostrar-nombre").innerText = `Nombre: ${nombre}`;
  document.getElementById("mostrar-apellido").innerText = `Apellido: ${apellido}`;

  document.getElementById("registro").style.display = "none";
  document.getElementById("datos-registro").style.display = "block";
}

function accederCurso() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  if (usuario === "alumno" && contrasena === "2023") {
    document.getElementById("datos-registro").style.display = "none";
    document.getElementById("curso").style.display = "block";
  } else {
    alert("Usuario o contraseña incorrectos. Intenta de nuevo.");
  }
}

function realizarEvaluacion() {
  document.getElementById("curso").style.display = "none";
  document.getElementById("evaluacion").style.display = "block";
}

function calcularCalificacion() {
  // Lógica para evaluar respuestas y calcular la calificación
  // ...


  const calificacionFinal = 80; // Supongamos que la calificación es 80 (puedes cambiar esto según tu lógica)
  document.getElementById("evaluacion").style.display = "none";
  document.getElementById("resultado").style.display = "block";
  document.getElementById("calificacion-final").innerText = `Calificación Final: ${calificacionFinal}`;
}

// ... (código anterior)

function accederCurso() {
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  if (usuario === "alumno" && contrasena === "2023") {
    document.getElementById("datos-registro").style.display = "none";
    document.getElementById("curso").style.display = "block";
    mostrarContenidoCurso();
  } else {
    alert("Usuario o contraseña incorrectos. Intenta de nuevo.");
  }
}

function mostrarContenidoCurso() {
  // Contenido del curso con hipervínculos, imágenes y videos
  const contenidoCurso = `
    <p>Bienvenido al curso Cultura General. A continuación, encontrarás una guia rapida general Jim Lopez:</p>
    <ul>
      <li><a href="https://es.wikipedia.org/wiki/Cultura_general" target="_blank">¿Que es la Cultura General?</a></li>
      <li><img src="culturageneral.png" alt="Imagen de ejemplo" width="480" height="380"></li>
      <li><iframe width="560" height="315" src="https://www.youtube.com/embed/syFgOiZPMe8"" frameborder="0" allowfullscreen></iframe></li>
    </ul>
    <button onclick="realizarEvaluacion()">Realizar Evaluación</button>
  `;

  document.getElementById("curso").innerHTML = contenidoCurso;
}

function realizarEvaluacion() {
  // Preguntas de evaluación con diferentes interfaces visuales
  const preguntasEvaluacion = `
    <h2>Evaluación</h2>
<div class="pregunta">
    <label>Pregunta 1: ¿De qué colores es la bandera de guatemala?</label>
<div>    
    <input type="checkbox" id="pregunta1_opcion1"> blanco y celeste
</div>
<div>
    <input type="checkbox" id="pregunta1_opcion2"> Azul, rojo y amarillo
</div>
</div>
<br> 
<div class="pregunta">
    <label>Pregunta 2: ¿En qué continente está japon?</label>
<div>
    <input type="radio" name="pregunta2" id="pregunta2_opcion1"> Asia
</div>
<div>
    <input type="radio" name="pregunta2" id="pregunta2_opcion2"> América
</div>
</div>
<br> 
<div class="pregunta">
    <label>Pregunta 3: ¿Dónde se encuentra la famosa Torre Eiffel?</label>
<div>
    <input type="radio" name="pregunta3" id="pregunta3_opcion1"> París, Francia
</div>
<div>
    <input type="radio" name="pregunta3" id="pregunta3_opcion2"> Roma, Italia
</div>
</div>
<br>
<div class="pregunta">
    <label>Pregunta 4: ¿Quién es el futbolista con más balones de oro en la historia?</label>
<div>
    <input type="radio" name="pregunta4" id="pregunta4_opcion1"> Lionel Messi
</div>
<div>
    <input type="radio" name="pregunta4" id="pregunta4_opcion2"> Cristiano Ronaldo
</div>
</div>
<br> 
<div class="pregunta">
    <label>Pregunta 5: ¿Cuál es el metal más barato del mundo?</label>
<div>
    <input type="radio" name="pregunta5" id="pregunta5_opcion1"> hierro
</div>
<div>
    <input type="radio" name="pregunta5" id="pregunta5_opcion2"> Rodio
</div>
</div>
<br> 
<div class="pregunta">
    <label>Pregunta 6: ¿Cómo se llama la competición más importante de fisiculturismo a nivel mundial?</label>
<div>
    <input type="radio" name="pregunta6" id="pregunta6_opcion1"> Mister Olympia
</div>
<div>
    <input type="radio" name="pregunta6" id="pregunta6_opcion2"> Mister musculo
</div>
</div>
<br> 
<div class="pregunta">
    <label>Pregunta 7: ¿Qué pierde una persona que sufre de alopecia?</label>
<div>
    <input type="radio" name="pregunta7" id="pregunta7_opcion1"> vista
</div>
<div>
    <input type="radio" name="pregunta7" id="pregunta7_opcion2"> Cabello
</div>
</div>
<br>
<div class="pregunta">
    <label>Pregunta 8: ¿Dónde nació William Shakespeare?</label>
<div>
    <input type="radio" name="pregunta8" id="pregunta8_opcion1"> Estados Unidos
</div>
<div>
    <input type="radio" name="pregunta8" id="pregunta8_opcion2"> Reino Unido
</div>
</div>
<br>
<div class="pregunta">
    <label>Pregunta 9: ¿Quién es el dios del fuego en la mitodología griega?</label>
<div>
    <input type="radio" name="pregunta9" id="pregunta9_opcion1"> hestia
</div>
<div>
    <input type="radio" name="pregunta9" id="pregunta9_opcion2"> Neptuno
</div>
</div>
<br>
<div class="pregunta">
    <label>Pregunta 10: ¿Cuándo acabó la II Guerra Mundial?</label>
<div>
    <select id="pregunta10">
      <option value="opcion1">1945</option>
      <option value="opcion2">1947</option>
    </select>
</div>
</div>
<br> 
    <button onclick="calcularCalificacion()">Calcular Calificación</button>

  `;

  document.getElementById("evaluacion").innerHTML = preguntasEvaluacion;
  document.getElementById("curso").style.display = "none";
  document.getElementById("evaluacion").style.display = "block";
}

function calcularCalificacion() {
  // Lógica para evaluar respuestas y calcular la calificación
  const respuesta1 = document.getElementById("pregunta1_opcion1").checked;
  const respuesta2 = document.getElementById("pregunta2_opcion1").checked;
  const respuesta3 = document.getElementById("pregunta3_opcion1").checked;
const respuesta4 = document.getElementById("pregunta4_opcion1").checked;
const respuesta5 = document.getElementById("pregunta5_opcion1").checked;
const respuesta6 = document.getElementById("pregunta6_opcion1").checked;
const respuesta7 = document.getElementById("pregunta7_opcion1").checked;
const respuesta8 = document.getElementById("pregunta8_opcion1").checked;
const respuesta9 = document.getElementById("pregunta9_opcion1").checked;
  const respuesta10 = document.getElementById("pregunta10").value;

  // Supongamos que la calificación es 100 (puedes cambiar esto según tu lógica)
  const calificacionFinal = (respuesta1 ? 10 : 0) + (respuesta2 ? 0 : 10) + (respuesta3 ? 10 : 0) + (respuesta4 ? 10 : 0) + (respuesta5 ? 0 : 10) + (respuesta6 ? 10 : 0) + (respuesta7 ? 0 : 10) + (respuesta8 ? 0 : 10) + (respuesta9 ? 10 : 0) + (respuesta10 === "opcion1" ? 10 : 0);

  document.getElementById("evaluacion").style.display = "none";
  mostrarResultado(calificacionFinal);
}

function mostrarResultado(calificacionFinal) {
  document.getElementById("resultado").style.display = "block";
  document.getElementById("calificacion-final").innerText = `Calificación Final: ${calificacionFinal}`;
}
