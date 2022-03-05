import ControlPointIcon from '@mui/icons-material/ControlPoint';
import './PlacesLivedComponentAddButton.css';

export const PlacesLivedComponentAddButton = (props) => {
  return (
    <div
      className={'PlacesLivedComponent__addButton'}
      onClick={() => {
        props.toggleActiveComponent(true);
      }}
    >
      <ControlPointIcon />
      <div className={'PlacesLivedComponent__addButton__description'}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};
