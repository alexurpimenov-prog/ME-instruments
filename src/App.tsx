import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SequencerCard } from './components/SequencerCard';
import Calculator from './components/Calculator';
import { ProcessFlow } from './components/ProcessFlow';
import { TechnologyCard } from './components/TechnologyCard';
import  ButtonCard  from './components/ButtonCard_theory_1';
import { DisclaimerCard } from './components/DisclaimerCard';
import { ImageManagerModal } from './components/ImageManagerModal';
import { SEQUENCERS, PROCESS_STEPS } from './data';
import { Image as ImageIcon } from 'lucide-react';
import { getAllImagesFromDB, saveImageToDB, clearAllImagesFromDB } from './utils/imageStorage';

export default function App() {
  const [imageOverrides, setImageOverrides] = useState<Record<string, string>>({});
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [isTechOpen, setIsTechOpen] = useState(false);

  // Load saved images from IndexedDB on startup
  useEffect(() => {
    getAllImagesFromDB().then((saved) => {
      if (saved && Object.keys(saved).length > 0) {
        setImageOverrides(saved);
      }
    });
  }, []);

  const handleImageUploaded = (src: string, dataUrl: string) => {
    setImageOverrides((prev) => ({
      ...prev,
      [src]: dataUrl,
    }));
    // Persist reliably in IndexedDB
    saveImageToDB(src, dataUrl);
  };

  const handleResetImages = () => {
    setImageOverrides({});
    clearAllImagesFromDB();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        imageOverrides={imageOverrides}
        onImageUploaded={handleImageUploaded}
      />

      {/* Main Section: Sequencers & Automation Flow */}
      <section className="sequencers">
        <div className="container">
          <h2 className="section-title">Секвенаторы UniSeq</h2>
          <p
            style={{
              textAlign: 'center',
              fontSize: '18px',
              marginBottom: '40px',
              color: '#666',
            }}
          >
            Передовые платформы секвенирования для каждой лаборатории
          </p>

          {/* Grid with UniSeq100 and UniSeq2000 */}
          <div className="sequencer-grid">
            {SEQUENCERS.map((sequencer) => (
              <SequencerCard
                key={sequencer.id}
                sequencer={sequencer}
                overrideSrc={imageOverrides[sequencer.imageSrc]}
                onImageUploaded={handleImageUploaded}
              />
            ))}
          </div>

          {/* Unified Technology & Scientific Foundation Card */}
          <TechnologyCard />

          <Calculator />

          {/* Кнопка переключает состояние true/false */}
          <ButtonCard onClick={() => setIsTechOpen(!isTechOpen)} />

          {/* Раскрывающийся блок с техническими преимуществами */}
          <div 
            onClick={() => setIsTechOpen(false)} 
            style={{
              width: '100%',
              boxSizing: 'border-box',
              fontFamily: 'sans-serif',
              maxHeight: isTechOpen ? '800px' : '0px', 
              opacity: isTechOpen ? 1 : 0,
              overflow: 'hidden',
              transition: 'all 0.4s ease-in-out',
              marginTop: isTechOpen ? '-25px' : '0px',
              marginBottom: isTechOpen ? '35px' : '0px',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: isTechOpen ? '1px solid #e2e8f0' : '1px solid transparent',
              padding: isTechOpen ? '28px' : '0px 28px',
              cursor: 'pointer' 
            }}
            title="Кликните, чтобы свернуть"
          >
            <h4 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>
              Инженерные преимущества монохромности и микрофлюидики
            </h4>
            <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#64748b', lineHeight: '1.4' }}>
              Почему секвенаторы UniSeq такие быстрые и точные
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                <span style={{ color: '#0066cc', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                <div>
                  <strong>Мгновенная детекция (Contact Imaging):</strong> Снимок всего поля CMOS-матрицы происходит одномоментно за миллисекунды. Фокус жестко зафиксирован на заводе, а механика потайлового сканирования и XY-столиков отсутствует (экономя до 60–70% времени цикла).
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                <span style={{ color: '#0066cc', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                <div>
                  <strong>Ультрамикрофлюидика и быстрый обмен реагентов:</strong> Объемы реакционных каналов уменьшены до микролитров, а мертвый объем капилляров сведен к нулю. Полная замена буферов и сброс отработанных растворов занимают всего 1–3 секунды вместо 30–60 секунд.
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                <span style={{ color: '#0066cc', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                <div>
                  <strong>Высокоскоростная терморегуляция:</strong> Минимальный объем жидкости в прямом контакте с кремниевой подложкой обеспечивает мгновенный прогрев и охлаждение. Это ускоряет в разы ферментативное включение и химическое расщепление при повышенных температурах.
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                <span style={{ color: '#0066cc', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                <div>
                  <strong>Идеальное совмещение кадров (Zero Alignment Drift):</strong> Отсутствует необходимость программно «сшивать» кадры разных цветов и компенсировать хроматические аберрации линз. Оба монохромных снимка падают на одни и те же пиксели без пространственного сдвига.
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                <span style={{ color: '#0066cc', fontWeight: 'bold', fontSize: '16px' }}>✓</span>
                <div>
                  <strong>Высокий коэффициент собираемости света (SNR):</strong> Флуоресцентное свечение попадает на матрицу напрямую через тончайший слой. Свет не теряется (до 40–60% фотонов) в воздухе, объективах, дихроичных зеркалах и эмиссионных фильтрах классических систем.
                </div>
              </li>
            </ul>
            
            <p style={{ margin: '20px 0 0 0', fontSize: '13px', color: '#94a3b8', fontStyle: 'italic', textAlign: 'right' }}>
              Нажмите в любое место блока, чтобы свернуть его
            </p>
          </div>

          <ProcessFlow
            steps={PROCESS_STEPS}
            imageOverrides={imageOverrides}
            onImageUploaded={handleImageUploaded}
          />

          {/* Regulatory & RU Disclaimer */}
          <DisclaimerCard />
        </div>
      </section>

      {/* Floating Image Manager Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          type="button"
          onClick={() => setIsManagerOpen(true)}
          className="bg-[#0066cc] hover:bg-[#004c99] text-white px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold transition-all hover:scale-105 cursor-pointer border-2 border-white"
          title="Управление изображениями"
        >
          <ImageIcon className="w-4 h-4" />
          <span>Изображения</span>
          {Object.keys(imageOverrides).length > 0 && (
            <span className="bg-white text-[#0066cc] text-xs px-1.5 py-0.2 rounded-full font-bold">
              {Object.keys(imageOverrides).length}
            </span>
          )}
        </button>
      </div>

      {/* Image Manager Modal */}
      <ImageManagerModal
        isOpen={isManagerOpen}
        onClose={() => setIsManagerOpen(false)}
        imageOverrides={imageOverrides}
        onImageUploaded={handleImageUploaded}
        onResetImages={handleResetImages}
      />
    </div>
  );
}
