import Layout from '../components/layout';

import Link from 'next/link';

const CategoryLink = props => (
  <li>
    <Link href="/category/[name]" as={`/category/${props.name}`}>
      <a>{props.name}</a>
    </Link>
  </li>
);

const Page = () => (
  <Layout>
    <h1>Bookmark manager</h1>
    <p>All links in this website falling in one of the following categories</p>
    <ul>
      <CategoryLink name="software" />
      <CategoryLink name="hardware" />
      <CategoryLink name="business" />
    </ul>
  </Layout>
)

export default Page;
