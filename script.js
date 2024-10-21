// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    // TODO: Create a variable for the character set based on selected options
    let charSet = "";

    if (options.includeUppercase) charSet += uppercase;
    if (options.includeLowercase) charSet += lowercase;
    if (options.includeNumbers) charSet += numbers;
    if (options.includeSpecialChars) charSet += specialChars;

    if (charSet === "") {
        return "tolong pilih setidaknya satu opsi"; 
    }

    // TODO: Generate the password based on the selected criteria
    let password = "";
    for (let i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    return password;
};

// TODO: Add event listener to the button to call generatePassword and display the output
document.getElementById('generateBtn').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10);
    const options = {
        includeUppercase: document.getElementById('includeUppercase').checked,
        includeLowercase: document.getElementById('includeLowercase').checked,
        includeNumbers: document.getElementById('includeNumbers').checked,
        includeSpecialChars: document.getElementById('includeSpecialChars').checked,
    };

    const password = generatePassword(length, options);
    document.getElementById('passwordOutput').textContent = password;
});

// BONUS: Implement the copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', () => {
    const passwordOutput = document.getElementById('passwordOutput').textContent;
    if (passwordOutput) {
        navigator.clipboard.writeText(passwordOutput).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    } else {
        alert('No password to copy!');
    }
});