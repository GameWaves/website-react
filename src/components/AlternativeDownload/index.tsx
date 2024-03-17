import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    downloadLink: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'MacOS',
        Svg: require('@site/static/img/Apple.svg').default,
        description: (
            <>
                One must believe that there are games for Mac.
            </>
        ),
        downloadLink: "https://github.com/GameWaves/OutOfTheHole/releases/download/v0.0.1/OutOfTheHole.dmg"
    },
    {
        title: 'Windows',
        Svg: require('@site/static/img/Windows.svg').default,
        description: (
            <>
                A game better coded than the OS. Sorry Microsoft
            </>
        ),
        downloadLink: "https://nightly.link/GameWaves/OutOfTheHole/workflows/build-staging/develop/Client%20DEV%20-%20Windows.zip"
    },
    {
        title: 'Linux',
        Svg: require('@site/static/img/Linux.svg').default,
        description: (
            <>
                Warning to bearded men, we are thinking of you.
            </>
        ),
        downloadLink: "https://nightly.link/GameWaves/OutOfTheHole/workflows/build-staging/develop/Client%20DEV%20-%20Linux.zip"
    },
];

function Feature({title, Svg, description, downloadLink}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>

            <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to={downloadLink}>
                    ⬇️ Download for {title}
                </Link>
            </div>
            </div>
        </div>
    );
}

export default function AlternativeDownload(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
