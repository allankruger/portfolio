import styles from "./styles.module.css";

const Block = () => {
  return (
    <section className={styles.container}>
      <h1>Hi, I&apos;m Allan</h1>
      <span>
        a front-end developer focused on user experience and pixel perfect
        design translation.
      </span>

      <button className={styles.button}>Hire me</button>
    </section>
  );
};

export default Block;
