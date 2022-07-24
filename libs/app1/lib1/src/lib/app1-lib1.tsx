import styles from './app1-lib1.module.css';

/* eslint-disable-next-line */
export interface App1Lib1Props {}

export function App1Lib1(props: App1Lib1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to App1Lib1!</h1>
    </div>
  );
}

export default App1Lib1;
