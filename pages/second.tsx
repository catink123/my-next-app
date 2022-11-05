import Head from "next/head";
import Link from "next/link";

export default function Second() {
  return (
    <>
      <Head>
        <title>Second Page</title>
      </Head>
      <main>
        <Link href="/">Back to main page!</Link>
      </main>
    </>
  )
}