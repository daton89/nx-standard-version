import styles from './app10-lib1.module.css';

/* eslint-disable-next-line */
export interface App10Lib1Props {}

export function App10Lib1(props: App10Lib1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to App10Lib1!</h1>
    </div>
  );
}

export default App10Lib1;
