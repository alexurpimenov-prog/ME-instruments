import React from 'react';
import { ProcessStepData } from '../types';
import { ImageSlot } from './ImageSlot';

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
      <h3>Интеграция в безшовный автоматизированный процесс ME Instruments</h3>
      <p className="sub">Полный конвейер: от образца до готового отчёта</p>

      {/* Блок технических преимуществ и модулей на Tailwind */}
      <div className="my-8 flex flex-col gap-10">
        
        {/* Секция 1: Ключевые преимущества */}
        <section className="features-block">
          <h4 className="flex items-center gap-2 mb-4 text-xl font-semibold">
            <span>🚀</span> Ключевые преимущества системы
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-card p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
              <strong className="block mb-1 text-slate-900">Процесс «Образец на входе — продукт на выходе»:</strong> 
              <span className="text-slate-600">Полная автоматизация всего конвейера NGS — от экстракции образца до пре-подготовки библиотек, гибридизационного захвата и контроля качества без участия человека.</span>
            </div>
            <div className="feature-card p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
              <strong className="block mb-1 text-slate-900">Защита от ложных настроек (Адаптивность):</strong> 
              <span className="text-slate-600">Умное ПО самостоятельно распознает количество загруженных образцов, автоматически распределяет лунки и подбирает режимы сброса наконечников, исключая повторные ручные перенастройки.</span>
            </div>
            <div className="feature-card p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
              <strong className="block mb-1 text-slate-900">Встроенный флуориметрический контроль:</strong> 
              <span className="text-slate-600">Наличие встроенного модуля Qubit позволяет системе автоматически рассчитывать объемы ДНК, проводить разведения и пулирование библиотек по результатам реальных измерений.</span>
            </div>
            <div className="feature-card p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
              <strong className="block mb-1 text-slate-900">Защита от сбоев (Продолжение работы):</strong> 
              <span className="text-slate-600">Программное обеспечение поддерживает функцию продолжения прерванного цикла — эксперимент можно возобновить в один клик с любого выбранного шага.</span>
            </div>
            <div className="feature-card p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
              <strong className="block mb-1 text-slate-900">Безопасность и чистота:</strong> 
              <span className="text-slate-600">Корпус оснащен стандартной УФ-лампой для стерилизации, а также поддерживает установку высокоэффективных HEPA-фильтров для защиты от перекрестного загрязнения.</span>
            </div>
            <div className="feature-card p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
              <strong className="block mb-1 text-slate-900">Глубокая прослеживаемость:</strong> 
              <span className="text-slate-600">Система автоматически ведет и сохраняет подробные журналы работы и логи оборудования на протяжении минимум 3 лет для быстрого поиска причин ошибок.</span>
            </div>
          </div>
        </section>

        {/* Секция 2: Температурные модули */}
        <section className="modules-block">
          <h4 className="flex items-center gap-2 mb-4 text-xl font-semibold">
            <span>🧬</span> Встроенные температурные и ПЦР-модули
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-card p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
              <strong className="block mb-1 text-slate-900">Автоматические ПЦР-модули (на 24 или 96 образцов):</strong> 
              <span className="text-slate-600">Робот сам проводит температурные циклы (амплификацию) библиотек. Крышка блока открывается и закрывается автоматически по команде программы. Высокая скорость нагрева и охлаждения (не менее 1.3 °C в секунду) существенно экономит общее время анализа, а ювелирная точность (стабильность температуры ±0.1 °C) гарантирует идеальную повторяемость результатов.</span>
            </div>
            <div className="feature-card p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
              <strong className="block mb-1 text-slate-900">Модуль нагрева и встряхивания (Термошейкер):</strong> 
              <span className="text-slate-600">Позволяет одновременно инкубировать и интенсивно перемешивать реакционные смеси. Он развивает скорость до 3000 оборотов в минуту для достижения абсолютной однородности растворов и может нагревать образцы вплоть до 100 °C.</span>
            </div>
            <div className="feature-card p-4 border border-slate-200 rounded-lg bg-white shadow-sm">
              <strong className="block mb-1 text-slate-900">Термостатический модуль (Охлаждающий стол):</strong> 
              <span className="text-slate-600">Отвечает за бережное хранение капризных ферментов и мастер-миксов прямо в рабочей зоне робота. Модуль работает в диапазоне от 4 до 75 °C, удерживая стабильные +4 °C, чтобы дорогие реагенты не деградировали во время многочасового процесса раскапывания.</span>
            </div>
          </div>
        </section>

      </div>

      {/* Сам интерактивный процесс шагов */}
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
