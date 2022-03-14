/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const LinkIcon = ({ name }) => (
    <img src={`/img/${name}-icon.svg`} alt={name} />
  )

  const FooterLink = ({ href = '', text, icon, target, itemStart }) => (
    <Link href={href}>
      <a
        target={target}
        className={`hover:text-yellow-400 flex ${
          itemStart ? 'items-start' : 'items-center'
        } gap-2 `}
      >
        {icon && <LinkIcon name={icon} />}
        {text}
      </a>
    </Link>
  )
  const SocialLink = ({ href = '', icon }) => (
    <Link href={href}>
      <a
        target={'_blank'}
        className={`hover:bg-yellow-400 w-6 h-6 bg-blend-multiply bg-white bg-opacity-10 flex items-center justify-center rounded-full`}
      >
        <LinkIcon name={icon} />
      </a>
    </Link>
  )

  return (
    <footer className="text-white body-font bg-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="lg:w-1/3 md:w-1/2 w-full space-y-6 flex-shrink-0 md:mx-0 mx-auto text-left md:mt-0 mt-10">
          <h2 className="title-font font-medium text-lg">Reach us</h2>
          <nav className="list-none mb-10 space-y-6">
            <li>
              <FooterLink
                href="mailto:hello@brolly.africa"
                icon="Email"
                text="hello@brolly.africa"
              />
            </li>
            <li>
              <FooterLink
                href="tel:+233 201 335 141"
                icon="Phone"
                text="+233 201 335 141"
              />
            </li>
            <li className="lg:w-4/5">
              <FooterLink
                href="https://goo.gl/maps/8M4u89m84QCk3HnaA"
                icon="Location"
                target={'_target'}
                itemStart={true}
                text="No. 19 Kofi Annan Street, Airport Residential Area. Accra, Ghana"
              />
            </li>
          </nav>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 text-left order-first">
          <div className="lg:w-1/2 w-full">
            <h2 className="title-font font-medium tracking-widest text-sm mb-3">
              <Image
                src="/img/brolly.svg"
                alt="Brolly"
                width={77}
                height={26}
              />
            </h2>
            <nav className="list-none mb-10 space-y-4">
              <li className="flex flex-wrap gap-4 items-center">
                <FooterLink href="/who-we-are" text="Who We Are" />
                <FooterLink href="/faq" text="FAQs" />
              </li>
              <li className="flex flex-wrap gap-4 items-center">
                <FooterLink href="/policy" text="Privacy Policy" />
                <FooterLink href="/terms" text="Terms & Conditions" />
                <FooterLink href="/cookies" text="Cookies Policy" />
              </li>
              <li className='my-6 text-gray-300'>© 2021 Brolly. All rights reserved</li>
              <li className="flex flex-wrap gap-4 items-center">
                <SocialLink
                  href="/instagram"
                  icon={'instagram'}
                  iconUrl="/img/instagram-icon.svg"
                />
                <SocialLink
                  href="/twitter"
                  icon={'twitter'}
                  iconUrl="/img/instagram-icon.svg"
                />
                <SocialLink
                  href="/instagram"
                  icon={'instagram'}
                  iconUrl="/img/instagram-icon.svg"
                />
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
