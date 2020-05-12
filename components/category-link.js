import Link from 'next/link';

const CategoryLink = props => (
  <Link href="/category/[name]" as={`/category/${props.name}`}>
    <a>{props.name}</a>
  </Link>
);

export default CategoryLink;
