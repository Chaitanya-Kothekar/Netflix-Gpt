export const checkValidData = (email , password) =>{

//    if expression is correct it will return true inside "emailIsValid & passwordIsValid"

    const emailIsValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordIsValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!emailIsValid) return "Email Id is not valid";
    if(!passwordIsValid) return "password is not valid";

    return null;

};