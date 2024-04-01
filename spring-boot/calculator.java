// Configuración de Spring
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    // Configuración de los beans
}

// Clase principal de la aplicación
public class MainApp {
    public static void main(String[] args) {
        // Crear el contexto de Spring
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        // Obtener el bean de la calculadora
        Calculator calculator = context.getBean(Calculator.class);

        // Sumar dos números
        int sum = calculator.add(10, 20);
        System.out.println("La suma de 10 y 20 es: " + sum);

        // Cerrar el contexto de Spring
        context.close();
    }
}

// Calculadora
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}