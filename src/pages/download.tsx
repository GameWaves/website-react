import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import AlternativeDownload from "@site/src/components/AlternativeDownload";


function RecommandedDownload() {
    // Show the good os download link based on the user's os
    const os = getOs();
    const downloadLink = os === "win32" ? "https://example.com/windows" : "https://example.com/macos";
    const osFriendly = os === "win32" ? "Windows" : "Mac";
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
        <section className={clsx(styles.downloadSection, styles.section)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    Let's get started !
                </Heading>
                <p>
                    We are so many that we have detected your operating system and we are offering you a direct download for your {osFriendly}.
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to={downloadLink}>
                        ⬇️ Download for {osFriendly}
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
        <Layout>
            <RecommandedDownload />
            <main>
                <div className="text--center padding-horiz--md">
                    <Heading as="h2">Or choose your OS (If we've done our job badly) </Heading>
                    <AlternativeDownload/>
                </div>
            </main>
        </Layout>
);
}

const getOs = () => {
    const os = ['Windows', 'Mac', 'Linux']; // add your OS values
    console.log("Hey, I'm running on ", (global as any).window?.navigator.platform);
    return os.find(v => ((global as any).window?.navigator.platform.indexOf(v) >= 0));
}