import Link from './next-link';
import classNames from 'classnames/bind';

import styles from './nav-link.module.css'

export const CategoryLink = ({ name }) => (
  <Link href="/category/[name]" as={`/category/${name}`}>
    <a className={classNames(styles.link, styles.cat)}>{name}</a>
  </Link>
);

export const TagLink = ({ name, count = 0 }) => {
  const text = `${name} ${count > 0 ? `(${count})` : ''}`;
  return (
    <Link href="/tag/[name]" as={`/tag/${name}`}>
      <a className={classNames(styles.link, styles.tag)}>{text}</a>
    </Link>
  );
}
