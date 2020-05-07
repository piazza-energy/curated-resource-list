import Header from './header';

const layoutStyle = {
  width: '80%',
  margin: '20px auto',
  padding: 20,
};

const Layout = props => (
  <div style={layoutStyle}>
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
