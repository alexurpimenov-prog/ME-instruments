import React from 'react';
import { Sparkles, DollarSign, Cpu, Zap, ShieldCheck } from 'lucide-react';

export const TechnologyCard: React.FC = () => {
  return (
    <div className="technology-card" id="technology-section">
      <div className="tech-header">
        <div className="tech-badge">
          <Sparkles className="w-4 h-4 text-[#0066cc]" />
          <span>Собственная запатентованная разработка</span>
        </div>
        <h3 className="tech-title">Эксклюзивная технология монохромного секвенирования</h3>
        <p className="tech-intro">
          В основе оборудования ME Instruments лежит уникальная одноцветная химия секвенирования, полностью защищенная собственными международными патентами компании. Это позволило производителю радикально упростить оптику приборов и сделать NGS-диагностику по-настоящему доступной.
        </p>
      </div>

      <div className="tech-grid">
        {/* Benefit 1 */}
        <div className="tech-item">
          <div className="tech-icon-wrapper">
            <DollarSign className="w-5 h-5 text-[#0066cc]" />
          </div>
          <div className="tech-item-content">
            <h4 className="tech-item-title">Низкий порог запуска (рентабельность)</h4>
            <p className="tech-item-desc">
              Больше не нужно копить пробы неделями. Сниженная себестоимость запуска позволяет экономически выгодно проводить анализ даже для нескольких образцов каждый день.
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="tech-item">
          <div className="tech-icon-wrapper">
            <Cpu className="w-5 h-5 text-[#0066cc]" />
          </div>
          <div className="tech-item-content">
            <h4 className="tech-item-title">Компактность и простота</h4>
            <p className="tech-item-desc">
              Отсутствие громоздких систем с несколькими лазерами превратило секвенатор в эргономичный настольный прибор. Идеально подходит для локальных лабораторий при больницах.
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="tech-item">
          <div className="tech-icon-wrapper">
            <Zap className="w-5 h-5 text-[#0066cc]" />
          </div>
          <div className="tech-item-content">
            <h4 className="tech-item-title">Высокая скорость</h4>
            <p className="tech-item-desc">
              Полный цикл тестирования занимает от 7 до 24 часов, что критически важно для экстренной диагностики инфекций (tNGS) и подбора терапии.
            </p>
          </div>
        </div>

        {/* Benefit 4 */}
        <div className="tech-item">
          <div className="tech-icon-wrapper">
            <ShieldCheck className="w-5 h-5 text-[#0066cc]" />
          </div>
          <div className="tech-item-content">
            <h4 className="tech-item-title">Технологическая независимость</h4>
            <p className="tech-item-desc">
              100% собственная запатентованная разработка ME Instruments (от реагентов до софта) гарантирует стабильность цен, бесперебойность поставок и отсутствие санкционных рисков.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
