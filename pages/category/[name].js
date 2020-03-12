import Layout from '../../components/layout';


const Page = ({ params, elements }) => {
  // console.log('params', params, 'elements', elements[0]);

  return (
    <Layout>
      <h1>{params.name}</h1>
      <p>List of links</p>
      <ul>
      {elements.map(elem => (
        <li key={elem.title}>
          {elem.description}
        </li>
      ))}
      </ul>
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: 'software' } },
    ],
    fallback: false
  };
};

export async function getStaticProps({ params }) {

  const data = await import(`../../public/data/category/${params.name}.json`);
  const content = JSON.parse(JSON.stringify(data));

  return {
    props: {
      params,
      elements: content,
  }};
};


export default Page;
