import Image from 'next/image'
import Button from '../../components/Button'
import Layout from '../../components/Layout'

const index = () => {
  return (
    <Layout mainStyle="container mx-auto max-w-7xl px-4 sm:px-6 text-center min-h-screen flex flex-col place-content-center">
      <section className="Error-section flex flex-col place-items-center py-24">
        <h1 className="title-font lg:text-7xl md:text-5xl text-4xl font-bold mb-4">
          Uh-oh
          <br /> Something is broken. Rest assured that we&apos;ll fix it.
        </h1>
        <Image
          src="/img/fixing-bug.svg"
          alt="fixing Bug"
          width={500}
          height={500}
        />
        <h2 className="title-font lg:text-4xl md:text-3xl text-2xl font-bold mb-4">
          Please help us by sending a screenshot of this page to
        </h2>
        <a
          href="mailto:teamwork@brolly.africa"
          className="title-font lg:text-4xl md:text-3xl text-2xl font-bold mb-4 text-primary"
        >
          teamwork@brolly.africa
        </a>
        <Button text="Go to Home try reloading" />
      </section>
    </Layout>
  )
}

export default index
