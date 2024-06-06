import Image from "next/image";
import Link from 'next/link';

export function NavMenu() {
    return (
        <div className="w-26 h-[102px] flex-col justify-start items-end gap-[3px] inline-flex">
            <div className="text-right text-black text-sm font-semibold font-['Maven Pro'] hover:text-[16px]">Collections</div>
            <Link href={"/qube/installations"}><div className="text-black text-sm font-semibold font-['Maven Pro'] hover:text-[16px]">Installations</div></Link>
            <div className="text-black text-sm font-semibold font-['Maven Pro'] hover:text-[16px]">Blogs</div>
            <div className="text-black text-sm font-semibold font-['Maven Pro'] hover:text-[16px]">Where to Buy</div>
            <div className="text-black text-sm font-semibold font-['Maven Pro'] hover:text-[16px]">About</div>
        </div>
    );
}

export function TitleDesc() {
    return (
        <div className="w-[601px] flex-row justify-between gap-40 items-end inline-flex">
            <div className="w-full text-black text-[65px] font-normal font-['Maven Pro'] leading-[64.04px]">STREET<br />URBAN<br />LIVING</div>
            <div className="w-full h-full text-black text-sm font-normal text-justify font-['Maven Pro'] [text-justify:inter-word] flex flex-col justify-end leading-tight tracking-tight">Unique and functional street and city furniture that will enhance the beauty and functionality of your public spaces. Learn more about our services and to schedule a consultation with one of our experienced designers.</div>
        </div>)
}

export function Logo() {
    return (
        <Image width={90} height={100} alt="hero image" src="/logo.svg" />
    )
}

export function HeroImg({ src }) {
    return (
        <div >
            <Image style={{ objectFit: "cover", objectPosition: "top center" }} fill={true} className="relative rounded-[14px]" alt="hero image" src={src} />
        </div>

    )
}