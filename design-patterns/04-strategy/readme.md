ES un patrón de comportamiento por lo tanto sirve para encapsular lógica
Objetivo: Poder tener diferetentes logicas encapsuladas y asi poder de una a otra de una forma elegante
La clave: Crear objetos que representen estas estratégicas (heredan o implementan) (usables de forma polimorfismo)
El contexto no necesita saber que implementacion concreta se está utilizando 
Delegar funciones que pueden ir cambiando a lo largo del tiempo
Siempre que tengamos cierta lógica que puede cambiar vale la pena ponerse a pensar si podemos usar este patrón
Se logra un programa modular, porque puedes combinar diferentes partes para conseguir diferentes funcionalidades
Este patrón promueve el principio de diseño SOLID, especialmente el principio de Open/Closed, ya que facilita la extensión de comportamientos sin modificar el código existente.



Evita el uso con muchos if
No aplica para el uso de switch

Palabras clave:
    
    Contexto: Es la clase que contiene una referencia a la estrategia actual y utiliza esta estrategia para ejecutar un algoritmo específico.
    Interfaz Estrategia: Es la interfaz común que define los métodos que todas las estrategias deben implementar.
    Estrategia: Son las clases concretas que implementan la interfaz Estrategia y proporcionan diferentes algoritmos.

Usar en Programación Funcional, se le pasa la funcion funcional


Pokempon
Imprimir logs
Polimorfismo
