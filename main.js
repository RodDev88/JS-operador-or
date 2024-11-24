function revisar() {
  let salarioActual = document.querySelector("#salarioActual").value;
  let salarioAnterior = document.querySelector("#salarioAnterior").value;

  if (salarioActual != "" || salarioAnterior != "") {
    alert("Correcto");
  } else {
    alert("Incorrecto");
  }
}
