// Package
import { NavLink } from 'react-router-dom';

type Props = {
  title: string;
};

function CompanyHeading({ title }: Props) {
  return (
    <NavLink to="/" className="logo">
      <span className="header-title">{title}</span>
    </NavLink>
  );
}

export default CompanyHeading;
