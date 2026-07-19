/**
 * Create an array named `inventory` with ['sword', 'shield', 'potion']. Use includes() to check if 'shield' exists and store the result in `hasShield`. Check if 'armor' exists and store in `hasArmor`. Log both values.
 */

// solution

// Create your inventory array
const inventory = ["sword", "shield", "potion"];
// Check if shield exists
const hasShield = inventory.includes("shield");
// Check if armor exists
const hasArmor = inventory.includes("armor");
// Log the values
console.log(hasShield, hasArmor);
