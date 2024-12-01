import Head from 'next/head'

export default function Header(preds){
    return(
        <Head>
            <title>{preds.title}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        </Head>
    )
}