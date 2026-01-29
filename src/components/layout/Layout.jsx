import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <AppBar />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
