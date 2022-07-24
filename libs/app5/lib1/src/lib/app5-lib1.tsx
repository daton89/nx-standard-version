import styles from './app5-lib1.module.css';

/* eslint-disable-next-line */
export interface App5Lib1Props {}

export function App5Lib1(props: App5Lib1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to App5Lib1!</h1>
    </div>
  );
}

export default App5Lib1;
