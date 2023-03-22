import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import { Fragment, useRef, useState } from 'react';
import { makeUrlIntoBracket, makeUrlIntoImgTag } from 'utils/resultUrl';

const copyOptions = ['copy for readme', 'copy link only', 'copy img tag'];

const ButtonOptions = (state: any) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const buttonRef = useRef<HTMLDivElement>(null);

  const bracketUrl = makeUrlIntoBracket(state.url);
  const imgTagUrl = makeUrlIntoImgTag(state.url);

  const clickCopyUrl = async () => {
    const selected = copyOptions[selectedOption];
    let copyText = '';

    if (selected.includes('readme')) {
      copyText = bracketUrl;
    } else if (selected.includes('tag')) {
      copyText = imgTagUrl;
    } else {
      copyText = state.url;
    }
    await navigator.clipboard.writeText(copyText);
    alert('copied!');
  };

  const clickCopyOption = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
    setSelectedOption(index);
    setOpenOptions(false);
    clickCopyUrl();
  };

  const handleToggle = () => {
    setOpenOptions((prev) => !prev);
  };

  const handleClose = (e: Event) => {
    if (buttonRef.current && buttonRef.current.contains(e.target as HTMLElement)) {
      return;
    }

    setOpenOptions(false);
  };

  return (
    <Fragment>
      <ButtonGroup
        ref={buttonRef}
        aria-label='button with options'
        variant='contained'
        sx={{
          width: 'fit-content',
          backgroundColor: 'p.1',
          borderRadius: '12px',
          marginRight: '10px',
        }}
      >
        <Button
          onClick={clickCopyUrl}
          sx={{ borderRadius: '12px 0 0 12px', fontSize: '18px', fontWeight: 'bold' }}
        >
          {copyOptions[selectedOption]}
        </Button>
        <Button
          size='small'
          aria-controls={openOptions ? 'split-button-menu' : undefined}
          aria-expanded={openOptions ? 'true' : undefined}
          aria-label='select copy options'
          aria-haspopup='menu'
          onClick={handleToggle}
          sx={{
            borderRadius: '0 12px 12px 0',
          }}
        >
          <ArrowDropDownIcon
            sx={{
              fontSize: '36px',
            }}
          />
        </Button>
      </ButtonGroup>

      <Popper
        sx={{
          zindex: 1,
        }}
        open={openOptions}
        anchorEl={buttonRef.current}
        role={undefined}
        transition
        disablePortal
      >
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
                  {copyOptions.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedOption}
                      onClick={(e) => clickCopyOption(e, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
};

export default ButtonOptions;
