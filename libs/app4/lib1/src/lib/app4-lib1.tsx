import styles from './app4-lib1.module.css';

/* eslint-disable-next-line */
export interface App4Lib1Props {}

export function App4Lib1(props: App4Lib1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to App4Lib1!</h1>
    </div>
  );
}

export default App4Lib1;
