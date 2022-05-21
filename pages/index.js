import { useState } from 'react';
import { Button } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import styles from './home.module.scss';

export default function Home() {
  const btnNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [output, setOutput] = useState(0);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        <CalculateIcon />&nbsp;Calculator
      </h3>
      <div className={styles.calculator}>
        <div className={styles.output}>{output}</div>
        <div>
          {btnNumbers.map((num, index) => (
            <Button
              className={styles.numKeys}
              variant="contained"
              color="primary"
              onClick={() => setOutput(num)}
              key={index}
            >
              {num}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
