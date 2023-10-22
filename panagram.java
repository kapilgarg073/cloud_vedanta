public class PangramChecker {
    public static boolean isPangram(String input) {
        boolean[] alphabet = new boolean[26];
        int totalChars = 0;

        for (int i = 0; i < input.length(); i++) {
            char ch = Character.toLowerCase(input.charAt(i));

            if (ch >= 'a' && ch <= 'z') {
                int index = ch - 'a';

                if (!alphabet[index]) {
                    alphabet[index] = true;
                    totalChars++;
                }
            }

            if (totalChars == 26) {
                return true;
            }
        }

        return false;
    }

    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
