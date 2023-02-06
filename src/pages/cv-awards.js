import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const CvAwards = ({ data }) => {
  const image = getImage(data.contentfulCvImage.cvImage.gatsbyImageData);
  return (
    <Layout>
      <div className="flex mt-28">
        <div className="w-1/3">
          <GatsbyImage
            image={image}
            alt={data.contentfulCvImage.cvImage.title}
          />
        </div>

        <div className="ml-14 w-2/3">
          {data.allContentfulAwardsResidencies.edges.map(({ node }, i) => {
            return (
              <div key={i} className="flex justify-between">
                <div>{node.year}</div>
                <div>{node.name}</div>
                <div>{node.what}</div>
                <div>{node.place}</div>
              </div>
            );
          })}
          {data.allContentfulCv.edges.map(({ node }, i) => {
            return (
              <div key={i} className="flex justify-between">
                <div>{node.year}</div>
                <div>{node.what}</div>
                <div>{node.place}</div>
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
