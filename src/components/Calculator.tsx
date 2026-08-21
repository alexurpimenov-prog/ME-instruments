import React, { useState, useEffect } from 'react';

export default function Calculator() {
  const [panelSize, setPanelSize] = useState<number>(100000);
  const [depth, setDepth] = useState<number>(2000);
  const [readType, setReadType] = useState<string>('PE150');
  const [duplicates, setDuplicates] = useState<number>(20);
  const [sequencer, setSequencer] = useState<string>('uniseq2000');
  const [result, setResult] = useState<number | string>('—');

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
      const usefulReads = reads * (1 - duplicates / 100);
      const requiredReadsPerSample = (panelSize * depth) / effectiveReadLength;
      const calculatedSamples = Math.floor(usefulReads / requiredReadsPerSample);
      setResult(calculatedSamples > 0 ? calculatedSamples : 0);
    } else {
      setResult('—');
    }
  }, [panelSize, depth, readType, duplicates, sequencer]);

  return (
    <div style={{
      marginTop: '40px',
      marginBottom: '40px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      border: '1px solid #f1f5f9',
      padding: '32px',
      maxWidth: '1000px',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <span style={{ fontSize: '28px' }}>🧮</span>
        <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
          Калькулятор количества образцов AlNoVar™
        </h3>
      </div>
      
      <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px', lineHeight: '1.5', margin: '0 0 24px 0' }}>
        Рассчитайте оптимальное количество образцов за один запуск для панелей AlNoVar™ с учётом ПЦР-дубликатов (20% потерь).
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
        {/* Левая колонка: Ввод данных */}
        <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>
              Платформа секвенирования
            </label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                type="button"
                onClick={() => setSequencer('uniseq100')}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: sequencer === 'uniseq100' ? '#0066cc' : '#f8fafc',
                  color: sequencer === 'uniseq100' ? '#ffffff' : '#64748b',
                  boxShadow: sequencer === 'uniseq100' ? '0 4px 6px -1px rgba(0, 102, 204, 0.2)' : 'none'
                }}
              >
                UniSeq100 (10M чтений)
              </button>
              <button 
                type="button"
                onClick={() => setSequencer('uniseq2000')}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: '500',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: sequencer === 'uniseq2000' ? '#0066cc' : '#f8fafc',
                  color: sequencer === 'uniseq2000' ? '#ffffff' : '#64748b',
                  boxShadow: sequencer === 'uniseq2000' ? '0 4px 6px -1px rgba(0, 102, 204, 0.2)' : 'none'
                }}
              >
                UniSeq2000 (160M чтений)
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 200px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
                Размер панели (bp)
              </label>
              <input 
                type="number" 
                value={panelSize} 
                onChange={(e) => setPanelSize(Number(e.target.value))}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  fontSize: '14px',
                  color: '#334155',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ flex: '1 1 200px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
                Глубина покрытия (×)
              </label>
              <input 
                type="number" 
                value={depth} 
                onChange={(e) => setDepth(Number(e.target.value))}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  fontSize: '14px',
                  color: '#334155',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 200px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
                Длина чтения
              </label>
              <select 
                value={readType} 
                onChange={(e) => setReadType(e.target.value)}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#ffffff',
                  fontSize: '14px',
                  color: '#334155',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {['PE50', 'PE75', 'PE100', 'PE150', 'SE50', 'SE75', 'SE100', 'SE150'].map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div style={{ flex: '1 1 200px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
                ПЦР-дубликаты (%)
              </label>
              <input 
                type="number" 
                value={duplicates} 
                onChange={(e) => setDuplicates(Number(e.target.value))}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  fontSize: '14px',
                  color: '#334155',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        </div>

        {/* Правая колонка: Итоговый результат */}
        <div style={{ 
          flex: '1 1 300px', 
          backgroundColor: '#f8fafc', 
          borderRadius: '16px', 
          padding: '24px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          border: '1px solid #f1f5f9',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', uppercase: 'true', tracking: '0.05em', marginBottom: '8px', textTransform: 'uppercase' }}>
            Итоговая вместимость ячейки
          </span>
          <div style={{ fontSize: '56px', fontWeight: '900', color: '#0066cc', lineHeight: '1', margin: '12px 0' }}>
            {result}
          </div>
          <span style={{ fontSize: '15px', fontWeight: '600', color: '#334155' }}>
            образцов за один запуск
          </span>
          <div style={{ 
            marginTop: '24px', 
            paddingTop: '16px', 
            borderTop: '1px solid #e2e8f0', 
            width: '100%', 
            textAlign: 'left', 
            fontSize: '11px', 
            color: '#64748b', 
            lineHeight: '1.6' 
          }}>
            <strong style={{ color: '#475569', display: 'block', marginBottom: '4px' }}>Формула расчёта:</strong>
            образцов = (чтения ячейки × (1 − дубликаты/100)) / ((размер панели в bp × глубина) / эффективная длина чтения)
          </div>
        </div>
      </div>
    </div>
  );
}
