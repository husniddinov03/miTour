import React, { useState } from 'react';
import { titleIcon } from '../image';
import { useTranslation } from 'react-i18next';

const TitlePage = ({ textKey, boolean, FontSize, padding }) => {
  const { t } = useTranslation("globbal");
  const [textCenter, setTextCenter] = useState(true && boolean);

  return (
    <div className='titlePage d-flex mt-5' style={textCenter ? { justifyContent: "center" } : { justifyContent: "left" }}>
      <div className="d-flex text-left align-items-center gap-2" style={{ padding: padding || `8px 24px`, borderRadius: "19px", background: "#EDFD1E", display: "inline" }}>
        <img style={{ width: "16px", height: "18px" }} src={titleIcon} alt="No image" />
        <h2 style={{ margin: "0", fontSize: FontSize || `18px`, fontWeight: "700", color: "#101828" }}>{t(textKey)}</h2>
      </div>
    </div>
  );
};

export default TitlePage;
