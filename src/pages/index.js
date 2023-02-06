import * as React from 'react';
import Layout from '../components/layout';
import HeaderImage from '../components/header-image';
import News from '../components/news';
import Gallery from '../components/gallery';

const IndexPage = () => {
  return (
    <Layout>
      <HeaderImage />
      <News />
      <Gallery />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home | Pavle Pavlović</title>;
