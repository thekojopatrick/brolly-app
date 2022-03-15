import Link from 'next/link'

const Button = ({ href = '/',text }) => {
  return (
    <Link href={href}>
      <a className='btn-primary'>{text}</a>
    </Link>
  )
}

export default Button
