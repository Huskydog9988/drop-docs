import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Flexible",
    description: (
      <>
        We support Linux, Windows, and macOS clients, and both x86 & ARM
        servers, for maximum compatibility between platforms.
      </>
    ),
  },
  {
    title: "Secure",
    description: (
      <>
        Drop lets you configure fine-grained permissions for clients, and API
        tokens. We also use cryptographic authentication for P2P and client
        communication.
      </>
    ),
  },
  {
    title: "Modern",
    description: (
      <>
        We to build refreshing and attractive UIs, while never compromising on
        UX.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
