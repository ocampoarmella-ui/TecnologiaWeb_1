function obtenerFechaActual() {
  const fecha = new Date()
  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]

  const dia = diasSemana[fecha.getDay()]
  const numDia = fecha.getDate()
  const mes = meses[fecha.getMonth()]
  const año = fecha.getFullYear()

  return `${dia}, ${numDia} de ${mes} del ${año}`
}

console.log("\Ejercicio 3 Fecha Actual")
console.log(`Fecha: ${obtenerFechaActual()}`)