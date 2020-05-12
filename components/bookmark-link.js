import styles from './bookmark-link.module.css'

const BookmarkLink = ({ url, title, description }) => (
  <div className="pure-u-1">
    <div className={styles.item}>
      <h3><a href={url}>{title}</a></h3>
      <p dangerouslySetInnerHTML={{__html: description}} />
    </div>
  </div>
);

export default BookmarkLink;
