"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./AuthLinks.module.css";
import { useSession, signOut } from "next-auth/react";

const AuthLinks = () => {
  const { status } = useSession();

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      {status === "authenticated" ? (
        <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-6 md:space-y-0">
          <Link href="/write" className="hover:underline">
            Nuevo post
          </Link>
          <span onClick={handleLogout} className="hover:underline">
            Cerrar sesión
          </span>
        </div>
      ) : (
        <>
          <Link href="/login" className="btn-primary">
            Ingresar
          </Link>
        </>
      )}
    </>
  );
};

export default AuthLinks;
