import classNames from 'classnames/bind';
import Link from './next-link';

import styles from './header.module.css';

const Header = () => (
  <div className={styles.header}>
    <div className={classNames('pure-menu', 'pure-menu-horizontal', 'pure-menu-fixed', styles.header__content)}>
      <div className={styles.wrapper}>
        <Link href="/">
          <a className="pure-menu-heading">Home</a>
        </Link>

        <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <Link href="/about">
                <a className="pure-menu-link">About</a>
              </Link>
            </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header;
