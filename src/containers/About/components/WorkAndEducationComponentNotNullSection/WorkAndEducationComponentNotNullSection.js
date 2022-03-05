import { useState } from 'react';
import './WorkAndEducationComponentNotNullSection.css';

import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export const WorkAndEducationComponentNotNullSection = (props) => {
  const [editWindowVisibility, setEditWindowVisibility] = useState('hidden');
  const [editWindowOpacity, setEditWindowOpacity] = useState(0);

  const toggleEditWindow = (boolean) => {
    boolean ? setEditWindowVisibility('visible') : setEditWindowVisibility('hidden');

    boolean ? setEditWindowOpacity(1) : setEditWindowOpacity(0);
  };

  return (
    <>
      <div className={'WorkAndEducationComponentNotNullSection'}>
        <props.Icon />
        <div className={'WorkAndEducationComponentNotNullSection__description'}>
          <span>{props.mainTitle}</span>
        </div>
        <div className={'WorkAndEducationComponentNotNullSection__publicIcon'}>
          <PublicIcon />
        </div>
        <div className={'WorkAndEducationComponentNotNullSection__edit'}>
          <MoreHorizIcon
            onClick={() => {
              editWindowVisibility === 'hidden' ? toggleEditWindow(true) : toggleEditWindow(false);
            }}
          />
        </div>
      </div>

      <div
        className={'WorkAndEducationComponentNotNullSection__editWindow'}
        style={{
          visibility: `${editWindowVisibility}`,
          opacity: `${editWindowOpacity}`,
        }}
      >
        <div
          className={'WorkAndEducationComponentNotNullSection__editWindowSection'}
          onClick={() => {
            props.toggleActiveComponent(true);
            toggleEditWindow(false);
          }}
        >
          <AddIcon />
          <span>{props.editTitle}</span>
        </div>

        <div
          className={'WorkAndEducationComponentNotNullSection__editWindowSection'}
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
