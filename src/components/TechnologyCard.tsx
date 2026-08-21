import React from 'react';
import { Award, Sparkles, Cpu, DollarSign, Zap, ShieldCheck, GraduationCap } from 'lucide-react';

export const TechnologyCard: React.FC = () => {
  return (
    <div className="unified-tech-card" id="technology-section">
      {/* Header */}
      <div className="unified-tech-header">
        <div className="unified-tech-badge">
          <GraduationCap className="w-4 h-4 text-[#0066cc]" />
          <span>Научное лидерство и запатентованные технологии</span>
        </div>
        <h3 className="unified-tech-title">
          Секвенаторы ME UniSeq: Эволюция SBS от создателя фундаментальной химии NGS
        </h3>
      </div>

      {/* Narrative & Scientific Foundation */}
      <div className="unified-tech-intro-box">
        <p className="unified-tech-intro-p">
          В основе платформы ME UniSeq лежит научное наследие профессора Колумбийского университета <strong>Цзиньюэ Чжу (Jingyue Ju)</strong> — одного из ключевых авторов-разработчиков и пионеров химии SBS (Sequencing by Synthesis). Именно его фундаментальные патенты на обратимые терминаторы в начале 2000-х годов сделали возможным появление современного высокопроизводительного секвенирования и стали золотым стандартом мировой геномики.
        </p>
        <p className="unified-tech-intro-p highlight">
          Сегодня профессор Чжу является <strong>главным научным руководителем ME Instruments</strong>. Совершив новый технологический прорыв, его команда разработала запатентованную монохромную химию (1-Color SBS) — прямую эволюцию оригинальных идей. Это позволило радикально упростить оптику приборов и сделать клиническую NGS-диагностику по-настоящему надежной, быстрой и экономически доступной для каждой лаборатории.
        </p>
      </div>

      {/* Logical Structured Grid of Advantages */}
      <div className="unified-tech-grid">
        {/* 1. Scientific Heritage & Trust */}
        <div className="unified-tech-item">
          <div className="unified-tech-icon-wrapper">
            <Award className="w-5 h-5 text-[#0066cc]" />
          </div>
          <div className="unified-tech-item-content">
            <h4 className="unified-tech-item-title">Имя, заслужившее доверие (Золотой стандарт SBS)</h4>
            <p className="unified-tech-item-desc">
              Технология создана разработчиком базовых принципов SBS, что гарантирует высочайшее качество данных (Q30 ≥ 85%) и полную научную преемственность методик с мировыми стандартами.
            </p>
          </div>
        </div>

        {/* 2. Innovative Monochrome Optics */}
        <div className="unified-tech-item">
          <div className="unified-tech-icon-wrapper">
            <Sparkles className="w-5 h-5 text-[#0066cc]" />
          </div>
          <div className="unified-tech-item-content">
            <h4 className="unified-tech-item-title">Инновационная монохромная оптика (1-Color SBS)</h4>
            <p className="unified-tech-item-desc">
              Считывание всех 4 оснований с помощью одного флуорофора позволило уйти от громоздкой системы лазеров и дихроичных зеркал, превратив секвенатор в эргономичный настольный прибор.
            </p>
          </div>
        </div>

        {/* 3. Reliability & Fault Tolerance */}
        <div className="unified-tech-item">
          <div className="unified-tech-icon-wrapper">
            <Cpu className="w-5 h-5 text-[#0066cc]" />
          </div>
          <div className="unified-tech-item-content">
            <h4 className="unified-tech-item-title">Максимальная надежность и отказоустойчивость</h4>
            <p className="unified-tech-item-desc">
              Упрощение оптико-механического тракта снизило нагрев, повысило виброустойчивость прибора и свело к минимуму риски сервисных поломок даже при интенсивной клинической нагрузке.
            </p>
          </div>
        </div>

        {/* 4. Cost Efficiency & Low Startup Threshold */}
        <div className="unified-tech-item">
          <div className="unified-tech-icon-wrapper">
            <DollarSign className="w-5 h-5 text-[#0066cc]" />
          </div>
          <div className="unified-tech-item-content">
            <h4 className="unified-tech-item-title">Низкий порог запуска и рентабельность</h4>
            <p className="unified-tech-item-desc">
              Пассивные проточные чипы и эффективная ферментативная регенерация существенно снижают себестоимость. Больше не нужно копить пробы неделями — выгодно запускать анализ каждый день.
            </p>
          </div>
        </div>

        {/* 5. Speed (7 to 24 Hours) */}
        <div className="unified-tech-item">
          <div className="unified-tech-icon-wrapper">
            <Zap className="w-5 h-5 text-[#0066cc]" />
          </div>
          <div className="unified-tech-item-content">
            <h4 className="unified-tech-item-title">Высокая скорость (от 7 до 24 часов)</h4>
            <p className="unified-tech-item-desc">
              Полный цикл тестирования занимает от 7 до 24 часов, что критически важно для экстренной диагностики инфекций (tNGS), онкопанелей и оперативного назначения таргетной терапии.
            </p>
          </div>
        </div>

        {/* 6. Technological Independence */}
        <div className="unified-tech-item">
          <div className="unified-tech-icon-wrapper">
            <ShieldCheck className="w-5 h-5 text-[#0066cc]" />
          </div>
          <div className="unified-tech-item-content">
            <h4 className="unified-tech-item-title">100% технологическая независимость</h4>
            <p className="unified-tech-item-desc">
              Собственная запатентованная разработка ME Instruments (от реагентов до софта) гарантирует стабильность цен, бесперебойность поставок и отсутствие санкционных рисков.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
