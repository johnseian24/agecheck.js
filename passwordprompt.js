import
 class PasswordPrompt {
static main(String) {
// Hardcoded correct password
 correctPassword = "secret123";
        
        // Create Scanner object to read input
       scanner = new Scanner(System.in);
        
         userInput;
        
        // Do-while loop to keep asking for the password
        do {
            System.out.print("Enter password: ");
            userInput = scanner.nextLine();
            
            // Check if the entered password is correct
            if (!userInput.equals(correctPassword)) {
                System.out.println("Incorrect password. Try again.");
            }
        } while (!userInput.equals(correctPassword));
        
        // Log success message
        System.out.println("Password correct! Access granted.");
        
        scanner.close();
    }
}
