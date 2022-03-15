import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  const Logo = () => (
    <Image src="/img/logo.svg" alt="Brolly" width={94} height={32} />
  )

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
