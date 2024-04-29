import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { SnsLinks } from "../Links/Snslinks";
import { Footerbnr } from "../Links/Footerbnr";
const blankLink = [
  {
    href: "https://hiroshima-stadiumpark.jp/",
    src: "/footer-img1.jpg",
    alt: "ひろしまスタジアムパーク-hiropa"
  },
  {
    href: "https://www.sanfrecce.co.jp/",
    src: "/footer-img2.jpg",
    alt: "サンフレッチェ広島"
  }
]

export function Footer() {
  return (
    <footer className={styles.footer}>
        <div className="container">
            <div className={`${styles.footer__inr} ${styles._1}`}>
                <div className={styles.ftrLogo}>
                    <Link href="/">
                    <Image
                        src="/logo_epwh.svg"
                        alt="エディオンピースウイング広島スタジアムツアー"
                        width={217.78}
                        height={70}
                        />
                    </Link>
                </div>
                <ul className={styles.blankLink_imgList}>
                    {blankLink.map((item) => {
                        return (
                        <li className={styles.blankLink_img} key={item.href}>
                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                <Image
                                src={item.src}
                                alt={item.alt}
                                width={300}
                                height={90}
                                />
                            </a>
                        </li>
                        );
                    })}
                </ul>
            </div>
            <div className={`${styles.footer__inr} ${styles._2}`}>
                <a href="https://hiroshima-stadiumpark.jp/peacewing/contact/" className="btn color3 short arrow" target="_blank" rel="noopener noreferrer">お問い合わせ</a>
                {/* <ul className="link_list">
                    <li className="text">
                        <a href="#" target="_blank" rel="noopener noreferrer">利用規約</a>
                    </li>
                    <li className="text">
                        <a href="#" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
                    </li>
                </ul> */}
            </div>
            <div className={styles.footer__inr_grid}>
                <div className={`${styles.pagetopArea} ${styles.pagetop}`}>
                    <a href="#" className={`${styles.pageTop} ${styles.roundArrow_btn}`} title="ページトップへ"></a>
                </div>
                {/* <SnsLinks /> */}
                <p className={styles.copy}>© 2024 EDION PEACE WING HIROSHIMA</p>
            </div>
        </div>
        <div className={styles.footer_bottom}>
            <Footerbnr />
        </div>
    </footer>
  );
}