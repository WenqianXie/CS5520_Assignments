export const validateName = (name) => {
    if (name.length < 2 || !isNaN(name)){
        return false;
    }
    return true;
  }; // validate if a user name is valid (length must be more than 1 and must not be number)

export const validateEmail = (email) => {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
}

export const validatePhone = (phone) => {
    if (phone.length !== 10 || isNaN(phone)){
        return false;
    }
    return true;
}