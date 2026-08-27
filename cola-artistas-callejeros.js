/**
 * CASO DE ESTUDIO: Cola de artistas callejeros en una plaza pública
 * ------------------------------------------------------------------
 * En muchas plazas turísticas, los artistas callejeros (malabaristas,
 * mimos, músicos, etc.) deben anotarse ante el organizador del espacio
 * para poder presentarse. Solo un artista puede actuar a la vez, así
 * que todos esperan su turno en el orden en que llegaron.
 *
 * Esto es un ejemplo clásico de una COLA (FIFO - First In, First Out):
 * el primero en llegar es el primero en actuar.
 */
// Clase genérica de Cola (FIFO)
class Cola {
    constructor() {
        this.elementos = [];
    }
    // Agrega un elemento al final de la cola
    encolar(elemento) {
        this.elementos.push(elemento);
    }
    // Remueve y retorna el elemento al frente de la cola
    desencolar() {
        return this.elementos.shift();
    }
    // Mira quién está al frente sin sacarlo de la cola
    verFrente() {
        return this.elementos[0];
    }
    // Verifica si la cola está vacía
    estaVacia() {
        return this.elementos.length === 0;
    }
    // Cantidad de artistas esperando
    tamano() {
        return this.elementos.length;
    }
    // Lista el orden actual de espera
    listarEspera() {
        return [...this.elementos];
    }
    // Deja la cola vacía (útil para reconstruirla en subclases)
    vaciarTodo() {
        this.elementos = [];
    }
}
// Cola con prioridad: hereda todo el comportamiento de Cola<T>
// pero sobreescribe encolar() para artistas con permiso especial
class ColaConPrioridad extends Cola {
    encolar(artista) {
        if (artista.prioridad) {
            // Inserta al artista prioritario al frente, antes que el resto
            const resto = this.listarEspera();
            this.vaciarTodo();
            super.encolar(artista);
            resto.forEach((a) => super.encolar(a));
        }
        else {
            // Comportamiento normal: al final, como cualquier Cola<T>
            super.encolar(artista);
        }
    }
}
// ---------------------------------------------------
// SIMULACIÓN DEL CASO DE USO
// ---------------------------------------------------
const colaDeTurnos = new ColaConPrioridad();
colaDeTurnos.encolar({
    nombre: "Mateo",
    disciplina: "malabares con fuego",
    horaLlegada: new Date("2026-08-27T10:00:00"),
});
colaDeTurnos.encolar({
    nombre: "Lucía",
    disciplina: "mimo",
    horaLlegada: new Date("2026-08-27T10:05:00"),
});
// Andrés llega tarde, pero solo estará en la ciudad hoy: tiene prioridad
colaDeTurnos.encolar({
    nombre: "Andrés",
    disciplina: "guitarra flamenca",
    horaLlegada: new Date("2026-08-27T10:12:00"),
    prioridad: true,
});
console.log(`Artistas esperando turno: ${colaDeTurnos.tamano()}`);
console.log("Orden de espera (Andrés se coló por prioridad):");
colaDeTurnos.listarEspera().forEach((artista, i) => {
    console.log(`  ${i + 1}. ${artista.nombre} - ${artista.disciplina}`);
});
console.log("\n--- Comienza la función ---");
while (!colaDeTurnos.estaVacia()) {
    const siguienteArtista = colaDeTurnos.desencolar();
    console.log(`🎤 Ahora presentando: ${siguienteArtista?.nombre} (${siguienteArtista?.disciplina})`);
}
console.log("\nNo quedan más artistas en espera. La función terminó.");
