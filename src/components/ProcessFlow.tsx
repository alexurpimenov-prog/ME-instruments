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
    <div className="process-wrapper max-w-7xl mx-auto px-4 py-12" id="process-section">
      <h3 className="text-3xl font-bold text-center text-blue-900 mb-2">
        Интеграция в безшовный автоматизированный процесс ME Instruments
      </h3>
      <p className="sub text-center text-slate-500 text-lg mb-12">
        Полный конвейер: от образца до готового отчёта
      </p>

      {/* Информационный блок преимуществ и модулей */}
      <div className="flex flex-col gap-14 mb-16">
        
        {/* Секция 1: Ключевые преимущества */}
        <section className="features-block">
          <h4 className="flex items-center gap-3 mb-6 text-2xl font-bold text-slate-800">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-xl">🚀</span> 
            Ключевые преимущества системы
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-card p-6 border border-slate-100 rounded-xl bg-gradient-to-b from-white to-slate-50 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <strong className="block mb-2 text-lg font-semibold text-blue-900">
                Процесс «Образец на входе — продукт на выходе»:
              </strong> 
              <p className="text-slate-600 text-sm leading-relaxed">
                Полная автоматизация всего конвейера NGS — от экстракции образца до пре-подготовки библиотек, гибридизационного захвата и контроля качества без участия человека.
              </p>
            </div>
            <div className="feature-card p-6 border border-slate-100 rounded-xl bg-gradient-to-b from-white to-slate-50 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <strong className="block mb-2 text-lg font-semibold text-blue-900">
                Защита от ложных настроек (Адаптивность):
              </strong> 
              <p className="text-slate-600 text-sm leading-relaxed">
                Умное ПО самостоятельно распознает количество загруженных образцов, автоматически распределяет лунки и подбирает режимы сброса наконечников, исключая повторные ручные перенастройки.
              </p>
            </div>
            <div className="feature-card p-6 border border-slate-100 rounded-xl bg-gradient-to-b from-white to-slate-50 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <strong className="block mb-2 text-lg font-semibold text-blue-900">
                Встроенный флуориметрический контроль:
              </strong> 
              <p className="text-slate-600 text-sm leading-relaxed">
                Наличие встроенного модуля Qubit позволяет системе автоматически рассчитывать объемы ДНК, проводить разведения и пулирование библиотек по результатам реальных измерений.
              </p>
            </div>
            <div className="feature-card p-6 border border-slate-100 rounded-xl bg-gradient-to-b from-white to-slate-50 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <strong className="block mb-2 text-lg font-semibold text-blue-900">
                Защита от сбоев (Продолжение работы):
              </strong> 
              <p className="text-slate-600 text-sm leading-relaxed">
                Программное обеспечение поддерживает функцию продолжения прерванного цикла — эксперимент можно возобновить в один клик с любого выбранного шага.
              </p>
            </div>
            <div className="feature-card p-6 border border-slate-100 rounded-xl bg-gradient-to-b from-white to-slate-50 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <strong className="block mb-2 text-lg font-semibold text-blue-900">
                Безопасность и чистота:
              </strong> 
              <p className="text-slate-600 text-sm leading-relaxed">
                Корпус оснащен стандартной УФ-лампой для стерилизации, а также поддерживает установку высокоэффективных HEPA-фильтров для защиты от перекрестного загрязнения.
              </p>
            </div>
            <div className="feature-card p-6 border border-slate-100 rounded-xl bg-gradient-to-b from-white to-slate-50 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <strong className="block mb-2 text-lg font-semibold text-blue-900">
                Глубокая прослеживаемость:
              </strong> 
              <p className="text-slate-600 text-sm leading-relaxed">
                Система автоматически ведет и сохраняет подробные журналы работы и логи оборудования на протяжении минимум 3 лет для быстрого поиска причин ошибок.
              </p>
            </div>
          </div>
        </section>

        {/* Секция 2: Температурные модули */}
        <section className="modules-block">
          <h4 className="flex items-center gap-3 mb-6 text-2xl font-bold text-slate-800">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 text-xl">🧬</span> 
            Встроенные температурные и ПЦР-модули
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-card p-6 border border-slate-100 rounded-xl bg-gradient-to-b from-white to-slate-50 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <strong className="block mb-2 text-lg font-semibold text-indigo-900">
                Автоматические ПЦР-модули (на 24 или 96 образцов):
              </strong> 
              <p className="text-slate-600 text-sm leading-relaxed">
                Робот сам проводит температурные циклы (амплификацию) библиотек. Крышка блока открывается и закрывается автоматически по команде программы. Высокая скорость нагрева и охлаждения (не менее 1.3 °C в секунду) существенно экономит общее время анализа, а ювелирная точность (стабильность температуры ±0.1 °C) гарантирует идеальную повторяемость результатов.
              </p>
            </div>
            <div className="feature-card p-6 border border-slate-100 rounded-xl bg-gradient-to-b from-white to-slate-50 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <strong className="block mb-2 text-lg font-semibold text-indigo-900">
                Модуль нагрева и встряхивания (Термошейкер):
              </strong> 
              <p className="text-slate-600 text-sm leading-relaxed">
                Позволяет одновременно инкубировать и интенсивно перемешивать реакционные смеси. Он развивает скорость до 3000 оборотов в минуту для достижения абсолютной однородности растворов и может нагревать образцы вплоть до 100 °C.
              </p>
            </div>
            <div className="feature-card p-6 border border-slate-100 rounded-xl bg-gradient-to-b from-white to-slate-50 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <strong className="block mb-2 text-lg font-semibold text-indigo-900">
                Термостатический модуль (Охлаждающий стол):
              </strong> 
              <p className="text-slate-600 text-sm leading-relaxed">
                Отвечает за бережное хранение капризных ферментов и мастер-миксов прямо в рабочей зоне робота. Модуль работает в диапазоне от 4 до 75 °C, удерживая стабильные +4 °C, чтобы дорогие реагенты не деградировали во время многочасового процесса раскапывания.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Интерактивный процесс шагов */}
      <div className="vertical-flow mt-10">
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
