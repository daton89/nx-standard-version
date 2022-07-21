import styles from './shared-ft-carousel.module.css';

/* eslint-disable-next-line */
export interface SharedFtCarouselProps {}

export function SharedFtCarousel(props: SharedFtCarouselProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedFtCarousel!</h1>
    </div>
  );
}

export default SharedFtCarousel;
