import Layout from '../../components/layout';
import { getCategories } from '../../scripts/categories';
import { Fragment } from 'react';


const Page = ({ params, elements }) => {
  console.log('params', params, 'elements', elements);

  return (
    <Layout>
      <h1>{params.name}</h1>
      <p>List of links</p>
      <ul>
        {elements.map(elem => (
          <li key={elem.title}>
            <div dangerouslySetInnerHTML={{__html: elem.description}} />
          </li>
        ))}
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
