import './SearchesBlockHeader.css';

import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

export const SearchesBlockHeader = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className='searches-block__header'>
        <h4>{t('authorized.header.header-left.searches-block.header.h4')}</h4>
      </div>
      <div className='searches-block__border'>
        <div className='searches-block__border__icon'>
          <SearchIcon />
        </div>
        <span>{t('authorized.header.header-left.searches-block.header.span')}</span>
      </div>
    </>
  );
};
