import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

export const HistoryCard: React.FC = () => {
  return (
    <div className="history-card" id="history-section">
      <div className="history-header">
        <div className="history-badge">
          <GraduationCap className="w-4 h-4 text-[#0066cc]" />
          <span>Научное лидерство и преемственность</span>
        </div>
        <h3 className="history-title">
          Секвенатор ME UniSeq: Эволюция SBS от создателя фундаментальной химии NGS
        </h3>
      </div>

      <div className="history-content-wrapper">
        <div className="history-body">
          <p className="history-paragraph">
            В основе платформы ME UniSeq лежит научное наследие профессора Колумбийского университета <strong>Цзиньюэ Чжу (Jingyue Ju)</strong> — одного из главных авторов-разработчиков и пионеров химии SBS (Sequencing by Synthesis). Именно его фундаментальные патенты на обратимые терминаторы в начале 2000-х годов сделали возможным появление современного высокопроизводительного секвенирования.
          </p>

          <p className="history-paragraph">
            Совершив новый технологический прорыв, команда профессора Чжу разработала запатентованную монохромную химию (1-Color SBS), выведя надежность и доступность геномных исследований на принципиально иной уровень:
          </p>

          <ul className="history-list">
            <li className="history-list-item">
              <span className="history-list-bullet">
                <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
              </span>
              <span>
                <strong>Имя, заслужившее доверие:</strong> Технология создана разработчиком базовых принципов SBS, что гарантирует высокое качество данных (Q30 ≥ 85%) и полную научную преемственность.
              </span>
            </li>

            <li className="history-list-item">
              <span className="history-list-bullet">
                <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
              </span>
              <span>
                <strong>Инновационная монохромная оптика:</strong> Считывание всех четырех оснований с помощью всего одного флуорофора позволило уйти от громоздкой системы лазеров и дихроичных зеркал.
              </span>
            </li>

            <li className="history-list-item">
              <span className="history-list-bullet">
                <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
              </span>
              <span>
                <strong>Максимальная отказоустойчивость:</strong> Упрощение оптико-механического блока снизило себестоимость прибора, повысило его устойчивость к внешним вибрациям и минимизировало риск сервисных поломок.
              </span>
            </li>

            <li className="history-list-item">
              <span className="history-list-bullet">
                <CheckCircle2 className="w-4 h-4 text-[#0066cc]" />
              </span>
              <span>
                <strong>Доступность каждого запуска:</strong> Эффективная ферментативная регенерация и пассивные прозрачные чипы существенно снижают себестоимость анализа, делая прибор идеальным решением для рутинной клинической диагностики и tNGS.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

