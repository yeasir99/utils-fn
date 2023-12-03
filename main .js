function generatePassword(length) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  const allCharacters =
    lowerCaseLetters + upperCaseLetters + numbers + specialCharacters;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += allCharacters.charAt(
      Math.floor(Math.random() * allCharacters.length)
    );
  }
  return password;
}
