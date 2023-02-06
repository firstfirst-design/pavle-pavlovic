import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Exhibitions = ({ data }) => {
  return (
    <Layout>
      <div className="mt-28">
        {data.allContentfulExhibition.edges.map(({ node }, i) => {
          return (
            <div key={i} className="flex justify-between">
              <div>{node.year}</div>
              <div>{node.name}</div>
              <div>{node.what}</div>
              <div>{node.place}</div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Exhibitions;

export const Head = () => <title>Exhibitions | Pavle Pavlović</title>;

export const query = graphql`
  query ExhibitionsQuery {
    allContentfulExhibition(sort: { year: DESC }) {
      edges {
        node {
          year
          name
          what
          place
          ranking
        }
      }
    }
  }
`;
