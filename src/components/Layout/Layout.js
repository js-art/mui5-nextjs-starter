import React from 'react'
import Head from 'next/head'

function Layout({ children }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>

                {children}
            </main>

            <footer >

            </footer>
        </div>
    )
}

export default Layout
