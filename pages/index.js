import { useState } from 'react';
import { Button } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import styles from './home.module.scss';

export default function Home() {
  const btns = [
    {
      val: 1,
      task: 'input',
    },
    {
      val: 2,
      task: 'input',
    },
    {
      val: 3,
      task: 'input',
    },
    {
      val: 4,
      task: 'input',
    },
    {
      val: 5,
      task: 'input',
    },
    {
      val: 6,
      task: 'input',
    },
    {
      val: 7,
      task: 'input',
    },
    {
      val: 8,
      task: 'input',
    },
    {
      val: 9,
      task: 'input',
    },
    {
      val: 0,
      task: 'input',
    },
    {
      val: '+',
      task: 'add',
    },
    {
      val: '✖',
      task: 'multiply',
    },
    {
      val: '=',
      task: 'equals',
    },
  ];

  const [output, setOutput] = useState(0);
  const [input, setInput] = useState(0);
  const [tempInput, setTempInput] = useState(0);
  const [operation, setOperation] = useState(null);
  const [calculated, setCalculated] = useState(false);

  const operations = {
    add: (v1, v2) => (v1 + v2),
    multiply: (v1, v2) => (v1 * v2),
  }

  const handleOperations = task => {
    if (input && tempInput && operation) {
      const outputVal = operations[operation](input, parseFloat(tempInput));
      setInput(outputVal);
      setOperation(operation);
      setOutput(outputVal);
    } else if (tempInput) {
      setInput(tempInput);
      setOperation(task);
      setOutput(0);
    }
    setCalculated(true);
  }

  const handleInputs = val => {
    let outputVal = `${calculated ? '' : output}${val}`;
    if (outputVal.length > 1 && outputVal[0] == 0) {
      outputVal = parseFloat(outputVal);
    }
    setTempInput(parseFloat(outputVal));
    setOutput(outputVal);
    setCalculated(false);
  }

  const restartCalculations = () => {
    setOperation(null);
    setTempInput(0);
    setInput(0);
  }

  const handleCalculations = ({val, task}) => {
    switch (task) {
      case 'input':
        handleInputs(val);
        break;
      case 'add':
        handleOperations(task);
        break;
      case 'multiply':
        handleOperations(task);
        break;
      case 'equals':
        if (operation) {
          handleOperations(task);
          restartCalculations();
        }
        break;
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
          {btns.map((btn, index) => (
            <Button
              className={styles.numKeys}
              variant={btn.task == 'input' ? 'outlined' : 'contained'}
              color="primary"
              onClick={() => handleCalculations(btn)}
              key={index}
            >
              {btn.val}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
