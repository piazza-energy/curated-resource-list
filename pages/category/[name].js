import { getCategories } from '../../scripts/categories';

import Layout from '../../components/layout';
import BookmarkLink from '../../components/bookmark-link'

const listStyle = {
  padding: 0,
}

const Page = ({ params, elements }) => {

  return (
    <Layout>
      <h1>{params.name}</h1>
      <ul style={listStyle}>
        {elements.map(elem => <BookmarkLink {...elem} />)}
      </ul>
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


export default Page;
