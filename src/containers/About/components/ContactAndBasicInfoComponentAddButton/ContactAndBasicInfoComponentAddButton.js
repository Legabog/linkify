import ControlPointIcon from '@mui/icons-material/ControlPoint';
import './ContactAndBasicInfoComponentAddButton.css';

export const ContactAndBasicInfoComponentAddButton = (props) => {
  return (
    <div
      className={'ContactAndBasicInfoComponent__addButton'}
      onClick={() => {
        props.toggleActiveComponent(true);
      }}
    >
      <ControlPointIcon />
      <div className={'ContactAndBasicInfoComponent__addButton__description'}>
        <span>{props.title}</span>
      </div>
    </div>
  );
};
