import styles from './app3-lib1.module.css';

/* eslint-disable-next-line */
export interface App3Lib1Props {}

export function App3Lib1(props: App3Lib1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to App3Lib1!</h1>
    </div>
  );
}

export default App3Lib1;
