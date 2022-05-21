import { useState } from 'react';
import { Button } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import styles from './home.module.scss';

export default function Home() {
  const btnNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [output, setOutput] = useState(0);
  const [addition, setAddition] = useState([]);

  const handleInput = input => {
    var output = input;
    if (input.length > 1 && input[0] == 0) {
      output = input.substring(1);
    }
    setOutput(output);
  }

  const handleAddition = input => {
    setAddition([input]);
    setOutput(0);
  }

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
              variant="outlined"
              color="primary"
              onClick={() => handleInput(`${output}${num}`)}
              key={index}
            >
              {num}
            </Button>
          ))}
          <Button
            className={styles.numKeys}
            variant="contained"
            color="primary"
            onClick={() => handleAddition(parseInt(output))}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  )
}
