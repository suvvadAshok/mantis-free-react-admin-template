import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

const NavItem = ({ item }) => {
  const theme = useTheme();
  const Icon = item.icon;
  const itemIcon = item.icon ? <Icon style={{ fontSize: '1.25rem' }} /> : false;

  const textColor = 'text.primary';
  const iconSelectedColor = 'primary.main';

  return (
    <div>
      {itemIcon && (
        <ListItemButton
          sx={{
            gap: 1,
            zIndex: 1201,
            pl: 3,
            py: 1,
            ...{
              '&:hover': {
                bgcolor: 'primary.lighter'
              },
              '&.Mui-selected': {
                bgcolor: 'primary.lighter',
                borderRight: `2px solid ${theme.palette.primary.main}`,
                color: iconSelectedColor,
                '&:hover': {
                  color: iconSelectedColor,
                  bgcolor: 'primary.lighter'
                }
              }
            },
            ...{
              '&:hover': {
                bgcolor: 'transparent'
              },
              '&.Mui-selected': {
                '&:hover': {
                  bgcolor: 'transparent'
                },
                bgcolor: 'transparent'
              }
            }
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 28,
              color: textColor,
              ...{
                borderRadius: 1.5,
                width: 36,
                height: 36,
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  bgcolor: 'secondary.lighter'
                }
              }
            }}
          >
            {itemIcon}
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="h6" sx={{ color: textColor }}>
                {item.title}
              </Typography>
            }
          />
        </ListItemButton>
      )}
    </div>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
