import { FC } from "react";
import styles from "./Home.module.css";
import Container from "../UI/Container/Container";

const Home: FC = () => {
  return (
    <Container className={styles.home}>
      <h1>Welcome to my Todo application</h1>
    </Container>
  );
};

export default Home;
