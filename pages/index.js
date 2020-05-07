import { getCategories } from '../scripts/categories';

import Layout from '../components/layout';
import CategoryLink from '../components/category-link'


const Page = ({ categories }) => (
  <Layout>
    <h1>Energy Open Piazza</h1>
    <h2>Curated Resources List</h2>
    <p>
      This is a list of categorised resources for the sustainable energy sector.
    </p>
    <p>All links in this website falling in one of the following categories</p>
    <ul>
      {categories.map(name => <CategoryLink name={name} key={name} />)}
    </ul>
  </Layout>
)

export async function getStaticProps() {
  const categories = getCategories();

  return {
    props: {
      categories,
  }};
};

export default Page;
