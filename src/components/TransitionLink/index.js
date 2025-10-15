import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { TransitionContext } from '../../context/TransitionContext';

export const TransitionLink = ({ to, animation, children, ...props }) => {
  const { setAnimation } = useContext(TransitionContext);

  const handleClick = () => {
    setAnimation(animation);
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};