import * as React from 'react';
import { Link } from 'gatsby';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export default function NavigationSmal() {
  const { title } = useSiteMetadata();

  return (
    <div
      className={`fixed z-10 flex flex-col justify-between h-full w-full right-0 left-0 pr-4 pl-4
      `}
    >
      <div className="flex justify-center items-center h-14 bg-white">
        <Link to="/" activeClassName="active" activeStyle={{ color: 'black' }}>
          {title}
        </Link>
      </div>

      <div className="h-14 flex  justify-between items-center bg-white">
        <Link
          to="/exhibitions"
          activeClassName="active"
          activeStyle={{ color: 'black' }}
        >
          Exhibitions
        </Link>

        <Link
          to="/cv-awards"
          activeClassName="active"
          activeStyle={{ color: 'black' }}
        >
          CV / Awards
        </Link>

        <Link
          to="/contact"
          activeClassName="active"
          activeStyle={{ color: 'black' }}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
