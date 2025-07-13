const validateInputForm = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/;

  const isEmail = emailRegex.test(email);
  const isPassword = passwordRegex.test(password);

  if (!isEmail) return "Email is not valid";
  if (!isPassword) return "Password must be at least 6 characters";

  return null;
};

export default validateInputForm;
