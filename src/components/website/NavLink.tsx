import { NavLink as OldNavLink, NavLinkProps as MLinkProps, ThemeIcon, useMantineTheme } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  end?: boolean;
} & Omit<MLinkProps, 'active' | 'to'>;

export const NavLink: React.FC<NavLinkProps> = ({ to, end, ...rest }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActive = pathname === to || (!end && pathname.startsWith(to) && pathname.charAt(to.length) === '/');

  return (
    <OldNavLink
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (to) {
          navigate(to);
        }
      }}
      active={isActive}
      {...rest}
    />
  );
};

export const SimpleNavLink = ({ icon, ...other }: NavLinkProps) => {
  const theme = useMantineTheme();
  return (
    <NavLink
      {...other}
      icon={
        <ThemeIcon color={theme.primaryColor} variant='light' radius='xl'>
          {icon}
        </ThemeIcon>
      }
    />
  );
};
