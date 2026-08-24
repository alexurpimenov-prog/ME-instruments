import React from 'react';
import { ProcessStepData } from '../types';
import { ImageSlot } from './ImageSlot';
import { 
  Cpu, 
  Settings, 
  Activity, 
  RotateCcw, 
  ShieldAlert, 
  History, 
  Flame, 
  Thermometer, 
  Snowflake,
  Layers
} from 'lucide-react';

interface ProcessFlowProps {
  steps: ProcessStepData[];
  imageOverrides: Record<string, string>;
  onImageUploaded: (src: string, dataUrl: string) => void;
}

export const ProcessFlow: React.FC<ProcessFlowProps> = ({
  steps,
  imageOverrides,
  onImageUploaded,
}) => {
  return (
    <div className="process-wrapper" id="process-section">
      <h3>Интеграция с роботизированной платформой для подготовки библиотек ME Instruments</h3>
      <p className="sub">Полный конвейер: от образца до готового отчёта</p>

      {/* Раздел 1: Ключевые преимущества */}
      <div className="unified-tech-card" style={{ marginBottom: '3rem', boxShadow: 'none', padding: '24px 0' }}>
        <div className="unified-tech-header">
          <div className="unified-tech-badge">
            <Layers className="w-4 h-4 text-[#0066cc]" />
            <span>Автоматизация и эффективность</span>
          </div>
          <h3 className="unified-tech-title" style={{ fontSize: '1.6rem', marginTop: '8px' }}>
            Ключевые преимущества системы
          </h3>
        </div>

        <div className="unified-tech-list" style={{ marginTop: '24px' }}>
          <div className="unified-tech-item">
            <div className="unified-tech-icon-wrapper">
              <Cpu className="w-5 h-5 text-[#0066cc]" />
            </div>
            <div className="unified-tech-item-content">
              <h4 className="unified-tech-item-title">Процесс «Образец на входе — продукт на выходе»</h4>
              <p className="unified-tech-item-desc">
                Полная автоматизация всего конвейера NGS — от экстракции образца до пре-подготовки библиотек, гибридизационного захвата и контроля качества без участия человека.
              </p>
            </div>
          </div>

          <div className="unified-tech-item">
            <div className="unified-tech-icon-wrapper">
              <Settings className="w-5 h-5 text-[#0066cc]" />
            </div>
            <div className="unified-tech-item-content">
              <h4 className="unified-tech-item-title">Защита от ложных настроек (Адаптивность)</h4>
              <p className="unified-tech-item-desc">
                Умное ПО самостоятельно распознает количество загруженных образцов, автоматически распределяет лунки и подбирает режимы сброса наконечников, исключая повторные ручные перенастройки.
              </p>
            </div>
          </div>

          <div className="unified-tech-item">
            <div className="unified-tech-icon-wrapper">
              <Activity className="w-5 h-5 text-[#0066cc]" />
            </div>
            <div className="unified-tech-item-content">
              <h4 className="unified-tech-item-title">Встроенный флуориметрический контроль</h4>
              <p className="unified-tech-item-desc">
                Наличие встроенного модуля Qubit позволяет системе автоматически рассчитывать объемы ДНК, проводить разведения и пулирование библиотек по результатам реальных измерений.
              </p>
            </div>
          </div>

          <div className="unified-tech-item">
            <div className="unified-tech-icon-wrapper">
              <RotateCcw className="w-5 h-5 text-[#0066cc]" />
            </div>
            <div className="unified-tech-item-content">
              <h4 className="unified-tech-item-title">Защита от сбоев (Продолжение работы)</h4>
              <p className="unified-tech-item-desc">
                Программное обеспечение поддерживает функцию продолжения прерванного цикла — эксперимент можно возобновить в один клик с любого выбранного шага.
              </p>
            </div>
          </div>

          <div className="unified-tech-item">
            <div className="unified-tech-icon-wrapper">
              <ShieldAlert className="w-5 h-5 text-[#0066cc]" />
            </div>
            <div className="unified-tech-item-content">
              <h4 className="unified-tech-item-title">Безопасность и чистота</h4>
              <p className="unified-tech-item-desc">
                Корпус оснащен стандартной УФ-лампой для стерилизации, а также поддерживает установку высокоэффективных HEPA-фильтров для защиты от перекрестного загрязнения.
              </p>
            </div>
          </div>

          <div className="unified-tech-item">
            <div className="unified-tech-icon-wrapper">
              <History className="w-5 h-5 text-[#0066cc]" />
            </div>
            <div className="unified-tech-item-content">
              <h4 className="unified-tech-item-title">Глубокая прослеживаемость</h4>
              <p className="unified-tech-item-desc">
                Система автоматически ведет и сохраняет подробные журналы работы и логи оборудования на протяжении минимум 3 лет для быстрого поиска причин ошибок.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Раздел 2: Температурные модули */}
      <div className="unified-tech-card" style={{ marginBottom: '4rem', boxShadow: 'none', padding: '24px 0' }}>
        <div className="unified-tech-header">
          <div className="unified-tech-badge">
            <Thermometer className="w-4 h-4 text-[#0066cc]" />
            <span>Термоконтроль и термостабилизация</span>
          </div>
          <h3 className="unified-tech-title" style={{ fontSize: '1.6rem', marginTop: '8px' }}>
            Встроенные температурные и ПЦР-модули
          </h3>
        </div>

        <div className="unified-tech-list" style={{ marginTop: '24px' }}>
          <div className="unified-tech-item">
            <div className="unified-tech-icon-wrapper">
              <Flame className="w-5 h-5 text-[#0066cc]" />
            </div>
            <div className="unified-tech-item-content">
              <h4 className="unified-tech-item-title">Автоматические ПЦР-модули (на 24 или 96 образцов)</h4>
              <p className="unified-tech-item-desc">
                Робот сам проводит температурные циклы (амплификацию) библиотек. Крышка блока открывается и закрывается автоматически по команде программы. Высокая скорость нагрева и охлаждения (не менее 1.3 °C в секунду) существенно экономит общее время анализа, а ювелирная точность (стабильность температуры ±0.1 °C) гарантирует идеальную повторяемость результатов.
              </p>
            </div>
          </div>

          <div className="unified-tech-item">
            <div className="unified-tech-icon-wrapper">
              <Activity className="w-5 h-5 text-[#0066cc]" />
            </div>
            <div className="unified-tech-item-content">
              <h4 className="unified-tech-item-title">Модуль нагрева и встряхивания (Термошейкер)</h4>
              <p className="unified-tech-item-desc">
                Позволяет одновременно инкубировать и интенсивно перемешивать реакционные смеси. Он развивает скорость до 3000 оборотов в минуту для достижения абсолютной однородности растворов и может нагревать образцы вплоть до 100 °C.
              </p>
            </div>
          </div>

          <div className="unified-tech-item">
            <div className="unified-tech-icon-wrapper">
              <Snowflake className="w-5 h-5 text-[#0066cc]" />
            </div>
            <div className="unified-tech-item-content">
              <h4 className="unified-tech-item-title">Термостатический модуль (Охлаждающий стол)</h4>
              <p className="unified-tech-item-desc">
                Отвечает за бережное хранение капризных ферментов и мастер-миксов прямо в рабочей зоне робота. Модуль работает в диапазоне от 4 до 75 °C, удерживая стабильные +4 °C, чтобы дорогие реагенты не деградировали во время многочасового процесса раскапывания.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Раздел 3: Интерактивный процесс */}
      <div className="vertical-flow">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="process-step" id={`step-${step.number}`}>
              <span className="step-num">{step.number}</span>
              <span className="step-icon">{step.icon}</span>
              <div className="step-content">
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.description}</div>
              </div>
              <div className="step-image-placeholder">
                <ImageSlot
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  overrideSrc={imageOverrides[step.imageSrc]}
                  onImageUploaded={onImageUploaded}
                  className="w-full h-full"
                />
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="vertical-arrow" aria-hidden="true">▼</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
