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
    const os: string = getOs();
    let downloadLink: string;
    let osFriendly:string;

    switch (os) {
        case 'Win32':
            downloadLink = "https://nightly.link/GameWaves/OutOfTheHole/workflows/build-staging/develop/Client%20DEV%20-%20Windows.zip";
            osFriendly = "Windows";
            break;
        case 'MacIntel':
            downloadLink = "https://example.com/macos"
            osFriendly = "MacOS";
            break;
        case 'X11':
            downloadLink = "https://example.com/linux"
            osFriendly = "Linux";
            break;

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
        <Layout
        title={"Download"}
        description={"Download our latest release"}>
            <RecommandedDownload />
            <main>
                <div className="text--center padding-horiz--md">
                    <Heading as="h2">Or choose your OS</Heading>
                    <AlternativeDownload/>
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