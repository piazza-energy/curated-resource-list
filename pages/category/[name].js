import { getCategories } from '../../scripts/categories';

import Layout from '../../components/layout';
import BookmarkLink from '../../components/bookmark-link'

const Page = ({ params, elements }) => {

  return (
    <Layout>
      <div className="pure-u-1">
        <h1>Energy Piazza - {capitalize(params.name)}</h1>
      </div>
      {elements.map((elem, i) => <BookmarkLink key={i} {...elem} />)}
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = getCategories();
  const paths = categories.map(category => { return { params: { name: category } }});
  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({ params }) {

  const data = await import(`../../public/data/category/${params.name}.json`);
  const elements = JSON.parse(JSON.stringify(data)).data;

  return {
    props: {
      params,
      elements,
  }};
};

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default Page;
