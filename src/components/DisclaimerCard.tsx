import React from 'react';
import { AlertCircle } from 'lucide-react';

export const DisclaimerCard: React.FC = () => {
  return (
    <div className="disclaimer-card" id="regulatory-disclaimer">
      <div className="disclaimer-inner">
        <div className="disclaimer-icon-wrapper">
          <AlertCircle className="w-5 h-5 text-[#64748b]" />
        </div>
        <div className="disclaimer-content">
          <span className="disclaimer-label">Информация о регуляторном статусе:</span>
          <p className="disclaimer-text">
            Товар поставляется покупателю исключительно для проведения исследований, в том числе в научных целях (RUO); товар не может использоваться как медицинское изделие и применяться в медицинских целях, и/или отчуждаться/передаваться для использования в соответствующих целях третьим лицам. Регистрационное удостоверение на указанный товар отсутствует.
          </p>
        </div>
      </div>
    </div>
  );
};
