import Header from './header';
import classNames from 'classnames/bind';
import styles from './layout.module.css'


const Layout = props => (
  <div>
    <Header />
    <div className={classNames('pure-g', styles.container)}>
      {props.children}
    </div>
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
