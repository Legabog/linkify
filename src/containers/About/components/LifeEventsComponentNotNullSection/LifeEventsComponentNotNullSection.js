import { useState } from 'react';
import './LifeEventsComponentNotNullSection.css';

import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export const LifeEventsComponentNotNullSection = (props) => {
  const [editWindowVisibility, setEditWindowVisibility] = useState('hidden');
  const [editWindowOpacity, setEditWindowOpacity] = useState(0);

  const toggleEditWindow = (boolean) => {
    boolean ? setEditWindowVisibility('visible') : setEditWindowVisibility('hidden');

    boolean ? setEditWindowOpacity(1) : setEditWindowOpacity(0);
  };

  return (
    <>
      <div className={'LifeEventsComponentNotNullSection'}>
        <props.Icon />
        <div className={'LifeEventsComponentNotNullSection__description'}>
          <span>{props.mainTitle}</span>
        </div>
        <div className={'LifeEventsComponentNotNullSection__publicIcon'}>
          <PublicIcon />
        </div>
        <div className={'LifeEventsComponentNotNullSection__edit'}>
          <MoreHorizIcon
            onClick={() => {
              editWindowVisibility === 'hidden' ? toggleEditWindow(true) : toggleEditWindow(false);
            }}
          />
        </div>
      </div>

      <div
        className={'LifeEventsComponentNotNullSection__editWindow'}
        style={{
          visibility: `${editWindowVisibility}`,
          opacity: `${editWindowOpacity}`,
        }}
      >
        <div
          className={'LifeEventsComponentNotNullSection__editWindowSection'}
          onClick={() => {
            props.toggleActiveComponent(true);
            toggleEditWindow(false);
          }}
        >
          <AddIcon />
          <span>{props.editTitle}</span>
        </div>

        <div
          className={'LifeEventsComponentNotNullSection__editWindowSection'}
          onClick={() => {
            props.addReducer(
              [props.index],
              props.deleteReducer,
              props.activeAccountEmail,
              props.toggleActiveComponent(false)
            );
            toggleEditWindow(false);
          }}
        >
          <DeleteOutlineOutlinedIcon />
          <span>{props.deleteTitle}</span>
        </div>
      </div>
    </>
  );
};
