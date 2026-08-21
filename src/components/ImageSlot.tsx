import React, { useState, useEffect, useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { getDefaultImage } from '../defaultPlaceholders';

interface ImageSlotProps {
  src: string;
  alt: string;
  className?: string;
  placeholderHeight?: string;
  label?: string;
  onImageUploaded?: (src: string, dataUrl: string) => void;
  overrideSrc?: string;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  src,
  alt,
  className = '',
  onImageUploaded,
  overrideSrc,
}) => {
  const [useFallback, setUseFallback] = useState(false);
  const [hasFatalError, setHasFatalError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // If user uploaded a replacement, prioritize it.
  // Otherwise, if original src failed to load, fall back to our high-res built-in illustration.
  const fallbackSvg = getDefaultImage(src);
  const activeSrc = overrideSrc || (useFallback ? fallbackSvg : src);

  // Reset fallback and fatal error when overrideSrc arrives
  useEffect(() => {
    if (overrideSrc) {
      setHasFatalError(false);
      setUseFallback(false);
    }
  }, [overrideSrc]);

  const handleImageError = () => {
    if (overrideSrc) {
      // User uploaded image failed
      setHasFatalError(true);
    } else if (!useFallback && fallbackSvg) {
      // Switch to vector fallback illustration
      setUseFallback(true);
    } else {
      // Both original and fallback failed
      setHasFatalError(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setHasFatalError(false);
          setUseFallback(false);
          onImageUploaded?.(src, result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setHasFatalError(false);
          setUseFallback(false);
          onImageUploaded?.(src, result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const fileName = src.split('/').pop() || src;
  const isCustomUploaded = Boolean(overrideSrc);

  return (
    <div
      className={`relative group flex items-center justify-center cursor-pointer ${className} ${
        isDragging ? 'ring-2 ring-[#0066cc] ring-offset-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => fileInputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      title={`Нажмите или перетащите файл, чтобы заменить ${fileName}`}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {!hasFatalError && activeSrc ? (
        <img
          src={activeSrc}
          alt={alt}
          onError={handleImageError}
          className="w-full h-full object-contain mx-auto block transition-transform duration-200 group-hover:scale-[1.01]"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center bg-[#f0f4f8] text-[#556980] select-none rounded-lg border border-dashed border-[#b8daff]">
          <div className="w-10 h-10 rounded-full bg-white/90 shadow-xs flex items-center justify-center mb-2 text-[#0066cc]">
            <ImageIcon className="w-5 h-5" />
          </div>
          <p className="text-xs font-semibold text-[#003366] max-w-[90%] truncate">{alt}</p>
          <span className="text-[11px] font-mono text-[#0066cc] mt-0.5 bg-white/90 px-2 py-0.5 rounded border border-[#d0e0f0]">
            {fileName}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
            className="mt-2 text-[11px] bg-[#0066cc] hover:bg-[#004c99] text-white px-3 py-1 rounded shadow-xs flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Upload className="w-3 h-3" />
            <span>Загрузить фото</span>
          </button>
        </div>
      )}

      {/* Quick hover upload indicator */}
      {!hasFatalError && isHovered && (
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] rounded-lg flex items-center justify-center gap-2 transition-all p-2 animate-in fade-in duration-150">
          <div className="bg-white text-[#0066cc] text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg flex items-center gap-1.5 hover:bg-[#f0f7ff] transition-all">
            <Upload className="w-3.5 h-3.5" />
            <span>{isCustomUploaded ? 'Заменить фото' : `Загрузить ${fileName}`}</span>
          </div>
        </div>
      )}
    </div>
  );
};
