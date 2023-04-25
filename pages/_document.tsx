import Document, {Head, Html, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/images/Qlogo.png"/>
                    <meta name="title" content="QuirkySwirl.com: Experimental Project created with GPT-4"/>
                    <meta name="description" content="Quirkyswirl.com is personal project created using GPT-4 with TypingMind.com for fun and learning, providing powerful AI-driven content generation for general use such as travel, workout or meal planning,
            . Discover the potential of building your own tools with GPT-4 and other LLMs and prompt engineering"/>
                    <meta property="og:site_name" content="QuirkySwirl.com"/>

                    <meta property="og:title" content="QuirkySwirl.com: Experimental Project created with GPT-4"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content="Quirkyswirl.com is personal project created using TypingMind.com (GPT-4) by a noob!😁 "/>
                    <meta
                        name="twitter:description"
                        content="Personal project created using TypingMind.com (GPT-4) by a noob!😁 Fun to watch GPT-4 coding, then debugging, hallucinating, then coding😁."
                    />
                    <meta
                        property="og:image"
                        content="https://github.com/QuirkySwirl/quirkygpt/blob/main/public/images/Qlogo.png"
                    />
                    <meta
                        name="twitter:image"
                        content="https://github.com/QuirkySwirl/quirkygpt/blob/main/public/images/Qlogo.png"
                    />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
