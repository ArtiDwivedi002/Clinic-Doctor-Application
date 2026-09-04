import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Profile } from "@/src/types/(auth)/auth.type";

export const useProfileState = () => {
 

const defaultProfile: Profile = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
};

     const router = useRouter();
    
      const [profile, setProfile] = useState<Profile>(defaultProfile);
      const [checkingAuth, setCheckingAuth] = useState(true);
      const [saved, setSaved] = useState(false);
    
      useEffect(() => {
        const authData = localStorage.getItem("auth");
    
        if (!authData) {
          router.replace("/login");
          return;
        }
    
        try {
          const auth = JSON.parse(authData);
    
          if (!auth.isAuthenticated) {
            localStorage.removeItem("auth");
            router.replace("/login");
            return;
          }
    
          const savedProfile = localStorage.getItem("profile");
    
          if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
          } else {
            setProfile({
              ...defaultProfile,
              email: auth.email || "",
            });
          }
    
          setCheckingAuth(false);
        } catch {
          localStorage.removeItem("auth");
          router.replace("/login");
        }
      }, [router]);
    
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
      ) => {
        const { name, value } = e.target;
    
        setProfile((prev) => ({
          ...prev,
          [name]: value,
        }));
    
        setSaved(false);
      };
    
      const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        localStorage.setItem(
          "profile",
          JSON.stringify(profile)
        );
    
        setSaved(true);
      };
    
      const handleLogout = () => {
        localStorage.removeItem("auth");
        router.replace("/login");
      };
      return {
        checkingAuth,
        handleLogout,
        profile,
        handleChange,
        handleSave,
        saved,
      }
    }