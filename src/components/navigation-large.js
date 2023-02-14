import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useSiteMetadata } from '../hooks/use-site-metadata';

export default function NavigationLarge() {
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? 'down' : 'up';
        if (direction !== scrollDirection) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener('scroll', updateScrollDirection);
      return () => {
        window.removeEventListener('scroll', updateScrollDirection);
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const { title } = useSiteMetadata();
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`sticky z-10 flex h-14 w-full bg-white transition-all duration-500
      ${scrollDirection === 'down' ? '-top-14' : 'top-0'} `}
    >
      <div className="flex flex-1 items-center">
        <Link to="/" activeClassName="active" activeStyle={{ color: 'black' }}>
          {title}
        </Link>
      </div>

      <div className="flex flex-1 justify-between items-center">
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
