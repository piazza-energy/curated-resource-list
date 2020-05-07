import styles from './layout.module.css'

import Header from './header';


const Layout = props => (
  <div className={styles.container}>
    <Header />
    {props.children}
  </div>
);

export default Layout;

// this would look smarter, but HOCs give troubles with Nextjs native functions, such as getStaticProps

// const withLayout = Page => {
//   return () => (
//     <div style={layoutStyle}>
//       <Header />
//       <Page />
//     </div>
//   );
// };
//
// export default withLayout;
