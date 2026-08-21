import React from 'react';
import { SequencerData } from '../types';
import { ImageSlot } from './ImageSlot';

interface SequencerCardProps {
  sequencer: SequencerData;
  overrideSrc?: string;
  onImageUploaded: (src: string, dataUrl: string) => void;
}

export const SequencerCard: React.FC<SequencerCardProps> = ({
  sequencer,
  overrideSrc,
  onImageUploaded,
}) => {
  return (
    <div className="sequencer-card" id={`card-${sequencer.id}`}>
      <div className="image-placeholder-large">
        <ImageSlot
          src={sequencer.imageSrc}
          alt={sequencer.imageAlt}
          overrideSrc={overrideSrc}
          onImageUploaded={onImageUploaded}
          className="w-full h-full"
        />
      </div>
      <h3>{sequencer.name}</h3>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px', textAlign: 'center' }}>
        {sequencer.subtitle}
      </p>
      
      <ul className="specs-list">
        {sequencer.specs.map((spec, index) => (
          <li key={index}>
            <strong>{spec.label}</strong>
            <span>{spec.value}</span>
          </li>
        ))}
      </ul>

      <div className="highlight-box">
        <h4>Идеален для</h4>
        <ul>
          {sequencer.idealFor.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
