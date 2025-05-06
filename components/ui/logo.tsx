import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.png'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="SolCypher">
      <Image className="max-w-none" src={LogoImg} width={64} height={64} priority alt="SolCypher" />
    </Link>
  )
}