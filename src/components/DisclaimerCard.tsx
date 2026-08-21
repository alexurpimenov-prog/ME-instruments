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
            Товар является оборудованием для in vitro диагностики по классификации производителя, однако на момент поставки не имеет Регистрационного удостоверения Росздравнадзора РФ. Товар поставляется для проведения научно-исследовательских работ, технических испытаний и валидации. Использование Товара для выдачи клинических заключений пациентам до получения РУ является зоной ответственности Покупателя.
          </p>
        </div>
      </div>
    </div>
  );
};
