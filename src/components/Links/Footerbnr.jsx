import Image from "next/image";
import styles from "./Links.module.css";
const BNRITEMS = [
    {
        href: "https://www.city.hiroshima.lg.jp/",
        description: "設置者",
        src: "/city-hiroshima.png",
        title: "広島市公式ホームページ",
        imgWidth: 138,
        imgHeight: 45,
    },
    {
        href: "https://www.sanfrecce.co.jp/",
        description: "指定管理者",
        src: "/sanfrecce-hiroshima.png",
        title: "サンフレッチェ広島 オフィシャルサイト",
        imgWidth: 150,
        imgHeight: 45,
    },
    {
        href: "https://www.edion.co.jp/",
        description: "ネーミングライツパートナー",
        src: "/edion.png",
        title: "家電と暮らしのエディオン",
        imgWidth: 120,
        imgHeight: 48,
    }
];

export function Footerbnr(props) {
  return (
    <ul className={styles.bnrLink_txtList}>
      {BNRITEMS.map((item) => {
        return (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="nofollow noopener" className={styles.blankLink_txtimg}>
                <span className="fs14 medium">{item.description}</span>
                <Image
                src={item.src}
                alt={item.title}
                width={item.imgWidth}
                height={item.imgHeight}
                />
            </a>
          </li>
        );
      })}
    </ul>
  );
}