const lugarTuristico = {
  nombre: "Torre Eiffel",
  ciudad: "París",
  precioEntrada: 25,
  horario: "09:00 - 23:00",
  calificaciones: [4.5, 4.8, 4.6, 4.9, 4.7],

  promedioCalificaciones() {
    const suma = this.calificaciones.reduce((acc, cal) => acc + cal, 0)
    return suma / this.calificaciones.length
  },

  aplicarDescuento(porcentaje) {
    this.precioEntrada = this.precioEntrada - this.precioEntrada * (porcentaje / 100)
  },
}

console.log("Ejercicio 4 Lugar turistico")
console.log(`Nombre: ${lugarTuristico.nombre}`)
console.log(`Ciudad: ${lugarTuristico.ciudad}`)
console.log(`Precio original: €${lugarTuristico.precioEntrada}`)
console.log(`Promedio de calificaciones: ${lugarTuristico.promedioCalificaciones().toFixed(2)} ⭐`)

lugarTuristico.aplicarDescuento(10)
console.log(`Precio con 10% descuento: €${lugarTuristico.precioEntrada.toFixed(2)}`)
