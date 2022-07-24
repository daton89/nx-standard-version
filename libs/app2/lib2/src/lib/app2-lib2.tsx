import styles from './app2-lib2.module.css';

/* eslint-disable-next-line */
export interface App2Lib2Props {}

export function App2Lib2(props: App2Lib2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to App2Lib2!</h1>
    </div>
  );
}

export default App2Lib2;
