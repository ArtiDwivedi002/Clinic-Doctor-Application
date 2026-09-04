import { useState } from "react";
import { RegisterForm } from "@/src/types/(auth)/auth.type";

export default function useRegisterState() {

        const [form, setForm] = useState<RegisterForm>({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            dateofBirth:"",
            mobileNumber:""
        });
    
        const [error, setError] = useState("");
        const [success, setSuccess] = useState("");
        const [showPassword, setShowPassword] = useState(false);
        const [dateofbirth, setDateOfBirth] = useState("");
        const [mobileNumber,setMobileNumber] = useState("");
        const [showConfirmPassword, setShowConfirmPassword] =
            useState(false);
    
        const handleChange = (
            e: React.ChangeEvent<HTMLInputElement>
        ) => {
            const { name, value } = e.target;
    
            setForm((prev) => ({
                ...prev,
                [name]: value,
            }));
    
            setError("");
            setSuccess("");
        };
    
      const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
    
        setError("");
        setSuccess("");
    
        const firstName = form.firstName.trim();
        const lastName = form.lastName.trim();
        const email = form.email.trim().toLowerCase();
        const dateOfBirth = form.dateofBirth.trim();
        const mobileNumber = form.mobileNumber.trim();
    
        // First name validation
        if (!firstName) {
            setError("First name is required.");
            return;
        }
    
        if (firstName.length < 2) {
            setError("First name must be at least 2 characters.");
            return;
        }
    
        // Last name validation
        if (!lastName) {
            setError("Last name is required.");
            return;
        }
    
        if (lastName.length < 2) {
            setError("Last name must be at least 2 characters.");
            return;
        }
    
        // Email validation
        if (!email) {
            setError("Email is required.");
            return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
    
        // Date of birth validation
        if (!dateOfBirth) {
            setError("Date of birth is required.");
            return;
        }
    
        // Mobile validation
        if (!mobileNumber) {
            setError("Mobile number is required.");
            return;
        }
    
        if (!/^\d{10}$/.test(mobileNumber)) {
            setError("Mobile number must be exactly 10 digits.");
            return;
        }
    
        // Password validation
        if (!form.password) {
            setError("Password is required.");
            return;
        }
    
        if (form.password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }
    
        // Confirm password
        if (!form.confirmPassword) {
            setError("Please confirm your password.");
            return;
        }
    
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
    
        // Check existing registered user
        const existingUser = localStorage.getItem("registeredUser");
    
        if (existingUser) {
            try {
                const user = JSON.parse(existingUser);
    
                if (user.email === email) {
                    setError(
                        "An account with this email already exists."
                    );
                    return;
                }
            } catch {
                localStorage.removeItem("registeredUser");
            }
        }
    
        // Save registered user
        const registeredUser = {
            firstName,
            lastName,
            email,
            password: form.password,
            dateOfBirth,
            phone: mobileNumber,
        };
    
        localStorage.setItem(
            "registeredUser",
            JSON.stringify(registeredUser)
        );
    
        // Save profile
        const profileData = {
            firstName,
            lastName,
            email,
            phone: mobileNumber,
            dateOfBirth,
        };
    
        localStorage.setItem(
            "profile",
            JSON.stringify(profileData)
        );
    
        setSuccess(
            "Registration successful! You can now login."
        );
    
        // Clear form
        setForm({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            dateofBirth: "",
            mobileNumber: "",
        });
    };
    return {
        handleSubmit,
        handleChange,
        form,
        error,  
        success,
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword

    }
}