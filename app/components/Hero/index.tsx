import styles from "./hero.module.css";

import { ReactNode } from "react";

export const Hero = ({ children, stylingContainer }: { children: ReactNode, stylingContainer?: React.CSSProperties }) => {
  return (
    <div className={styles.component_wrapper} style={stylingContainer}>
      <div className={styles.container}>
        {children}
        <div className={styles.circle_container}>
          <div className={styles.circle} />
        </div>
      </div>
    </div>
  );
};
