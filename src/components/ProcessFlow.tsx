import React from 'react';
import { ProcessStepData } from '../types';
import { ImageSlot } from './ImageSlot';

interface ProcessFlowProps {
  steps: ProcessStepData[];
  imageOverrides: Record<string, string>;
  onImageUploaded: (src: string, dataUrl: string) => void;
}

export const ProcessFlow: React.FC<ProcessFlowProps> = ({
  steps,
  imageOverrides,
  onImageUploaded,
}) => {
  return (
    <div className="process-wrapper" id="process-section">
      <h3>Интеграция в безшовный автоматизированный процесс ME Instruments</h3>
      <p className="sub">Полный конвейер: от образца до готового отчёта</p>

      <div className="vertical-flow">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="process-step" id={`step-${step.number}`}>
              <span className="step-num">{step.number}</span>
              <span className="step-icon">{step.icon}</span>
              <div className="step-content">
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.description}</div>
              </div>
              <div className="step-image-placeholder">
                <ImageSlot
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  overrideSrc={imageOverrides[step.imageSrc]}
                  onImageUploaded={onImageUploaded}
                  className="w-full h-full"
                />
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="vertical-arrow" aria-hidden="true">▼</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
