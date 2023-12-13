"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./AuthLinks.module.css";
import { useSession, signOut } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <>
      {status === "authenticated" ? (
        <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-6 md:space-y-0">
          <Link href="/write" className="hover:underline">
            Nuevo
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

      {/* <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div> */}

      {open && (
        <div className={styles.mobileMenu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          {status !== "authenticated" ? (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link} onClick={handleLogout}>
                Logout
              </span>
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
