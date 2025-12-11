class Hotel {
  constructor(nombre, ciudad, habitacionesDisponibles) {
    this.nombre = nombre
    this.ciudad = ciudad
    this.habitacionesDisponibles = habitacionesDisponibles
  }

  reservar(cantidad) {
    if (cantidad < 0) {
      console.error("Error: No se puede reservar una cantidad negativa")
      return false
    }
    if (cantidad > this.habitacionesDisponibles) {
      console.error(`Error: No hay suficientes habitaciones disponibles (disponibles: ${this.habitacionesDisponibles})`)
      return false
    }
    this.habitacionesDisponibles -= cantidad
    console.log(`✓ Se reservaron ${cantidad} habitaciones`)
    return true
  }

  liberar(cantidad) {
    if (cantidad < 0) {
      console.error("Error: No se puede liberar una cantidad negativa")
      return false
    }
    this.habitacionesDisponibles += cantidad
    console.log(`✓ Se liberaron ${cantidad} habitaciones`)
    return true
  }

  info() {
    return `Hotel: ${this.nombre}\nCiudad: ${this.ciudad}\nHabitaciones disponibles: ${this.habitacionesDisponibles}`
  }
}

console.log("Ejercicio 5")
const hotel = new Hotel("Grand Hotel Madrid", "Madrid", 50)
console.log(hotel.info())
hotel.reservar(15)
console.log(hotel.info())
hotel.liberar(5)
console.log(hotel.info())
hotel.reservar(100)
hotel.reservar(-5)
