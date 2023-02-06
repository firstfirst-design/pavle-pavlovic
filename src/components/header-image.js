import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function HeaderImage() {
  const data = useStaticQuery(graphql`
    query HeaderImgeQuery {
      contentfulHeaderImage {
        headerImageImage {
          gatsbyImageData(quality: 100)
          title
        }
      }
    }
  `);
  const image = getImage(
    data.contentfulHeaderImage.headerImageImage.gatsbyImageData
  );

  return (
    <GatsbyImage
      id="image"
      style={{
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
      image={image}
      alt={data.contentfulHeaderImage.headerImageImage.title}
    />
  );
}
