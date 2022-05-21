import { Button } from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';
import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        <CalculateIcon />&nbsp;Calculator
      </h3>
      <div className={styles.calculator}>
        <div className={styles.output}>0</div>
        <div className={styles.numKeys}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log(1)}
          >
            1
          </Button>
        </div>
      </div>
    </div>
  )
}
