import './ProfileAddHobbiesBodyInput.css';

import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

export const ProfileAddHobbiesBodyInput = (props) => {
  const { t } = useTranslation();
  return (
    <div className={'profile-add-hobbies-body-search-input-wrapper'}>
      <div className={'profile-add-hobbies-body-search-input'}>
        <SearchIcon onClick={() => {}} />
        <input
          type={'text'}
          value={props.searchInput}
          onChange={props.changeSearchInputHandler}
          id={'profile-add-hobbies-body-search-input'}
          placeholder={t('authorized.profile.add-hobbies.body.state-2.input-placeholder')}
        />
      </div>
    </div>
  );
};
