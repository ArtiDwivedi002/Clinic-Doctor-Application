 export   interface RegisterForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    mobileNumber: string;
    dateofBirth:string;
}

 export   interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

  export  interface AuthData {
        isAuthenticated: boolean;
        email: string;
    }