import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SequencerCard } from './components/SequencerCard';
import Calculator from './components/Calculator';
import { ProcessFlow } from './components/ProcessFlow';
import { TechnologyCard } from './components/TechnologyCard';
import { DisclaimerCard } from './components/DisclaimerCard';
import { ImageManagerModal } from './components/ImageManagerModal';
import { SEQUENCERS, PROCESS_STEPS } from './data';
import { Image as ImageIcon } from 'lucide-react';
import { getAllImagesFromDB, saveImageToDB, clearAllImagesFromDB } from './utils/imageStorage';

export default function App() {
  const [imageOverrides, setImageOverrides] = useState<Record<string, string>>({});
  const [isManagerOpen, setIsManagerOpen] = useState(false);

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

<Calculator />

{/* Unified Technology & Scientific Foundation Card */}
<TechnologyCard />

{/* Seamless Process Flow */}
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
