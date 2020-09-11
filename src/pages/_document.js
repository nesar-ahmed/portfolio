import Document, { Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="A portfolio website" />
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <style>{`
                        body {
                            font-family: 'Roboto', sans-serif;
                        }
                    `}
                    </style>
                </body>
            </html>
        )
    }
}

export default MyDocument;