import React from 'react';
import { Upload, X, RefreshCw, CheckCircle2, Image as ImageIcon, FolderArchive } from 'lucide-react';
import { SEQUENCERS, PROCESS_STEPS } from '../data';
import { getDefaultImage } from '../defaultPlaceholders';

interface ImageManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageOverrides: Record<string, string>;
  onImageUploaded: (src: string, dataUrl: string) => void;
  onResetImages: () => void;
}

export const ImageManagerModal: React.FC<ImageManagerModalProps> = ({
  isOpen,
  onClose,
  imageOverrides,
  onImageUploaded,
  onResetImages,
}) => {
  if (!isOpen) return null;

  const allImages = [
    { src: 'images/Logo.png', title: 'Логотип ME Instruments', category: 'Шапка' },
    ...SEQUENCERS.map((s) => ({ src: s.imageSrc, title: `Секвенатор ${s.name}`, category: 'Секвенаторы' })),
    ...PROCESS_STEPS.map((p) => ({ src: p.imageSrc, title: `Шаг ${p.number}: ${p.title}`, category: 'Процесс' })),
  ];

  // Remove duplicates
  const uniqueImages = Array.from(new Map(allImages.map(item => [item.src, item])).values());

  const handleFileUpload = (src: string, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        onImageUploaded(src, result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleBulkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files as FileList).forEach((file: File) => {
      const fileName = file.name;
      // Match by exact filename or partial name
      const matched = uniqueImages.find(
        (img) => img.src.toLowerCase().endsWith(fileName.toLowerCase()) ||
                 img.src.toLowerCase().includes(fileName.toLowerCase().split('.')[0])
      );
      if (matched) {
        handleFileUpload(matched.src, file);
      }
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden border border-[#d0e0f0] flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#0066cc] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ImageIcon className="w-5 h-5" />
            <h3 className="text-lg font-bold">Менеджер изображений страницы</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="bg-[#f0f7ff] border border-[#b8daff] p-4 rounded-xl text-sm text-[#004085] flex flex-col gap-2">
            <p className="font-semibold flex items-center gap-2">
              💡 Загрузите ваши изображения:
            </p>
            <p className="text-xs text-[#556980]">
              Вы можете загрузить изображения здесь, либо перетащить файл прямо на любой блок на странице. Загруженные изображения сохраняются в браузере.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <label className="bg-[#0066cc] hover:bg-[#0052a3] text-white text-xs font-semibold px-3 py-1.5 rounded-md cursor-pointer flex items-center gap-1.5 shadow-xs transition-colors">
                <FolderArchive className="w-3.5 h-3.5" />
                <span>Загрузить несколько файлов сразу</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleBulkUpload}
                  className="hidden"
                />
              </label>

              {Object.keys(imageOverrides).length > 0 && (
                <button
                  type="button"
                  onClick={onResetImages}
                  className="bg-white hover:bg-red-50 text-red-600 border border-red-200 text-xs font-semibold px-3 py-1.5 rounded-md cursor-pointer flex items-center gap-1.5 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Сбросить загрузки ({Object.keys(imageOverrides).length})</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {uniqueImages.map((img) => {
              const isUploaded = !!imageOverrides[img.src];
              const fileName = img.src.split('/').pop();

              return (
                <div
                  key={img.src}
                  className={`p-3.5 rounded-xl border transition-all flex items-center gap-3 ${
                    isUploaded
                      ? 'border-emerald-300 bg-emerald-50/40'
                      : 'border-[#e0e7ee] bg-[#fafbfc] hover:border-[#0066cc]/40'
                  }`}
                >
                  <div className="w-16 h-16 rounded-lg bg-white border border-[#e0e7ee] overflow-hidden flex-shrink-0 flex items-center justify-center relative group p-1">
                    <img
                      src={imageOverrides[img.src] || getDefaultImage(img.src) || img.src}
                      alt={img.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-[#003366] truncate">{img.title}</div>
                    <div className="text-[11px] font-mono text-[#0066cc] truncate mt-0.5">{fileName}</div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <label className="text-[11px] bg-white hover:bg-[#e6f0fa] border border-[#0066cc] text-[#0066cc] font-medium px-2 py-0.5 rounded cursor-pointer flex items-center gap-1">
                        <Upload className="w-2.5 h-2.5" />
                        <span>{isUploaded ? 'Заменить' : 'Выбрать файл'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(img.src, file);
                          }}
                          className="hidden"
                        />
                      </label>
                      {isUploaded && (
                        <span className="text-[11px] text-emerald-700 flex items-center gap-0.5 font-medium">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Загружено
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f8f9fa] border-t border-[#e9ecef] px-6 py-3.5 flex justify-between items-center text-xs text-[#666]">
          <span>Всего изображений: {uniqueImages.length} | Загружено: {Object.keys(imageOverrides).length}</span>
          <button
            type="button"
            onClick={onClose}
            className="bg-[#0066cc] hover:bg-[#0052a3] text-white font-medium px-4 py-1.5 rounded-lg cursor-pointer transition-colors"
          >
            Готово
          </button>
        </div>
      </div>
    </div>
  );
};
