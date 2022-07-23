import { FC, ReactNode, useEffect, useState } from 'react';
import styles from './shared-ft-carousel.module.css';

export interface CarouselProps {
  children: ReactNode[];
  onSlideChange?: (i: number) => void;
}

export const Carousel: FC<CarouselProps> = (props) => {
  const { children, onSlideChange } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => {
        if (onSlideChange) onSlideChange(prevState + 1);
        return prevState + 1;
      });
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => {
        if (onSlideChange) onSlideChange(prevState - 1);
        return prevState - 1;
      });
    }
  };

  return (
    <div className={styles['carousel-container']}>
      <div className={styles['carousel-wrapper']}>
        {currentIndex > 0 && (
          <button onClick={prev} className={styles['left-arrow']}>
            &lt;
          </button>
        )}
        <div className={styles['carousel-content-wrapper']}>
          <div
            className={styles['carousel-content']}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>
        {currentIndex < length - 1 && (
          <button onClick={next} className={styles['right-arrow']}>
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
