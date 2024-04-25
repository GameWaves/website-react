import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import AlternativeDownload from "@site/src/components/AlternativeDownload";
import downloadLinksConfig from './downloadLinks.json'

function RecommandedDownload() {
    // Show the good os download link based on the user's os
    const os: string = getOs();
    let downloadLink: string;
    let osFriendly:string;
    let downloadLinkText: string;
    let downloadText: string;

    switch (os) {
        case 'Win32':
            downloadLink = downloadLinksConfig.win
            osFriendly = "Windows";
            downloadText = "We are so many that we have detected your operating system and we are offering you a direct download for your Windows"
            downloadLinkText = "⬇️ Download for Windows";
            break;
        case 'MacIntel':
            downloadLink = downloadLinksConfig.mac
            osFriendly = "MacOS";
            downloadText = "We are so many that we have detected your operating system and we are offering you a direct download for your MacOS"
            downloadLinkText = "⬇️ Download for MacOS";
            break;
        case 'X11':
            downloadLink = downloadLinksConfig.linux
            osFriendly = "Linux";
            downloadText = "We are so many that we have detected your operating system and we are offering you a direct download for your Linux"
            downloadLinkText = "⬇️ Download for Linux";
            break;
        case 'Linux x86_64':
            downloadLink = downloadLinksConfig.linux
            osFriendly = "Linux";
            downloadText = "We are so many that we have detected your operating system and we are offering you a direct download for your Linux"
            downloadLinkText = "⬇️ Download for Linux";
            break;
        default:
            downloadLink = "#alternative-download"
            osFriendly = ""
            downloadText = "Oups, we couldn't detect your OS. Please choose your OS below."
            downloadLinkText = "⬇️ Choose your OS below"

    }
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
        <section className={clsx(styles.downloadSection, styles.section)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    Let's get started !
                </Heading>
                <p>
                    {downloadText}
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to={downloadLink}>
                        {downloadLinkText}
                    </Link>
                </div>
            </div>
        </section>
            </div>
        </header>
    );
}

export default function Download(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
        title={"Download"}
        description={"Download our latest release"}>
            <RecommandedDownload />
            <main>
                <div className="text--center padding-horiz--md">
                    <section id={"alternative-download"}>
                    <Heading as="h2">Or choose your OS</Heading>
                    <AlternativeDownload/>
                    </section>
                </div>
            </main>
        </Layout>
);
}

const getOs = () => {
    const os = ['Windows', 'Mac', 'Linux']; // add your OS values
    console.log("Hey, I'm running on ", (global as any).window?.navigator.platform);
    // os.find(v => ((global as any).window?.navigator.platform.indexOf(v) >= 0));
    return (global as any).window?.navigator.platform;
}