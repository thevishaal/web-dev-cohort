/**
 * Create an IIFE that declares a private variable `secret` with value 'hidden', then immediately logs 'Secret is: [secret]'. The IIFE should execute automatically.
 */

// solution
// Create and execute IIFE
(function () {
  const secret = "hidden";
  console.log(`Secret is: ${secret}`);
})();
