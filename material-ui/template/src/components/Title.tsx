import * as React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  children?: React.ReactNode;
}

export default function Title(props: TitleProps) {
  return (
    <Typography
      sx={{
        color: (theme) => theme.palette.text.primary,
      }}
      component="h2"
      variant="h6"
      color="primary"
      gutterBottom
    >
      {props.children}
    </Typography>
  );
}
