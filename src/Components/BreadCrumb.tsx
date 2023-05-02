// Package
import { useEffect, memo } from 'react';
import { useNavigate } from 'react-router-dom';

// Component
import { Box } from '@mui/material';

// Style
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';

// Icons
import HomeIcon from '@mui/icons-material/Home';

type Props = {
  page: string;
};

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

function Breadcrumb({ page }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = page;
  }, [page]);

  return (
    <Box sx={{ marginBottom: '20px' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          label="Home"
          icon={<HomeIcon fontSize="small" />}
          onClick={() => navigate('/')}
        />
        <StyledBreadcrumb label={page} />
      </Breadcrumbs>
    </Box>
  );
}

export default memo(Breadcrumb);
