console.log("=== ZOMATO LOGIN SYSTEM ===");
// Step 1: User visits login page
let userEmail = "";
let userPassword = "";
let isLoggedIn = false;
// Step 2: User enters credentials
// Simulating user input
userEmail = "customer@gmail.com";
userPassword = "mypassword123";
console.log("✅ User entered email:", userEmail);
console.log("✅ User entered password:", "***hidden***");
// Step 3: Validate credentials
// Stored user data (normally from database)
let storedEmail = "customer@gmail.com";
let storedPassword = "mypassword123";
if (userEmail === storedEmail && userPassword ===
storedPassword) {
isLoggedIn = true;
console.log("Ἰ LOGIN SUCCESSFUL!");
console.log("Welcome back,", userEmail);
} else {
isLoggedIn = false;
console.log("❌ SORRY! LOGIN FAILED!");
console.log("Wrong email or password");
}
