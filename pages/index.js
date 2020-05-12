import { getCategories } from '../scripts/categories';

import Layout from '../components/layout';
import CategoryLink from '../components/category-link'
import SearchEngine from '../components/search-engine';


const Page = ({ categories, bookmarks }) => (
  <Layout>
    <div className="pure-u-1">
      <h1>Energy Piazza</h1>
      <h2>Curated Resources List</h2>
      <p>
        This is a list of categorised resources for the sustainable energy sector.
      </p>
      <p>All links in this website falling in one of the following categories</p>
      <ul>
        {categories.map((name, i) => <li key={i}>
          <CategoryLink name={name} />
        </li>)}
      </ul>
    </div>
    <div className="pure-u-1">
      <SearchEngine bookmarks={bookmarks} />
    </div>
  </Layout>
)

export async function getStaticProps() {
  const categories = getCategories();
  const bookmarks = {};
  for (const cat of categories) {
    const data = await import(`../public/data/category/${cat}.json`);
    bookmarks[cat] = JSON.parse(JSON.stringify(data)).data;
  }

  return {
    props: {
      categories,
      bookmarks
  }};
};

export default Page;
