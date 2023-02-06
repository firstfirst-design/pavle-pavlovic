import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

export default function News() {
  const data = useStaticQuery(graphql`
    query NewsQuery {
      allContentfulNews(limit: 1, sort: { createdAt: DESC }) {
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
  `);

  return (
    <div>
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
              <div className="text-center">
                <Link to="/archive">Archive</Link>
              </div>
            </div>
            <div className="flex-1">
              <GatsbyImage image={singleImage} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
