import * as React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export default function Footer() {
  const { title } = useSiteMetadata();
  return (
    <div className="h-14 mt-28 mb-14 md:mb-0 flex justify-between items-center">
      <div>
        {new Date().getFullYear()} © {title}
      </div>
      <a
        href="https://www.instagram.com/pavle___pavlovic/"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
    </div>
  );
}
