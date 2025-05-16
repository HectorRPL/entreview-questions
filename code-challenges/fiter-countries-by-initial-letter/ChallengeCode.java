import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class ChallengeCode {
    public static void main(String[] args) {

        List<String> countries = Arrays.asList("Morocco", "Italy", "Brazil", "Mexico", "Australia", "Germany", "South Africa", "Madagascar");

        List<String> countriesWithM = countries.stream()
                .filter(country -> country.startsWith("M"))
                .toList();

        countriesWithM.forEach(System.out::println);
        System.out.println("Squared odd numbers: " + countriesWithM);
    }
}