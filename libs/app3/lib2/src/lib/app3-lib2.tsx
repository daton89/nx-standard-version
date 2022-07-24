import styles from './app3-lib2.module.css';

/* eslint-disable-next-line */
export interface App3Lib2Props {}

export function App3Lib2(props: App3Lib2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to App3Lib2!</h1>
    </div>
  );
}

export default App3Lib2;
