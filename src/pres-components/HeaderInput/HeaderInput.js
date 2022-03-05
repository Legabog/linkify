import { useTranslation } from 'react-i18next';
import './HeaderInput.css';

import SearchIcon from '@mui/icons-material/Search';

export const HeaderInput = (props) => {
  const { t } = useTranslation();

  return (
    <div
      className={props.isFocus ? 'header__input_active' : 'header__input'}
      onClick={props.toggleActiveInput}
    >
      {props.isFocus ? null : <SearchIcon onClick={props.toggleActiveInput} />}
      <input
        type='text'
        value={props.value}
        onChange={props.changeHandler}
        ref={props.inputref}
        placeholder={t('authorized.header.header-left.input.placeholder')}
        onClick={props.toggleActiveInput}
        onBlur={props.toggleActiveInput}
      />
    </div>
  );
};
