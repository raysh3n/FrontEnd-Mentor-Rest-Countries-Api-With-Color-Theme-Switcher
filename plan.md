- create the UI for the work details
- fetch via the fetchapi
- add loading function
- dark  theme





country.name //if name does not exist, wont give error. it will just be undefined
country.name.common //if name does not exist, and with that common, you will get typeerror




country.tld?.[0].name.dog ?? "N/A"
// Step 1: country.tld → undefined
// ?. stops here, [0].name.dog never executes → undefined
// Step 2: ?? takes over
undefined ?? "N/A"  →  "N/A"



const arr = [];
arr[0];  // undefined



[].join('');  // ""