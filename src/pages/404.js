import React from 'react';
import { graphql } from 'gatsby';

const NotFound = ({ data }) => {
  return (
    <div className="flex h-screen justify-center items-center">
      <meta http-equiv="refresh" content="5; https://www.pavlepavlovic.com/" />
      <div className="text-center">
        <p>{data.contentfulErrorPage.title}</p>
        <br />
        <img
          src={data.contentfulErrorPage.gif.publicUrl}
          alt={data.contentfulErrorPage.gif.title}
        />
        <p>{data.contentfulErrorPage.description}</p>
      </div>
    </div>
  );
};

export const query = graphql`
  query GifQuery {
    contentfulErrorPage {
      title
      gif {
        publicUrl
        title
      }
      description
    }
  }
`;

export default NotFound;
export const Head = () => <title>404 | Pavle Pavlović</title>;
