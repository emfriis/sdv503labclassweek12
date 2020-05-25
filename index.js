function telephoneCheck(str) { // Checks if a given string meets US phone number formatting.
    let phoneCharTestBr = /^[1]?[- ]?\([0-9]{3}\)[- ]?[0-9]{3}[- ]?[0-9]{4}$/; // Creates regex object alligned with formatting for US phone numbers with brackets.
    let phoneCharTestNoBr = /^[1]?[- ]?[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{4}$/; // Creates regex object alligned with formatting for US phone numbers without brackets.
    if (phoneCharTestBr.test(str)) { // Executes code if string meets US phone number formatting with brackets.
        return true; // Returns True.
    } else if (phoneCharTestNoBr.test(str)) { // Executes code if string meets US phone number formatting without brackets.
        return true; // Returns True
    } else { // Executes code if string doesn't meet US phone number formatting.
        return false; // Returns False.
    };
};

// Regex object 'phoneCharTestBr' tests for: start of string, 0-1 1s, exactly 1 hyphen/space, exactly 1 open bracket, exactly 3 digits, exactly 1 close bracket, exactly 1 hyphen/space, exactly 3 digits, exactly 1 hyphen/space, exactly 4 digits, end of string.  
// Regex object 'phoneCharTestNoBr' tests for: start of string, 0-1 1s, exactly 1 hyphen/space, exactly 3 digits, exactly 1 hyphen/space, exactly 3 digits, exactly 1 hyphen/space, exactly 4 digits, end of string.

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555 555 5555"));

console.log(telephoneCheck("5555555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("2 (757) 622-7382"));
console.log(telephoneCheck("0 (757) 622-7382"));
console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("2(757)6227382"));