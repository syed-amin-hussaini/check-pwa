import loader from "@/styles/loader";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          
          <meta name="theme-color" content="#fff" />
          <style>{loader}</style>
        </Head>
        <body>
          <div id={"globalLoader"} style={{display:"flex"}}>
            <div className="loader">
              <div />
              <div />
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
