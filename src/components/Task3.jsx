import React from 'react';
import styles from './Task3.module.scss';

const Task3 = () => {
  const [width, setWidth] = React.useState();
  const elementRef = React.useRef(0);

  React.useEffect(() => {
  setWidth(elementRef.current.clientWidth)
  }, [elementRef]);

  const handleButtonClick = () => {
    if (width <= 100) {
      elementRef.current.classList.add(styles.blue)
    } else {
      elementRef.current.classList.add(styles.green)
    }
  }

  return (
    <div>
      <button
      onClick={handleButtonClick}>
        Click</button>
      <div
        ref={elementRef}
        className={styles.box}
      >
        Box
      </div>
    </div>
  )

}


export default Task3;