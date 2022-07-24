import styles from './app2-lib1.module.css';

/* eslint-disable-next-line */
export interface App2Lib1Props {}

export function App2Lib1(props: App2Lib1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to App2Lib1!</h1>
    </div>
  );
}

export default App2Lib1;
