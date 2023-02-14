import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { useSiteMetadata } from '../hooks/use-site-metadata';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES } from '@contentful/rich-text-types';

const Contact = ({ data }) => {
  const { title } = useSiteMetadata();

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

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row mt-28">
        <div className="flex-1 text-center lg:text-left">
          <div>{title}</div>
          <br />
          <div>{renderRichText(data.contentfulContact.contact, options)}</div>
          <br />
          <br />
          <div>{renderRichText(data.contentfulContact.siteInfo, options)}</div>
        </div>
        <div className="flex-1 mt-28 lg:mt-0 text-justify">
          {renderRichText(data.contentfulContact.disclaimer, options)}
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
