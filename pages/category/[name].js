import { getCategories, getCatData } from '../../utils/cats-tags';
import { capitalize } from '../../utils/string-utils';

import Layout from '../../components/layout';
import BookmarkLink from '../../components/bookmark-link'

const Page = ({ params, elements }) => (
  <Layout>
    <div className="pure-u-1">
      <h1>Energy Piazza - {capitalize(params.name)}</h1>
    </div>
    {elements.map((elem, i) => <BookmarkLink key={i} {...elem} />)}
  </Layout>
)

export async function getStaticPaths() {
  const categories = getCategories();
  const paths = categories.map(category => { return { params: { name: category } }});
  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({ params }) {
  const elements = getCatData(params.name);
  return {
    props: {
      params,
      elements,
  }};
};

export default Page;
