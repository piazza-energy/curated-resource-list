import styles from './bookmark-link.module.css'

const BookmarkLink = props => (
  <div className="pure-u-1">
    <div className={styles.item}>
      <h3><a href={props.url}>{props.title}</a></h3>
      <p dangerouslySetInnerHTML={{__html: props.description}} />
    </div>
  </div>
);

export default BookmarkLink;
