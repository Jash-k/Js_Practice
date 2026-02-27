function generateUsername(user) {

  const namePrefix = user.name.slice(0, 3);
  
  
  const phoneSuffix = user.phoneNumber.slice(-2);
  
  
  const username = (namePrefix + phoneSuffix).toLowerCase();
  
  return username;
}


const user = {
  name: "Jonathan",
  phoneNumber: "9876543210"
};

console.log(generateUsername(user));