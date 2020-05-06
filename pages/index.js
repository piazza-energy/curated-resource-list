import Link from 'next/link';

import Layout from '../components/layout';
import { getCategories } from '../scripts/categories';

const CategoryLink = props => (
  <li>
    <Link href="/category/[name]" as={`/category/${props.name}`}>
      <a>{props.name}</a>
    </Link>
  </li>
);

const Page = ({ categories }) => (
  <Layout>
    <h1>Bookmark manager</h1>
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
