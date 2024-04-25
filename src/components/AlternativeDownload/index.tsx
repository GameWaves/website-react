import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";
import downloadLinksConfig from '../../pages/downloadLinks.json'


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
        downloadLink: downloadLinksConfig.mac
    },
    {
        title: 'Windows',
        Svg: require('@site/static/img/Windows.svg').default,
        description: (
            <>
                A game better coded than the OS. Sorry Microsoft
            </>
        ),
        downloadLink: downloadLinksConfig.win
    },
    {
        title: 'Linux',
        Svg: require('@site/static/img/Linux.svg').default,
        description: (
            <>
                Warning to bearded men, we are thinking of you.
            </>
        ),
        downloadLink: downloadLinksConfig.linux
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
