// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { Carousel } from '@nx-standard-version/shared-carousel-ui-carousel';

export function App() {
  return (
    <>
      <h1>home</h1>
      <Carousel>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </Carousel>
    </>
  );
}

export default App;
