import { FC } from "react";
import styles from "./Settings.module.css";
import Container from "../UI/Container/Container";

const Settings: FC = () => {
  return (
    <Container className={styles.settings}>
      <h1>Welcome to my Todo applications Settings page</h1>
    </Container>
  );
};

export default Settings;
