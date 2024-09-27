  import React from 'react';
  import "./Style.scss";

  const CardPage = ({ item, advImg }) => {
    const images = advImg.filter(img => img?.part === item?.part);

    return (
      <div className="card-page-item">
        <div className="adv-item-boxs d-flex justify-content-between">
          <h1>{item?.title}</h1>
          {item?.btnBoolean && <button>Book now</button>}
        </div>
        <p className='default-desc-text mt-4'>
          {item?.descriptions}
        </p>
        <div className="card-page-images">
          
          {images?.map(filteredImg => (
            <img key={filteredImg?.id} src={filteredImg?.img}  />
          ))}
        </div>
      </div>
    );
  };

  export default CardPage;
