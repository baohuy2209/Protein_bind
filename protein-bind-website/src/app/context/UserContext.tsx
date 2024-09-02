import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useSession } from "next-auth/react";
import { getUserByEmail } from "@/lib/actions/user.actions";
