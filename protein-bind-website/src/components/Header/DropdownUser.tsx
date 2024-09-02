"use client";
import { useState, useEffect } from "react";
import { useUser } from "@/app/context/UserContext";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChevronDown, LogOut, Settings, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ClickOutside from "@/components/ClickOutside";
const DropdownUser = () => {
  return <div className="text-black">DropdownUser</div>;
};
export default DropdownUser;
