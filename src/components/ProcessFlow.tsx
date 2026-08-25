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
  Layers,
  Plus,
  Server,
  Zap,
  CheckCircle,
  Clock
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

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '2.5rem', 
        marginBottom: '4rem' 
      }}>
        
        {/* ================= ЛЕВАЯ КОЛОНКА: UNIPre-1 ================= */}
        <div className="system-column-left">
          <div style={{ borderBottom: '2px solid #0066cc', paddingBottom: '8px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#0066cc', margin: 0 }}>UNIPre-1</h3>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 2rem 0' }}>
            <div className="image-placeholder-large" style={{ width: '100%', maxWidth: '500px' }}>
              <ImageSlot
                src="images/UNIPre-1.jpg"
                alt="UNIPre-1"
                overrideSrc={imageOverrides["images/UNIPre-1.jpg"]}
                onImageUploaded={onImageUploaded}
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="unified-tech-card" style={{ marginBottom: '2rem', boxShadow: 'none', padding: '12px 0' }}>
            <div className="unified-tech-header">
              <div className="unified-tech-badge">
                <Layers className="w-4 h-4 text-[#0066cc]" />
                <span>Простота и автономность</span>
              </div>
              <h3 className="unified-tech-title" style={{ fontSize: '1.4rem', marginTop: '8px' }}>
                Первая в мире картриджная полностью автоматизированная система подготовки библиотек
              </h3>
            </div>

            <div className="unified-tech-list" style={{ marginTop: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 2rem 0' }}>
                <div className="image-placeholder-large" style={{ width: '100%', maxWidth: '500px' }}>
                  <ImageSlot
                    src="images/UNIPre-1_3.png"
                    alt="UNIPre-1 схема работы"
                    overrideSrc={imageOverrides["images/UNIPre-1_3.png"]}
                    onImageUploaded={onImageUploaded}
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="unified-tech-item">
                <div className="unified-tech-icon-wrapper">
                  <Cpu className="w-5 h-5 text-[#0066cc]" />
                </div>
                <div className="unified-tech-item-content">
                  <h4 className="unified-tech-item-title">«Образец на входе — библиотека на выходе»</h4>
                  <p className="unified-tech-item-desc">
                    Система автоматизирует весь процесс от библиотеки до гибридизационного захвата. Пользователю достаточно загрузить образец и картриджи с премиксованными реагентами. Весь процесс проходит внутри закрытой системы, что сводит к минимуму риск контаминации и ошибки оператора.
                  </p>
                </div>
              </div>

              <div className="unified-tech-item">
                <div className="unified-tech-icon-wrapper">
                  <Clock className="w-5 h-5 text-[#0066cc]" />
                </div>
                <div className="unified-tech-item-content">
                  <h4 className="unified-tech-item-title">Библиотека за 8 часов</h4>
                  <p className="unified-tech-item-desc">
                    Уникальная картриджная технология и минимизация работы оператора позволяет подготовить гибридизационную библиотеку за 8 часов, что в сочетании со скоростью работы секвенатора UniSeq100 от 7 часов дает возможность получения результатов секвенирования уже на следующий день.
                  </p>
                </div>
              </div>

              <div className="unified-tech-item">
                <div className="unified-tech-icon-wrapper">
                  <Settings className="w-5 h-5 text-[#0066cc]" />
                </div>
                <div className="unified-tech-item-content">
                  <h4 className="unified-tech-item-title">Идеальное решение для малых и средних лабораторий</h4>
                  <p className="unified-tech-item-desc">
                    Это единственная в своем роде система, ориентированная на работу с одним образцом за прогон. Такая конструкция полностью исключает простои и перерасход дорогостоящих реагентов, что критически важно при работе с редкими или небольшими панелями. Это позволяет запускать образцы по мере поступления, а не накапливать их для заполнения 96-луночного планшета.
                  </p>
                </div>
              </div>

              <div className="unified-tech-item">
                <div className="unified-tech-icon-wrapper">
                  <Activity className="w-5 h-5 text-[#0066cc]" />
                </div>
                <div className="unified-tech-item-content">
                  <h4 className="unified-tech-item-title">Масштабируемость под любую мощность</h4>
                  <p className="unified-tech-item-desc">
                    Несмотря на компактность, система гибко масштабируется. Один компьютер может одновременно управлять 8 или 16 модулями UNIPre-1, работающими параллельно. Это позволяет лаборатории наращивать пропускную способность «по модульному принципу», начиная с одного аппарата и постепенно увеличивая парк, не переплачивая за избыточную мощность.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0 2rem 0' }}>
                <div className="image-placeholder-large" style={{ width: '100%', maxWidth: '500px' }}>
                  <ImageSlot
                    src="images/UNIPre-1_2.png"
                    alt="UNIPre-1 масштабируемость"
                    overrideSrc={imageOverrides["images/UNIPre-1_2.png"]}
                    onImageUploaded={onImageUploaded}
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="unified-tech-item">
                <div className="unified-tech-icon-wrapper">
                  <ShieldAlert className="w-5 h-5 text-[#0066cc]" />
                </div>
                <div className="unified-tech-item-content">
                  <h4 className="unified-tech-item-title">Защита от ошибок и прослеживаемость</h4>
                  <p className="unified-tech-item-desc">
                    Как и старшие системы, UNIPre-1 оснащен интеллектуальным ПО, которое контролирует каждый этап. Встроенные алгоритмы автоматически ведут журнал операций, что обеспечивает полную прослеживаемость эксперимента.
                  </p>
                </div>
              </div>

              <div className="unified-tech-item">
                <div className="unified-tech-icon-wrapper">
                  <Zap className="w-5 h-5 text-[#0066cc]" />
                </div>
                <div className="unified-tech-item-content">
                  <h4 className="unified-tech-item-title">Экономия ресурсов и пространства</h4>
                  <p className="unified-tech-item-desc">
                    Картриджи с реагентами поставляются в готовом к работе виде, исключая этап трудоемкого ручного дозирования. Минимальное потребление расходных материалов и компактные размеры делают UNIPre-1 идеальным выбором для лабораторий с ограниченным пространством или бюджетом, где важно качество без лишних затрат.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= ПРАВАЯ КОЛОНКА: UNIPre-24/96 ================= */}
        <div className="system-column-right">
          <div style={{ borderBottom: '2px solid #0066cc', paddingBottom: '8px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#0066cc', margin: 0 }}>UNIPre-24/96</h3>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 2rem 0' }}>
            <div className="image-placeholder-large" style={{ width: '100%', maxWidth: '500px' }}>
              <ImageSlot
                src="images/Liquid_Handing_Workstation_v2.png"
                alt="Liquid Handling Workstation"
                overrideSrc={imageOverrides["images/Liquid_Handing_Workstation_v2.png"]}
                onImageUploaded={onImageUploaded}
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="unified-tech-card" style={{ marginBottom: '2rem', boxShadow: 'none', padding: '12px 0' }}>
            <div className="unified-tech-header">
              <div className="unified-tech-badge">
                <Layers className="w-4 h-4 text-[#0066cc]" />
                <span>Автоматизация и эффективность</span>
              </div>
              <h3 className="unified-tech-title" style={{ fontSize: '1.4rem', marginTop: '8px' }}>
                Полнофункциональная автоматизированная платформа для подготовки библиотек
              </h3>
            </div>

            <div className="unified-tech-list" style={{ marginTop: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', margin: '0 0 2rem 0' }}>
                <div className="image-placeholder-large" style={{ width: '100%', maxWidth: '500px' }}>
                  <ImageSlot
                    src="images/Liquid_Handing_Workstation_v3.png"
                    alt="Liquid Handling Workstation схема"
                    overrideSrc={imageOverrides["images/Liquid_Handing_Workstation_v3.png"]}
                    onImageUploaded={onImageUploaded}
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="unified-tech-item">
                <div className="unified-tech-icon-wrapper">
                  <Cpu className="w-5 h-5 text-[#0066cc]" />
                </div>
                <div className="unified-tech-item-content">
                  <h4 className="unified-tech-item-title">«Образец на входе — продукт на выходе»</h4>
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

          <div className="unified-tech-card" style={{ boxShadow: 'none', padding: '12px 0' }}>
            <div className="unified-tech-header">
              <div className="unified-tech-badge">
                <Thermometer className="w-4 h-4 text-[#0066cc]" />
                <span>Термоконтроль и термостабилизация</span>
              </div>
              <h3 className="unified-tech-title" style={{ fontSize: '1.4rem', marginTop: '8px' }}>
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
        </div>
      </div>

      {/* ================= БЛОК БИОИНФОРМАТИКИ ================= */}
      <div style={{ 
        marginTop: '2rem', 
        marginBottom: '3rem',
        borderTop: '1px solid #e2e8f0',
        paddingTop: '3rem'
      }}>
        <div className="unified-tech-card" style={{ 
          boxShadow: 'none', 
          padding: '12px 0',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div className="unified-tech-header">
            <div className="unified-tech-badge">
              <Server className="w-4 h-4 text-[#0066cc]" />
              <span>Биоинформатика</span>
            </div>
            <h3 className="unified-tech-title" style={{ fontSize: '1.4rem', marginTop: '8px' }}>
              Лёгкая биоинформатика у вас на компьютере
            </h3>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0 2rem 0' }}>
            <div className="image-placeholder-large" style={{ width: '100%', maxWidth: '500px' }}>
              <ImageSlot
                src="images/BI.png"
                alt="Биоинформатика"
                overrideSrc={imageOverrides["images/BI.png"]}
                onImageUploaded={onImageUploaded}
                className="w-full h-full"
              />
            </div>
          </div>

          <div style={{ 
            padding: '0 1rem',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <p style={{ 
              fontSize: '1rem', 
              color: '#475569', 
              lineHeight: '1.7',
              margin: 0
            }}>
              Готовые пайплайны и интеграция с биоинформатическими базами устанавливается на ваши компьютеры или сервера, или поставляются в виде готовой биоинформатической станции.
            </p>
          </div>
        </div>
      </div>

      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="process-step" id={`step-${step.number}`}>
            <span className="step-number">{step.number}</span>
            <div className="step-icon">{step.icon}</div>
            <h4 className="step-title">{step.title}</h4>
            <p className="step-description">{step.description}</p>
          </div>
          {index < steps.length - 1 && (
            <div className="step-arrow">▼</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
