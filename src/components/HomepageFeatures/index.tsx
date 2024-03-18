import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Play with friends',
    Svg: require('@site/static/img/network.svg').default,
    description: (
      <>
          Playing alone is good, playing with your friend is even better.
          Out of the Hole is designed to be played with two people, so why not take advantage of it?
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/fun.svg').default,
    description: (
      <>
          The simple games are the best, in Out of the Hole, there are not 36,000 quests, you just have to get off the planet.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/opensource.svg').default,
    description: (
      <>
          We have the heart that the game be accessible to everyone, which is why we decided to make it open source.
          It is therefore free, and anyone can create their own version of the game.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
