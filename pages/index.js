import Button from '../components/Button'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout mainStyle="container mx-auto max-w-7xl px-4 sm:px-6 text-center min-h-screen flex flex-col place-content-center">
      <section className="hero">
        <h1 className="title-font text-3xl font-medium mb-4">
          Welcome to Brolly
        </h1>
        <Button href="/404" text="Go to 404 page" />
      </section>
    </Layout>
  )
}
