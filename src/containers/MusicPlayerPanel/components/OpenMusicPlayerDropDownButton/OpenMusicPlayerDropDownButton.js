import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './OpenMusicPlayerDropDownButton.css';

export const OpenMusicPlayerDropDownButton = (props) => {
  return (
    <>
      <div className={'music-player-panel_open__dropDown'}>
        <ArrowDropDownIcon onClick={props.toggleMusicPanel} />
      </div>
    </>
  );
};
