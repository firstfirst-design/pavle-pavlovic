import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const Contact = ({ data }) => {
  const { title } = useSiteMetadata();
  return (
    <Layout>
      <div className="flex mt-28">
        <div className="flex-1">
          <div>{title}</div>
          <div>{renderRichText(data.contentfulContact.contact)}</div>
          <div>{renderRichText(data.contentfulContact.siteInfo)}</div>
        </div>
        <div className="flex-1">
          {renderRichText(data.contentfulContact.disclaimer)}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ContactQuery {
    contentfulContact {
      contact {
        raw
      }
      siteInfo {
        raw
      }
      disclaimer {
        raw
      }
    }
  }
`;

export default Contact;
export const Head = () => <title>Contact | Pavle Pavlović</title>;
