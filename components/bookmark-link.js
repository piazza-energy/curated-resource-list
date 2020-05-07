import styles from './bookmark-link.module.css'

const BookmarkLink = props => (
  <li
    className={styles.item}
    key={props.title}>
    <div>
      <h3><a href={props.url}>{props.title}</a></h3>
      <p dangerouslySetInnerHTML={{__html: props.description}} />
    </div>
  </li>
);

export default BookmarkLink;
