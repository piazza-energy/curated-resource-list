import Link from 'next/link';

const CategoryLink = props => (
  <li>
    <Link href="/category/[name]" as={`/category/${props.name}`}>
      <a>{props.name}</a>
    </Link>
  </li>
);

export default CategoryLink;
