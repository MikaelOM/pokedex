import Navbar from "./Navbar"
import Footer from "./Footer"

import Head from "next/head"

// import favicon from "../../public/favicon.ico"

export default function Layout({ children }: any) {
    return(
        <>
            <Head>
                <link rel="icon" sizes="16x16" href="/favicon_io/favicon.ico" />
                <title>PokeMax</title>
            </Head>
            <Navbar />
            <main className="main-container">
                {children}
            </main>
            <Footer />
        </>
    )
}