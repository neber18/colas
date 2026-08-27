# Cola de artistas callejeros — Caso de estudio (Manejo de colas)

Caso de estudio real: en una plaza pública, los artistas callejeros se
anotan al llegar y esperan su turno para presentarse. El primero en
llegar es el primero en salir al escenario — una **cola FIFO** clásica,
implementada aquí con **Programación Orientada a Objetos** en TypeScript.

## Archivos

- `cola-artistas-callejeros.ts` — código fuente en TypeScript (clases `Cola<T>` y `ColaConPrioridad`).
- `cola-artistas-callejeros.html` — versión visual e interactiva (ábrelo directo en el navegador, no necesita instalación).
- `cola-artistas-callejeros.js` — versión compilada, generada a partir del `.ts`.

## Cómo ejecutarlo

1. Instala las dependencias:
   ```
   npm install
   ```
2. Compila el TypeScript:
   ```
   npm run build
   ```
3. Ejecuta el script:
   ```
   npm start
   ```

También puedes abrir `cola-artistas-callejeros.html` directamente con doble clic para ver la versión visual, sin necesidad de compilar nada.

## Conceptos de POO aplicados

- **Clase y objeto**: `Cola<T>` es la clase; `new ColaConPrioridad()` es el objeto.
- **Encapsulamiento**: el arreglo interno es `protected`, solo se manipula a través de métodos (`encolar`, `desencolar`, etc.).
- **Herencia**: `ColaConPrioridad extends Cola<Artista>`.
- **Polimorfismo (override)**: `encolar()` se comporta distinto en la subclase.
- **Generics**: `Cola<T>` es reutilizable para cualquier tipo de dato.
