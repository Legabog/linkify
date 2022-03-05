import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../MusicPlayerPanel.css';

export const DropDownButton = (props) => {
  return (
    <>
      <div className={'MusicPlayerPanel__open__dropDown'}>
        <ArrowDropDownIcon onClick={props.toggleMusicPanel} />
      </div>
    </>
  );
};
