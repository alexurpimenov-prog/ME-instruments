import React, { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const UNISEQ100_READ_TYPES = ['PE50', 'PE75', 'PE100', 'PE150', 'SE50', 'SE75', 'SE100', 'SE150'];
const UNISEQ2000_READ_TYPES = ['PE50', 'PE75', 'PE100', 'SE50', 'SE75', 'SE100'];

export default function Calculator() {
  const [panelSize, setPanelSize] = useState<number>(100000);
  const [depth, setDepth] = useState<number>(2000);
  const [readType, setReadType] = useState<string>('PE100');
  const [duplicates, setDuplicates] = useState<number>(20);
  const [onTargetPreset, setOnTargetPreset] = useState<string>('ideal');
  const [onTarget, setOnTarget] = useState<number>(100);
  const [sequencer, setSequencer] = useState<string>('uniseq2000');
  const [result, setResult] = useState<number | string>('—');
  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  const availableReadTypes = sequencer === 'uniseq100' ? UNISEQ100_READ_TYPES : UNISEQ2000_READ_TYPES;

  const handleOnTargetPresetChange = (preset: string) => {
    setOnTargetPreset(preset);
    if (preset === 'ideal') {
      setOnTarget(100);
    } else if (preset === 'amplicon') {
      setOnTarget(95);
    } else if (preset === 'hybridization') {
      setOnTarget(80);
    }
  };

  const handleOnTargetCustomChange = (val: number) => {
    setOnTarget(val);
    if (val === 100) {
      setOnTargetPreset('ideal');
    } else if (val === 95) {
      setOnTargetPreset('amplicon');
    } else if (val === 80) {
      setOnTargetPreset('hybridization');
    } else {
      setOnTargetPreset('custom');
    }
  };

  const handleSequencerChange = (newSequencer: string) => {
    if (newSequencer === sequencer) return;

    if (newSequencer === 'uniseq2000') {
      if (readType === 'PE150' || readType === 'SE150') {
        const fallback = readType === 'PE150' ? 'PE100' : 'SE100';
        setReadType(fallback);
        setWarningMessage(`Длина чтения 150 bp (${readType}) недоступна для платформы UniSeq2000. Длина чтения была автоматически переключена на ${fallback}.`);
      } else {
        setWarningMessage(null);
      }
    } else {
      setWarningMessage(null);
    }
    setSequencer(newSequencer);
  };

  const handleReadTypeChange = (newReadType: string) => {
    setReadType(newReadType);
    if (warningMessage) {
      setWarningMessage(null);
    }
  };

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
      default: return 200;
    }
  };

  useEffect(() => {
    const reads = sequencer === 'uniseq100' ? 10000000 : 160000000;
    const effectiveReadLength = getReadLength(readType);

    if (panelSize > 0 && depth > 0) {
      const numerator = reads * (1 - duplicates / 100) * (onTarget / 100) * effectiveReadLength;
      const denominator = panelSize * depth;
      const calculatedSamples = Math.floor(numerator / denominator);
      setResult(calculatedSamples > 0 ? calculatedSamples : 0);
    } else {
      setResult('—');
    }
  }, [panelSize, depth, readType, duplicates, onTarget, sequencer]);

  return (
    <div id="calculator-section" className="container" style={{ paddingLeft: 0, paddingRight: 0, maxWidth: '100%', width: '100%' }}>
      <div style={{
        marginTop: '40px',
        marginBottom: '40px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #f1f5f9',
        padding: '32px',
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: 'sans-serif'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ fontSize: '28px' }}>🧮</span>
          <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
            Калькулятор количества образцов
          </h3>
        </div>
        
        <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px', lineHeight: '1.5', margin: '0 0 24px 0' }}>
          Рассчитайте оптимальное количество образцов на один запуск с учётом параметов панели, секвенирования и ожидаемой доли ПЦР-дубликатов и On-Target.
        </p>

        {warningMessage && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            backgroundColor: '#fffbeb',
            border: '1px solid #fde68a',
            borderRadius: '12px',
            padding: '12px 16px',
            marginBottom: '20px',
            color: '#92400e',
            fontSize: '13px',
            lineHeight: '1.5'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AlertTriangle size={18} style={{ color: '#d97706', flexShrink: 0 }} />
              <span>{warningMessage}</span>
            </div>
            <button
              type="button"
              onClick={() => setWarningMessage(null)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#b45309',
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                borderRadius: '6px'
              }}
              title="Закрыть предупреждение"
            >
              <X size={16} />
            </button>
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
          {/* Левая колонка: Ввод данных */}
          <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '8px' }}>
                Платформа секвенирования
              </label>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  id="calc-platform-uniseq100"
                  type="button"
                  onClick={() => handleSequencerChange('uniseq100')}
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
                  id="calc-platform-uniseq2000"
                  type="button"
                  onClick={() => handleSequencerChange('uniseq2000')}
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
                  id="calc-input-panelsize"
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
                  id="calc-input-depth"
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
                  id="calc-select-readtype"
                  value={readType} 
                  onChange={(e) => handleReadTypeChange(e.target.value)}
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
                  {availableReadTypes.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div style={{ flex: '1 1 200px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569', marginBottom: '6px' }}>
                  ПЦР-дубликаты (%)
                </label>
                <input 
                  id="calc-input-duplicates"
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

            {/* Блок On-Target: выпадающий список прямо над полем ввода */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: '#475569' }}>
                On-Target (%)
              </label>
              
              <select 
                id="calc-select-ontarget-preset"
                value={onTargetPreset} 
                onChange={(e) => handleOnTargetPresetChange(e.target.value)}
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
                  cursor: 'pointer',
                  marginBottom: '2px'
                }}
              >
                <option value="ideal">Идеальные условия (100%)</option>
                <option value="amplicon">Ампликонная панель (~95%)</option>
                <option value="hybridization">Гибридизационная панель (~80%)</option>
                <option value="custom">Свой вариант (пользователь вводит цифру)</option>
              </select>

              <input 
                id="calc-input-ontarget"
                type="number" 
                min="0"
                max="100"
                value={onTarget} 
                onChange={(e) => handleOnTargetCustomChange(Number(e.target.value))}
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
                placeholder="Значение On-Target (%)"
              />
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
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', marginBottom: '8px', textTransform: 'uppercase' }}>
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
              <strong style={{ color: '#475569', display: 'block', marginBottom: '8px' }}>Формула расчёта:</strong>
              
              {/* Контейнер с горизонтальным скроллом */}
              <div style={{
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                padding: '4px 0',
                margin: '0 -14px',
                paddingLeft: '14px',
                paddingRight: '14px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  fontSize: '12px',
                  color: '#1e293b',
                  minWidth: 'fit-content',
                  whiteSpace: 'nowrap'
                }}>
                  <span style={{ fontWeight: '500' }}>Количество образцов</span>
                  <span style={{ fontWeight: '600' }}>=</span>
                  <div style={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    verticalAlign: 'middle'
                  }}>
                    {/* Числитель */}
                    <div style={{
                      borderBottom: '1.5px solid #334155',
                      paddingBottom: '5px',
                      marginBottom: '4px',
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span>Чтения ячейки</span>
                      <span>×</span>
                      <span>(1 − </span>
                      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', margin: '0 2px', fontSize: '11px' }}>
                        <span style={{ borderBottom: '1px solid #334155', paddingBottom: '1px', lineHeight: '1.1' }}>Дубликаты</span>
                        <span style={{ lineHeight: '1.1', paddingTop: '1px' }}>100</span>
                      </span>
                      <span>)</span>
                      <span>×</span>
                      <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', margin: '0 2px', fontSize: '11px' }}>
                        <span style={{ borderBottom: '1px solid #334155', paddingBottom: '1px', lineHeight: '1.1', fontStyle: 'italic', fontFamily: 'serif' }}>OnTarget</span>
                        <span style={{ lineHeight: '1.1', paddingTop: '1px' }}>100</span>
                      </span>
                      <span>×</span>
                      <span>Эффективная длина чтения</span>
                    </div>
                    {/* Знаменатель */}
                    <div style={{
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                      fontWeight: '500',
                      paddingTop: '2px'
                    }}>
                      Размер панели <span style={{ fontStyle: 'italic', fontFamily: 'serif' }}>(bp)</span> × Глубина покрытия
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
