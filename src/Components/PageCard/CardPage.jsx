import React from 'react';
import "./Style.scss";
import { useTranslation } from 'react-i18next';

const CardPage = ({ item, advImg }) => {
  const images = advImg.filter(img => img?.part === item?.part);

  const { t } = useTranslation("globbal")

  return (
    <div className="card-page-item">
      <div className="adv-item-boxs d-flex justify-content-between">
        <h1>{t(item?.title)}</h1>
        {item?.btnBoolean && <button>Book now</button>}
      </div>
      <p className='default-desc-text mt-4'>
        {t(item?.descriptions)}
      </p>
      <div className="card-page-images">

        {images?.map(filteredImg => (
            <img key={filteredImg?.id} src={filteredImg?.img} />
        ))}
      </div>
    </div>
  );
};

export default CardPage;
