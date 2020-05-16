import { TagLink } from './nav-link';
import styles from './bookmark-link.module.css';


const BookmarkLink = ({ url, title, description, tags }) => {
  const regex = /\[(.*?)\]\((.*?)\)/g
  const htmlDesc = description.replace(regex, '<a href="$2">$1</a>')
  const tagSection = tags ?
    <p>
      {tags.map((tag, i) => <span key={`tag_${i}`}>
        <TagLink name={tag} />
      </span>)}
    </p> :
    '';

    return (
    <div className="pure-u-1">
      <div className={styles.item}>
        <h3><a href={url}>{title}</a></h3>
        <p dangerouslySetInnerHTML={{__html: htmlDesc}} />
        {tagSection}
      </div>
    </div>
  );
}

export default BookmarkLink;
