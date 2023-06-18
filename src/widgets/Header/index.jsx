import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="custom-container mt-5 d-flex justify-content-between">
      <b>ZIBBYCART</b>
      <div className="d-flex">
        <Link href="/" className="nav-link mx-2">Characters</Link>
        <Link href="/" className="nav-link mx-2">Barbie</Link>
        <Link href="/" className="nav-link mx-2">Cars</Link>
        <Link href="/" className="nav-link mx-2">Puzzles</Link>
        <Link href="/" className="nav-link mx-2">Education</Link>
      </div>
      <div className="d-flex">
        <Image alt="icon-search" height={24} width={24} className="mx-2" src="/images/icons8-search-64.png"/>
        <Image alt="icon-wishlist" height={24} width={24} className="mx-2" src="/images/icons8-love-48.png"/>
        <Image alt="icon-cart" height={24} width={24} className="mx-2" src="/images/icons8-bag-30.png"/>
      </div>
    </div>
  );
}
