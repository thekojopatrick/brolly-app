import Link from 'next/link'

const Button = ({ href = '/', text, animate }) => {
  return (
    <Link href={href}>
      <a className={`btn-primary ${animate && 'hover:animate-shake'}`}>
        {text}
      </a>
    </Link>
  )
}

export default Button
