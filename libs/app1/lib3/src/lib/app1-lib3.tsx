import styles from './app1-lib3.module.css';

/* eslint-disable-next-line */
export interface App1Lib3Props {}

export function App1Lib3(props: App1Lib3Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to App1Lib3!</h1>
    </div>
  );
}

export default App1Lib3;
