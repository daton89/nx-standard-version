import styles from './app1-lib2.module.css';

/* eslint-disable-next-line */
export interface App1Lib2Props {}

export function App1Lib2(props: App1Lib2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to App1Lib2!</h1>
    </div>
  );
}

export default App1Lib2;
