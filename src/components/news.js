import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES } from '@contentful/rich-text-types';

export default function News() {
  const options = {
    renderText: (text) =>
      text.split('\n').flatMap((text, i) => [i > 0 && <br />, text]),

    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        let anchorAttrs = {};

        if (!node.data.uri.includes('my-domain-name.com')) {
          anchorAttrs = {
            target: '_blank',
            rel: 'noopener noreferrer',
          };
        }

        return (
          <a href={node.data.uri} {...anchorAttrs}>
            {children}
          </a>
        );
      },
    },
  };

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
          <div key={i} className="flex flex-col-reverse xl:flex-row mt-28">
            <div className="flex flex-1 flex-col justify-between mt-14 xl:mt-0">
              <div className="xl:mr-14">
                <div className="text-center">{node.newsTitle}</div>
                <br />
                <br />
                <div className="text-justify">
                  {renderRichText(node.newsText, options)}
                </div>
              </div>
              <br />
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
