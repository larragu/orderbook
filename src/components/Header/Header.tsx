import styles from './Header.module.scss';
import Spread from '../Spread';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Order Book</h1>
      <div className={styles.spread}>
        <Spread />
      </div>
    </header>
  );
};

export default Header;
