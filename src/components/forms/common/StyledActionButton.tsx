import { ActionIcon, px } from '@mantine/core';
import { Icon } from '@tabler/icons-react';

interface StyledActionButtonProps {
  icon: Icon;
  onClick: () => void;
  disabled?: boolean;
}

export const StyledActionButton: React.FC<StyledActionButtonProps> = ({ icon: TheIcon, onClick, disabled }) => (
  <ActionIcon disabled={disabled} size='sm' radius='xl' variant='light' onClick={onClick}>
    <TheIcon size={px('0.8rem')} />
  </ActionIcon>
);
