import Link from './next-link';

const CategoryLink = ({ name }) => (
  <Link href="/category/[name]" as={`/category/${name}`}>
    <a>{name}</a>
  </Link>
);

export default CategoryLink;
