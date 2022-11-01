import React, { FC } from "react";
import styles from "./App.module.css";
import "moment/locale/fi";
import AnimatedRoutes from "./components/UI/AnimatedRoutes/AnimatedRoutes";
import MainNavigation from "./components/UI/MainNavigation/MainNavigation";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <MainNavigation />
      <AnimatedRoutes />
    </div>
  );
};

export default App;
