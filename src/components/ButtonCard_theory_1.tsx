import React, { useState } from 'react';

// Описываем типы для входящих параметров (props) кнопки в стиле TypeScript
interface ButtonCardProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonCard({ onClick }: ButtonCardProps): React.JSX.Element {
  // Состояние для отслеживания наведения курсора мыши (hover эффект)
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'sans-serif' }}>
      <button
        onClick={onClick}
        type="button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          marginTop: '20px',
          marginBottom: '40px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          boxShadow: isHovered 
            ? '0 20px 25px -5px rgba(0, 102, 204, 0.08), 0 10px 10px -5px rgba(0, 102, 204, 0.04)' 
            : '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
          border: isHovered ? '1px solid #0066cc' : '1px solid #f1f5f9',
          padding: '20px 32px',
          width: '100%',
          boxSizing: 'border-box',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          transition: 'all 0.3s ease-in-out',
          outline: 'none',
          transform: isHovered ? 'translateY(-1px)' : 'none'
        }}
      >
        {/* Левая часть: Иконка-эмодзи и название кнопки */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', pointerEvents: 'none' }}>
          <div style={{
            padding: '10px',
            backgroundColor: isHovered ? '#0066cc' : '#eff6ff',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s'
          }}>
            <span style={{ fontSize: '20px' }}>🛡️</span>
          </div>
          
          <h3 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: isHovered ? '#0066cc' : '#1e293b',
            margin: 0,
            lineHeight: '1.4',
            transition: 'color 0.3s',
            textAlign: 'left'
          }}>
            Хочу знать больше про технические преимущества
          </h3>
        </div>

        {/* Правая часть: Текст-указатель со стрелочкой */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '14px',
          fontWeight: '600',
          color: isHovered ? '#0066cc' : '#64748b',
          transition: 'color 0.3s',
          flexShrink: 0,
          pointerEvents: 'none'
        }}>
          <span>Подробнее</span>
          <span style={{ 
            fontSize: '16px',
            transition: 'transform 0.3s',
            display: 'inline-block',
            transform: isHovered ? 'translate(3px, -3px)' : 'none'
          }}>↗</span>
        </div>
      </button>
    </div>
  );
}

