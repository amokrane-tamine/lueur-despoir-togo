import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <Image
          src="/logo-light.svg"
          alt="Lueur d'Espoir Togo"
          width={160}
          height={68}
          priority
        />
      </Link>
      <ul className="nav-links">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/a-propos">À propos</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <Link href="/nous-aider" className="nav-cta">Nous aider</Link>
    </nav>
  )
}