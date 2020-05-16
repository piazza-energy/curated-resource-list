import { getCategories, getAllCatsData, getAllTagsData } from '../../utils/cats-tags';

import Layout from '../../components/layout';
import BookmarkLink from '../../components/bookmark-link'


const Page = ({ params, elements }) => (
  <Layout>
    <div className="pure-u-1">
      <h1>Energy Piazza - tag: {params.name}</h1>
    </div>
    {elements.map((elem, i) => <BookmarkLink key={i} {...elem} />)}
  </Layout>
)

export async function getStaticPaths() {
  const categories = getCategories();
  const bookmarks = getAllCatsData(categories);
  const bookmarksByTag = getAllTagsData(bookmarks);

  const paths = Object.keys(bookmarksByTag).map(tag => {
    return { params: { name: tag } }
  });

  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({ params }) {
  const categories = getCategories();
  const bookmarks = getAllCatsData(categories);
  const bookmarksByTag = getAllTagsData(bookmarks);

  const elements = bookmarksByTag[params.name];

  return {
    props: {
      params,
      elements,
  }};
};

export default Page;
