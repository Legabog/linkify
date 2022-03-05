import './SearchesBlockBody.css';

import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { SearchesBlockBodyItem } from '../SearchesBlockBodyItem/';
import { useTranslation } from 'react-i18next';

export const SearchesBlockBody = (props) => {
  const { t } = useTranslation();

  return (
    <div className='searches-block__body'>
      <div className='searches-block__body__header'>
        <h4>{t('authorized.header.header-left.searches-block.body.header.h4')}</h4>
        <span>{t('authorized.header.header-left.searches-block.body.header.span')}</span>
      </div>
      <div className='searches-block__body__block'>
        <SearchesBlockBodyItem
          title={t('authorized.header.header-left.searches-block.body.item-1')}
          closeIcon={CloseOutlinedIcon}
          Icon={QueryBuilderRoundedIcon}
        />
        <SearchesBlockBodyItem
          title={t('authorized.header.header-left.searches-block.body.item-2')}
          closeIcon={CloseOutlinedIcon}
          Icon={QueryBuilderRoundedIcon}
        />
        <SearchesBlockBodyItem
          title={t('authorized.header.header-left.searches-block.body.item-3')}
          closeIcon={CloseOutlinedIcon}
          Icon={QueryBuilderRoundedIcon}
        />
      </div>
    </div>
  );
};
