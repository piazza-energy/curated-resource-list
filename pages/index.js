import { getCategories, getAllCatsData, getAllTagsData } from '../utils/cats-tags';

import Layout from '../components/layout';
import { CategoryLink, TagLink } from '../components/nav-link'
import SearchEngine from '../components/search-engine';


const Page = ({ categories, bookmarks, tags }) => (
  <Layout>
    <div className="pure-u-1">
      <h1>Energy Piazza - Curated Resources List</h1>
      <p>
        This is a list of categorised resources for the sustainable energy sector.
      </p>
    </div>
    <div className="pure-u-1 pure-u-lg-1-2">
      <h2>Categories:</h2>
      <ul>
        {categories.map((cat, i) => <li key={`cat_${i}`}>
          <CategoryLink name={cat} />
        </li>)}
      </ul>
    </div>
    <div className="pure-u-1 pure-u-lg-1-2">
      <h2>Tags</h2>
      {Object.keys(tags).map((tag, i) => <span key={`tag_${i}`}>
        <TagLink name={tag} count={tags[tag].length} />
      </span>)}
    </div>
    <div className="pure-u-1">
      <SearchEngine bookmarks={bookmarks} />
    </div>
  </Layout>
)

export async function getStaticProps() {
  const categories = getCategories();
  const bookmarks = getAllCatsData(categories);
  const tags = getAllTagsData(bookmarks);
  const empty = {};
  return {
    props: {
      categories,
      bookmarks,
      tags,
  }};
};

export default Page;
