import Link from "next/link";
import Image from "next/image";
import logo_epwh from "../../../public/logo_epwh.svg";
import styles from "./Header.module.css";
const nav = [
  {
    href: "/",
    title: "index"
  },
  {
    href: "/about",
    title: "about"
  }
]

export function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.headerCnt}>
            <h1 className={styles.logo}>
              <Link href="/">
              <Image
                  src={logo_epwh}
                  alt="エディオンピースウイング広島"
                  sizes="(max-width: 768px) 125 40, 155.5 50"
                  className="flex-1 w-full h-auto object-cover"
                />
              </Link>
            </h1>
            <ul>
              {nav.map((item) => {
                return (
                  <li key={item.title}>
                    <Link href={item.href} key={item.href}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
        </div>
    </header>
  );
}