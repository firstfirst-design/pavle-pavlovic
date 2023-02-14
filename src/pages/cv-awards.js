import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const CvAwards = ({ data }) => {
  const image = getImage(data.contentfulCvImage.cvImage.gatsbyImageData);
  return (
    <Layout>
      <div className="flex flex-col-reverse mt-28 lg:flex-row">
        <div className="mt-14 lg:w-1/3 lg:mt-0">
          <GatsbyImage
            image={image}
            alt={data.contentfulCvImage.cvImage.title}
          />
        </div>

        <div className="lg:ml-7 xl:ml-14 lg:w-2/3">
          {data.allContentfulAwardsResidencies.edges.map(({ node }, i) => {
            return (
              <div key={i} className="flex justify-between">
                <div className="mr-3.5">{node.year}</div>
                <div className="ml-3.5 mr-3.5">{node.name}</div>
                <div className="ml-3.5 mr-3.5">{node.what}</div>
                <div className="ml-3.5 text-right">{node.place}</div>
              </div>
            );
          })}
          {data.allContentfulCv.edges.map(({ node }, i) => {
            return (
              <div key={i} className="flex justify-between">
                <div className="mr-3.5">{node.year}</div>
                <div className="ml-3.5 mr-3.5">{node.what}</div>
                <div className="ml-3.5 text-right">{node.place}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default CvAwards;
export const Head = () => <title>CV / Awards | Pavle Pavlović</title>;

export const query = graphql`
  query CvAwardsQuery {
    allContentfulCv(sort: { year: DESC }) {
      edges {
        node {
          year
          what
          place
        }
      }
    }
    allContentfulAwardsResidencies(sort: { year: DESC }) {
      edges {
        node {
          year
          name
          what
          place
        }
      }
    }
    contentfulCvImage {
      cvImage {
        gatsbyImageData
        title
      }
    }
  }
`;
