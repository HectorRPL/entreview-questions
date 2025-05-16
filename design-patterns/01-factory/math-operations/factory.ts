// Definición de la interfaz para las operaciones
interface Operation {
    execute(x: number, y: number): number;
}

// Implementación de las clases concretas para cada operación
class Addition implements Operation {
    execute(x: number, y: number): number {
        return x + y;
    }
}

class Subtraction implements Operation {
    execute(x: number, y: number): number {
        return x - y;
    }
}

class Multiplication implements Operation {
    execute(x: number, y: number): number {
        return x * y;
    }
}

class Division implements Operation {
    execute(x: number, y: number): number {
        if (y === 0) {
            throw new Error("Cannot divide by zero");
        }
        return x / y;
    }
}

// Factory para crear instancias de operaciones
class OperationFactory {

    // para que pueda ser invocada directamente en la clase,
    // sin necesidad de instanciar un objeto de la clase OperationFactory.
    static createOperation(operationType: string): Operation {
        switch (operationType.toLowerCase()) {
            case 'add':
                return new Addition();
            case 'subtract':
                return new Subtraction();
            case 'multiply':
                return new Multiplication();
            case 'divide':
                return new Division();
            default:
                throw new Error("Invalid operation type");
        }
    }
}

// Uso del factory para obtener instancias de operaciones
const operationType = 'add'; // Cambia el tipo de operación aquí
const operation = OperationFactory.createOperation(operationType);

const operand1 = 10;
const operand2 = 5;

// Ejecución de la operación
const result = operation.execute(operand1, operand2);
console.log(`El resultado de la operación ${operationType} es: ${result}`);

/*
La clase OperationFactory en este ejemplo en realidad implementa el patrón de diseño Factory Method.
Sin embargo, también podríamos interpretarla como una implementación simplificada del patrón Strategy.

El patrón Strategy se centra en definir una familia de algoritmos,
encapsular cada uno de ellos y hacer que sean intercambiables.
Esto permite que el cliente pueda elegir el algoritmo que desea utilizar en tiempo de ejecución.

En el caso de OperationFactory, aunque el concepto de estrategia está
implícitamente presente (cada operación representa una estrategia de cálculo diferente),
el patrón Strategy generalmente involucra una mayor flexibilidad para cambiar los algoritmos en tiempo de ejecución.

Entonces, aunque OperationFactory comparte ciertas similitudes con el patrón Strategy
en cuanto a la encapsulación de diferentes algoritmos (operaciones matemáticas en este caso),
su enfoque principal es más cercano al patrón Factory Method ya que se centra
en la creación de objetos (en este caso, operaciones matemáticas)
sin exponer explícitamente la lógica de creación al cliente.
*/