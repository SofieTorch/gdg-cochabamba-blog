"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex flex-col ">
      <div className={styles.socialButton} onClick={() => signIn("google")}>
        Sign in with Google
      </div>
      <div className={styles.socialButton} onClick={() => signIn("github")}>
        Sign in with Github
      </div>
    </div>
  );
};

export default LoginPage;
