"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import ComponentHeader from "@/components/ComponentHeader/ComponentHeader";
import { createUser } from "@/lib/actions/user.actions";
import {
  CameraIcon,
  LoaderCircle,
  LockIcon,
  MailIcon,
  UserIcon,
} from "lucide-react";
const Signup: React.FC = () => {
  const [user, setUser] = React.useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    photo: "",
    userBio: "",
  });
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [errors, setErrors] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div>
      <ComponentHeader pageName="Sign Up" />
    </div>
  );
};
export default Signup;
