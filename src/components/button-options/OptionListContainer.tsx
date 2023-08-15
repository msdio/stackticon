import type { PropsWithChildren } from 'react';

import { ClickAwayListener, Grow, MenuList, Paper, Popper } from '@mui/material';

interface OptionListContainerProp {
  buttonRef: HTMLElement | null;
  handleClose: (e: Event) => void;
}

export const OptionListContainer = ({
  buttonRef,
  handleClose,
  children,
}: PropsWithChildren<OptionListContainerProp>) => {
  return (
    <Popper open transition disablePortal role={'list'} anchorEl={buttonRef} sx={{ zIndex: 1 }}>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList id='split-button-menu' autoFocusItem>
                {children}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};
