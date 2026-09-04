"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const TEST_EMAIL = "test@example.com";
const TEST_PASSWORD = "Test@123";

export const useLoginState = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const login = (email: string, password: string) => {
    setError("");
    setLoading(false);

    const cleanEmail = email.trim().toLowerCase();

    // -----------------------------
    // Email validation
    // -----------------------------
    if (!cleanEmail) {
      setError("Email is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    // -----------------------------
    // Password validation
    // -----------------------------
    if (!password) {
      setError("Password is required.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    // -----------------------------
    // Check login credentials
    // -----------------------------

    let isValidUser = false;

    // 1. Check assignment test account
    if (
      cleanEmail === TEST_EMAIL &&
      password === TEST_PASSWORD
    ) {
      isValidUser = true;
    }

    // 2. Check registered user
    const registeredUser = localStorage.getItem(
      "registeredUser"
    );

    if (registeredUser) {
      try {
        const user = JSON.parse(registeredUser);

        if (
          user.email === cleanEmail &&
          user.password === password
        ) {
          isValidUser = true;
        }
      } catch {
        localStorage.removeItem("registeredUser");
      }
    }

    // Invalid credentials
    if (!isValidUser) {
      setError("Invalid email or password.");
      return;
    }

    // -----------------------------
    // Login successful
    // -----------------------------

    setLoading(true);

    const authData = {
      isAuthenticated: true,
      email: cleanEmail,
      loginTime: new Date().toISOString(),
    };

    localStorage.setItem(
      "auth",
      JSON.stringify(authData)
    );

    // -----------------------------
    // Profile
    // -----------------------------

    const existingProfile =
      localStorage.getItem("profile");

    if (!existingProfile) {
      let profileData;

      // If registered user exists,
      // create profile from registration data
      if (registeredUser) {
        try {
          const user = JSON.parse(registeredUser);

          if (user.email === cleanEmail) {
            profileData = {
              firstName: user.firstName || "",
              lastName: user.lastName || "",
              email: user.email || cleanEmail,
              phone: user.phone || "",
              dateOfBirth: user.dateOfBirth || "",
            };
          }
        } catch {
          // Ignore invalid registered user
        }
      }

      // Default profile for test account
      if (!profileData) {
        profileData = {
          firstName: "Test",
          lastName: "User",
          email: cleanEmail,
          phone: "",
          dateOfBirth: "",
        };
      }

      localStorage.setItem(
        "profile",
        JSON.stringify(profileData)
      );
    }

    // -----------------------------
    // Redirect
    // -----------------------------

    router.push("/dashboard");
  };

  // -----------------------------
  // Logout
  // -----------------------------

  const logout = () => {
    localStorage.removeItem("auth");
    router.replace("/login");
  };

  // -----------------------------
  // Check authentication
  // -----------------------------

  const isAuthenticated = () => {
    if (typeof window === "undefined") {
      return false;
    }

    const authData = localStorage.getItem("auth");

    if (!authData) {
      return false;
    }

    try {
      const auth = JSON.parse(authData);

      return auth.isAuthenticated === true;
    } catch {
      localStorage.removeItem("auth");
      return false;
    }
  };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };

  return {
    login,
    logout,
    isAuthenticated,
    loading,
    error,
    handleSubmit,
    email,
    password,
    setEmail, 
    setPassword,
    showPassword,
    setShowPassword,
    router
  };
};