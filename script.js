// basic script to confirm the two inputted passwords match
// displays a message if they do not
// and returns to false to cancell form submission

const validatePasswords = () => {
  const p1 = document.getElementById('password').value;
  const p2 = document.getElementById('password-confirm').value;

  if (p1 !== p2) {
    document
      .querySelectorAll('.pass-input')
      .forEach((input) => input.classList.add('pw-mismatch'));
    return false;
  }
  document
    .querySelectorAll('.pass-input')
    .forEach((input) => input.classList.remove('pw-mismatch'));
  return true;
};
