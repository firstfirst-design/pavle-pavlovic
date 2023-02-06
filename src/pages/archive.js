import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const Archive = ({ data }) => {
  return (
    <Layout>
      {data.allContentfulNews.edges.map(({ node }, i) => {
        const singleImage = getImage(node.newsImage);
        return (
          <div key={i} className="flex mt-28">
            <div className="flex flex-1 flex-col justify-between">
              <div className="mr-14">
                <div className="text-center">{node.newsTitle}</div>
                <br />
                <div>{renderRichText(node.newsText)}</div>
              </div>
            </div>
            <div className="flex-1">
              <GatsbyImage image={singleImage} />
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query ArchiveQuery {
    allContentfulNews(sort: { createdAt: DESC }) {
      edges {
        node {
          newsTitle
          newsText {
            raw
          }
          newsImage {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default Archive;
export const Head = () => <title>Archive | Pavle Pavlović</title>;
