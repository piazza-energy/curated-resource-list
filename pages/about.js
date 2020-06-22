import Layout from '../components/layout';

const Page = () => <Layout>
  <div className="pure-u-1">
    <h1>Energy Piazza - Curated Resources List</h1>
    <p>Some notes:</p>
    <ul>
      <li>The list started for research while applying for grant in the UK so most resources make sense for this market.</li>
      <li>We are focusing on electricity data exchange, so most of the resources see the problem from this point of view.</li>
      <li>Categories have grown organically with content, they don't follow a specific taxonomy and are subject to change.</li>
      <li>This website has been developed using Next.js and it's entirely open source.</li>
    </ul>
    <p>Contributions are welcome, <a href="https://github.com/piazza-energy/curated-resource-list">here</a>.</p>
  </div>

</Layout>;

export default Page;
