import Image from "next/image";
const SNSITEMS = [
    {
        href: "https://twitter.com/PeaceWingH",
        title: "X",
        src: "/icon_x.svg"
    },
    {
        href: "https://www.instagram.com/peacewinghiroshima/?hl=ja",
        title: "Instagram",
        src: "/icon_instagram.svg"
    }
];

export function SnsLinks(props) {
  return (
    <div className="snsIcons">
      {SNSITEMS.map((item) => {
        return (
          <a href={item.href} target="_blank" rel="nofollow noopener" key={item.alt}>
            <Image
            src={item.src}
            alt={item.alt}
            width={20}
            height={20}
            />
          </a>
        );
      })}
    </div>
  );
}