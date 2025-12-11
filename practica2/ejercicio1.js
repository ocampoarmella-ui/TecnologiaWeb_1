function obtenerClima(temperatura) {
    if (temperatura >= -10 && temperatura <= 15) {
        return "Frío";
    } else if (temperatura >= 16 && temperatura <= 25) {
        return "Templado";
    } else if (temperatura >= 26 && temperatura <= 40) {
        return "Calor";
    } else {
        return "Temperatura fuera de rango";
    }
}

// ejemplo
console.log(obtenerClima(20)); 
