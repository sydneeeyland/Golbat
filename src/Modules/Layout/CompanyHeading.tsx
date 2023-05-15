import { NoSsr } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CompanyHeadingLoading from '../../Components/Loading/Skeleton/CompanyHeadingLoading';

type Props = {
  title: string;
};

function CompanyHeading({ title }: Props) {
  return (
    <NoSsr defer fallback={<CompanyHeadingLoading />}>
      <NavLink to="/" className="logo">
        <span className="header-title">{title}</span>
      </NavLink>
    </NoSsr>
  );
}

export default CompanyHeading;
