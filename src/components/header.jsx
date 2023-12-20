import Link from "next/link";

const nav = [
  {
    href: "/",
    title: "index"
  },
  {
    href: "./mypage",
    title: "mypage"
  }
]

export function Header() {
  return (
    <header>
      <ul>
        {nav.map((item) => {
          return (
            <li key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}