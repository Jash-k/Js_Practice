function formatUserProfile(user) {
  const fullName = `${user.firstName} ${user.lastName}`.toUpperCase();
  const emailDomain = user.email.split('@')[1];
  
  return `Full Name: ${fullName}\nEmail: ${user.email}\nDomain: ${emailDomain}`;
}

// Example Usage
const user = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com"
};

console.log(formatUserProfile(user));