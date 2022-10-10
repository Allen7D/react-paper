import styles from "./index.less";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <a
          className={styles["App-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React App
        </a>
      </header>
    </div>
  );
}

export default App;
