import React, { useState, useEffect } from 'react';

export default function Calculator() {
  const [panelSize, setPanelSize] = useState<number>(100000);
  const [depth, setDepth] = useState<number>(2000);
  const [readType, setReadType] = useState<string>('PE150');
  const [duplicates, setDuplicates] = useState<number>(20);
  const [sequencer, setSequencer] = useState<string>('uniseq2000');
  const [result, setResult] = useState<number | string>('—');

  // Определение эффективной длины чтения
  const getReadLength = (type: string): number => {
    switch (type) {
      case 'PE50': return 100;
      case 'PE75': return 150;
      case 'PE100': return 200;
      case 'PE150': return 300;
      case 'SE50': return 50;
      case 'SE75': return 75;
      case 'SE100': return 100;
      case 'SE150': return 150;
      default: return 300;
    }
  };

  useEffect(() => {
    const reads = sequencer === 'uniseq100' ? 10000000 : 160000000;
    const effectiveReadLength = getReadLength(readType);

    if (panelSize > 0 && depth > 0) {
      // Формула: (Чтения ячейки * (1 - дубликаты/100)) / ((размер панели * глубина) / длина чтения)
      const usefulReads = reads * (1 - duplicates / 100);
      const requiredReadsPerSample = (panelSize * depth) / effectiveReadLength;
      const calculatedSamples = Math.floor(usefulReads / requiredReadsPerSample);

      setResult(calculatedSamples > 0 ? calculatedSamples : 0);
    } else {
      setResult('—');
    }
  }, [panelSize, depth, readType, duplicates, sequencer]);

  return (
    <div className="mt-12 bg-white rounded-2xl shadow-xl border border-slate-100 p-8 max-w-4xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <span className="text-3xl">🧮</span>
        <h3 className="text-2xl font-bold text-slate-800">Калькулятор количества образцов AlNoVar™</h3>
      </div>
      
      <p className="text-slate-600 mb-8 text-sm leading-relaxed">
        Рассчитайте оптимальное количество образцов за один запуск для панелей AlNoVar™ с учётом ПЦР-дубликатов (20% потерь).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Левая колонка: Настройки */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Платформа секвенирования</label>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setSequencer('uniseq100')}
                className={`py-2 px-4 rounded-xl font-medium text-sm transition ${sequencer === 'uniseq100' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
              >
                UniSeq100 (10M чтений)
              </button>
              <button 
                onClick={() => setSequencer('uniseq2000')}
                className={`py-2 px-4 rounded-xl font-medium text-sm transition ${sequencer === 'uniseq2000' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
              >
                UniSeq2000 (160M чтений)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Размер панели (bp)</label>
            <input 
              type="number" 
              value={panelSize} 
              onChange={(e) => setPanelSize(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Глубина покрытия (×)</label>
            <input 
              type="number" 
              value={depth} 
              onChange={(e) => setDepth(Number(e.target.value))}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Длина чтения</label>
              <select 
                value={readType} 
                onChange={(e) => setReadType(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800"
              >
                {['PE50', 'PE75', 'PE100', 'PE150', 'SE50', 'SE75', 'SE100', 'SE150'].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">ПЦР-дубликаты (%)</label>
              <input 
                type="number" 
                value={duplicates} 
                onChange={(e) => setDuplicates(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
              />
            </div>
          </div>
        </div>

        {/* Правая колонка: Результат */}
        <div className="bg-slate-50 rounded-2xl p-6 flex flex-col justify-center items-center border border-slate-100 text-center">
          <span className="text-slate-500 uppercase tracking-wider text-xs font-bold mb-2">Итоговая вместимость ячейки</span>
          <div className="text-5xl font-black text-blue-600 my-2">
            {result}
          </div>
          <span className="text-slate-700 font-semibold text-base">образцов за один запуск</span>
          <div className="mt-6 pt-4 border-t border-slate-200/60 w-full text-left text-xs text-slate-500 leading-relaxed">
            <span className="font-semibold block mb-1">Формула расчёта:</span>
            образцов = (чтения ячейки × (1 − дубликаты/100)) / ((размер панели в bp × глубина) / эффективная длина чтения)
          </div>
        </div>
      </div>
    </div>
  );
}

