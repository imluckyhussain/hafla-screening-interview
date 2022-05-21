import { useState } from 'react';
import { Button } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import styles from './home.module.scss';

export default function Home() {
  const btnNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [calculated, setCalculated] = useState(false);
  const [output, setOutput] = useState(0);
  const [addition, setAddition] = useState([]);

  const handleInput = input => {
    var outputVal = `${output}${input}`;
    if (calculated) {
      outputVal = input;
      setCalculated(false);
    }
    if (outputVal.length > 1 && outputVal[0] == 0) {
      outputVal = outputVal.substring(1);
    }
    setOutput(outputVal);
  }

  const handleAddition = input => {
    setAddition([...addition, input]);
    setOutput(0);
  }

  const handleEquals = input => {
    if (addition.length) {
      setOutput(addition.reduce((val1, val2) => (val1 + val2)) + input);
      setAddition([]);
      setCalculated(true);
    }
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
              onClick={() => handleInput(num)}
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
          <Button
            className={styles.numKeys}
            variant="contained"
            color="primary"
            onClick={() => handleEquals(parseInt(output))}
          >
            =
          </Button>
        </div>
      </div>
    </div>
  )
}
