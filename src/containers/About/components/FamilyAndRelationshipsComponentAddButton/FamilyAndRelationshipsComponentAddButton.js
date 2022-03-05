import ControlPointIcon from '@mui/icons-material/ControlPoint';
import './FamilyAndRelationshipsComponentAddButton.css';

export const FamilyAndRelationshipsComponentAddButton = (props) => {
  return (
    <div
      className={'FamilyAndRelationshipsComponent__addButton'}
      onClick={() => {
        props.toggleActiveComponent(true);
      }}
    >
      <ControlPointIcon />
      <div className={'FamilyAndRelationshipsComponent__addButton__description'}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};
