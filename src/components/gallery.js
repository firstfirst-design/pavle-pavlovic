import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

export default function Gallery() {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allContentfulPaintings(sort: { ranking: DESC }) {
        edges {
          node {
            title
            material
            size
            painting {
              gatsbyImageData
              title
            }
          }
        }
      }
    }
  `);

  return (
    <div className="-mb-14">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="mt-28 flex -ml-14 w-auto"
        columnClassName="pl-14 bg-clip-padding"
      >
        {data.allContentfulPaintings.edges.map(({ node }, i) => {
          const singleImage = getImage(node.painting);
          return (
            <div className="mb-14" key={i}>
              <div className="text-center">{node.title}</div>
              <br />
              <GatsbyImage image={singleImage} alt={node.painting.title} />
              <div>
                <br />
              </div>
              <div className="flex justify-between">
                <div>{node.material}</div>
                <div>{node.size}</div>
              </div>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}
