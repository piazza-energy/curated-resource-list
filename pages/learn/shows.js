import Layout from '../../components/layout';

import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Page = ({ shows }) => (
  <Layout>
    <h1>Na na na na na na na na na na na na na na na...</h1>
    <ul>
      {shows.map(show => (
        <li key={show.id}>
          <Link href="/learn/p/[id]" as={`/learn/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export async function getStaticProps() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    props: {
      shows: data.map(entry => entry.show)
  }};
};

export default Page;
