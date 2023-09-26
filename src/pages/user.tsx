import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../styles/layout.module.css";

export default function Login(props: any) {
  const [profile, setProfile] = useState();
  const router = useRouter();
  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const res = fetch("http://localhost:3000/users/", {
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if ((await res).ok) {
      const json = await (await res).json();
      setProfile(json);
    } else {
      router.push("/register");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    router.push("/");
  }
  return (
    <div className={styles.layout}>
      <div className={styles.nav}>
        <p>
          <button onClick={logout}>Log out</button>
        </p>
      </div>
      {props.children}
    </div>
  );
}
