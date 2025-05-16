import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Examples {
    public static void main(String[] args) {

        filterCount();
        transformAndFilter();

    }

    static void filterCount() {
        List<String> cities = Arrays.asList("New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia");

        long count = cities.stream()
                .filter(city -> city.length() > 6)
                .count();

        System.out.println("Count of cities with more than 6 letters: " + count);
    }

    // Transformar y filtrar
    static void transformAndFilter() {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);

        List<Integer> result = numbers.stream()
                .map(n -> n * n)
                .filter(n -> n % 2 != 0)
                .toList();

        System.out.println("Squared odd numbers: " + result);
    }

}