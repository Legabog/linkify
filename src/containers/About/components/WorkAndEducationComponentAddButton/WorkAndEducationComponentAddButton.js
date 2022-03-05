import ControlPointIcon from '@mui/icons-material/ControlPoint';
import './WorkAndEducationComponentAddButton.css';

export const WorkAndEducationComponentAddButton = (props) => {
  return (
    <div
      className={'WorkAndEducationComponent__addButton'}
      onClick={() => {
        props.toggleActiveComponent(true);
      }}
    >
      <ControlPointIcon />
      <div className={'WorkAndEducationComponent__addButton__description'}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};
