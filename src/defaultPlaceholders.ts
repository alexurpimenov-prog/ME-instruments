/**
 * High-quality fallback SVG illustrations (as base64 / encoded Data URIs)
 * so that any image slot without a user-uploaded photo renders a complete,
 * beautiful preview of the device instead of a broken image placeholder.
 */

function svgToDataUri(svgString: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
}

export const DEFAULT_PLACEHOLDERS: Record<string, string> = {
  'images/Logo.png': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="220" viewBox="0 0 600 220">
      <rect width="600" height="220" rx="16" fill="#ffffff" stroke="#d0e0f0" stroke-width="2"/>
      <g transform="translate(65, 45)">
        <rect x="0" y="5" width="120" height="120" rx="18" fill="#0066cc"/>
        <path d="M30 95 L30 35 L60 70 L90 35 L90 95" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M96 35 L112 35 M96 65 L108 65 M96 95 L112 95" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="145" y="70" font-family="'Inter', Arial, sans-serif" font-size="44" font-weight="bold" fill="#003366">ME Instruments</text>
        <text x="148" y="105" font-family="'Inter', Arial, sans-serif" font-size="18" fill="#0066cc" font-weight="600">Next-Gen Sequencing Systems</text>
      </g>
    </svg>
  `),

  'images/uniseq100.png': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="450" height="350" viewBox="0 0 450 350">
      <rect width="450" height="350" rx="12" fill="#f4f7fb"/>
      <!-- Sequencer Body -->
      <g transform="translate(100, 25)">
        <!-- Main tower -->
        <rect x="25" y="15" width="200" height="255" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="25" y="195" width="200" height="75" rx="0 0 14 14" fill="#64748b"/>
        
        <!-- Screen Bezel -->
        <rect x="40" y="35" width="105" height="145" rx="6" fill="#0f172a"/>
        <!-- Screen Content -->
        <rect x="44" y="39" width="97" height="137" rx="4" fill="#0284c7"/>
        <text x="92" y="65" font-family="'Inter', Arial, sans-serif" font-size="10" fill="#ffffff" text-anchor="middle" font-weight="bold">UniSeq 100</text>
        <circle cx="92" cy="100" r="18" fill="#ffffff" opacity="0.25"/>
        <path d="M85 100 L90 106 L100 94" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <rect x="52" y="130" width="80" height="18" rx="4" fill="#ffffff"/>
        <text x="92" y="143" font-family="'Inter', Arial, sans-serif" font-size="9" fill="#0284c7" text-anchor="middle" font-weight="bold">ГОТОВ К РАБОТЕ</text>

        <!-- Ventilation Perforation -->
        <g fill="#94a3b8" opacity="0.6">
          <circle cx="165" cy="45" r="2"/><circle cx="175" cy="45" r="2"/><circle cx="185" cy="45" r="2"/><circle cx="195" cy="45" r="2"/>
          <circle cx="165" cy="55" r="2"/><circle cx="175" cy="55" r="2"/><circle cx="185" cy="55" r="2"/><circle cx="195" cy="55" r="2"/>
          <circle cx="165" cy="65" r="2"/><circle cx="175" cy="65" r="2"/><circle cx="185" cy="65" r="2"/><circle cx="195" cy="65" r="2"/>
          <circle cx="165" cy="75" r="2"/><circle cx="175" cy="75" r="2"/><circle cx="185" cy="75" r="2"/><circle cx="195" cy="75" r="2"/>
          <circle cx="165" cy="85" r="2"/><circle cx="175" cy="85" r="2"/><circle cx="185" cy="85" r="2"/><circle cx="195" cy="85" r="2"/>
          <circle cx="165" cy="95" r="2"/><circle cx="175" cy="95" r="2"/><circle cx="185" cy="95" r="2"/><circle cx="195" cy="95" r="2"/>
          <circle cx="165" cy="105" r="2"/><circle cx="175" cy="105" r="2"/><circle cx="185" cy="105" r="2"/><circle cx="195" cy="105" r="2"/>
        </g>
        
        <!-- Base Accent -->
        <line x1="45" y1="240" x2="105" y2="240" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
        <!-- Feet -->
        <rect x="40" y="270" width="22" height="8" rx="2" fill="#334155"/>
        <rect x="188" y="270" width="22" height="8" rx="2" fill="#334155"/>
      </g>
      <text x="225" y="325" font-family="'Inter', Arial, sans-serif" font-size="14" fill="#0066cc" text-anchor="middle" font-weight="bold">UniSeq100 (Компактный секвенатор)</text>
    </svg>
  `),

  'images/uniseq2000.png': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="450" height="350" viewBox="0 0 450 350">
      <rect width="450" height="350" rx="12" fill="#f4f7fb"/>
      <!-- Sequencer Body -->
      <g transform="translate(85, 20)">
        <!-- Main Chassis -->
        <rect x="10" y="10" width="260" height="265" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
        <rect x="10" y="195" width="260" height="80" rx="0 0 16 16" fill="#334155"/>
        
        <!-- Large Touch Screen -->
        <rect x="25" y="28" width="145" height="150" rx="8" fill="#0f172a"/>
        <rect x="30" y="33" width="135" height="140" rx="6" fill="#1e293b"/>
        
        <!-- UI inside screen -->
        <rect x="40" y="45" width="115" height="20" rx="4" fill="#0284c7"/>
        <text x="97" y="59" font-family="'Inter', Arial, sans-serif" font-size="10" fill="#ffffff" text-anchor="middle" font-weight="bold">UniSeq 2000</text>
        
        <!-- Dual Flow Cell Indicator -->
        <rect x="40" y="75" width="52" height="45" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="66" y="93" font-family="'Inter', Arial, sans-serif" font-size="8" fill="#38bdf8" text-anchor="middle" font-weight="bold">CELL A</text>
        <text x="66" y="108" font-family="'Inter', Arial, sans-serif" font-size="9" fill="#22c55e" text-anchor="middle" font-weight="bold">ACTIVE</text>
        
        <rect x="102" y="75" width="53" height="45" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
        <text x="128" y="93" font-family="'Inter', Arial, sans-serif" font-size="8" fill="#94a3b8" text-anchor="middle" font-weight="bold">CELL B</text>
        <text x="128" y="108" font-family="'Inter', Arial, sans-serif" font-size="9" fill="#e2e8f0" text-anchor="middle" font-weight="bold">READY</text>
        
        <rect x="40" y="130" width="115" height="30" rx="4" fill="#0284c7"/>
        <text x="97" y="149" font-family="'Inter', Arial, sans-serif" font-size="10" fill="#ffffff" text-anchor="middle" font-weight="bold">160M Reads / Run</text>

        <!-- Right Reagent Door -->
        <rect x="185" y="28" width="70" height="150" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <circle cx="220" cy="65" r="14" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
        <circle cx="220" cy="110" r="14" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="195" y1="150" x2="245" y2="150" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/>

        <!-- Base Accents -->
        <line x1="30" y1="240" x2="130" y2="240" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
        <circle cx="230" cy="240" r="8" fill="#22c55e"/>

        <!-- Heavy Feet -->
        <rect x="30" y="275" width="30" height="10" rx="3" fill="#1e293b"/>
        <rect x="220" y="275" width="30" height="10" rx="3" fill="#1e293b"/>
      </g>
      <text x="225" y="325" font-family="'Inter', Arial, sans-serif" font-size="14" fill="#0066cc" text-anchor="middle" font-weight="bold">UniSeq2000 (Высокопроизводительная платформа)</text>
    </svg>
  `),

  'images/nucleic_acid_extraction_system.png': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240">
      <rect width="360" height="240" rx="8" fill="#f0f4f8"/>
      <rect x="35" y="20" width="290" height="165" rx="12" fill="#ffffff" stroke="#c0d4ea" stroke-width="2"/>
      <rect x="55" y="40" width="250" height="85" rx="8" fill="#e6f0fa"/>
      <g fill="#0066cc">
        <circle cx="85" cy="80" r="14"/><circle cx="125" cy="80" r="14"/><circle cx="165" cy="80" r="14"/>
        <circle cx="205" cy="80" r="14"/><circle cx="245" cy="80" r="14"/><circle cx="285" cy="80" r="14"/>
      </g>
      <rect x="55" y="135" width="120" height="35" rx="6" fill="#003366"/>
      <text x="115" y="157" font-family="'Inter', Arial, sans-serif" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">96/32 Wells Extractor</text>
      <text x="180" y="215" font-family="'Inter', Arial, sans-serif" font-size="14" fill="#0066cc" text-anchor="middle" font-weight="bold">Автоматическое выделение ДНК/РНК</text>
    </svg>
  `),

  'images/Liquid_Handing_Workstation.png': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240">
      <rect width="360" height="240" rx="8" fill="#f0f4f8"/>
      <rect x="30" y="18" width="300" height="170" rx="12" fill="#ffffff" stroke="#c0d4ea" stroke-width="2"/>
      <rect x="45" y="35" width="270" height="110" rx="6" fill="#eaf2f8"/>
      <line x1="45" y1="48" x2="315" y2="48" stroke="#003366" stroke-width="4"/>
      <!-- Robotic Pipetting Heads -->
      <rect x="70" y="55" width="28" height="65" rx="4" fill="#0066cc"/>
      <rect x="110" y="55" width="28" height="65" rx="4" fill="#0066cc"/>
      <rect x="150" y="55" width="28" height="65" rx="4" fill="#0066cc"/>
      <rect x="190" y="55" width="28" height="65" rx="4" fill="#0066cc"/>
      <!-- Deck Position -->
      <rect x="235" y="70" width="70" height="65" rx="6" fill="#ffffff" stroke="#0066cc" stroke-width="1.5"/>
      <text x="270" y="108" font-family="'Inter', Arial, sans-serif" font-size="10" fill="#0066cc" text-anchor="middle" font-weight="bold">NGS DECK</text>
      <text x="180" y="215" font-family="'Inter', Arial, sans-serif" font-size="14" fill="#0066cc" text-anchor="middle" font-weight="bold">Роботизированное дозирование</text>
    </svg>
  `),

  'images/PCR System.png': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240">
      <rect width="360" height="240" rx="8" fill="#f0f4f8"/>
      <rect x="40" y="20" width="280" height="165" rx="12" fill="#ffffff" stroke="#c0d4ea" stroke-width="2"/>
      <rect x="60" y="35" width="140" height="100" rx="6" fill="#002244"/>
      <!-- Real-time curves -->
      <path d="M70 120 Q110 118 130 85 T185 50" stroke="#00d2ff" stroke-width="3.5" fill="none"/>
      <path d="M70 125 Q120 123 145 95 T185 68" stroke="#ffaa00" stroke-width="3" fill="none"/>
      <!-- Thermal block -->
      <rect x="215" y="35" width="85" height="100" rx="6" fill="#e6f0fa"/>
      <circle cx="257" cy="85" r="22" fill="#0066cc"/>
      <text x="257" y="91" font-family="'Inter', Arial, sans-serif" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">96 Wells</text>
      <text x="180" y="215" font-family="'Inter', Arial, sans-serif" font-size="14" fill="#0066cc" text-anchor="middle" font-weight="bold">Real-time ПЦР амплификаторы</text>
    </svg>
  `),

  'images/QC.png': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240">
      <rect width="360" height="240" rx="8" fill="#f0f4f8"/>
      <rect x="45" y="20" width="270" height="165" rx="12" fill="#ffffff" stroke="#c0d4ea" stroke-width="2"/>
      <circle cx="110" cy="100" r="45" fill="#e6f0fa" stroke="#0066cc" stroke-width="3"/>
      <path d="M110 65 L110 100 L138 115" stroke="#0066cc" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="175" y="55" width="115" height="24" rx="4" fill="#003366"/>
      <text x="232" y="71" font-family="'Inter', Arial, sans-serif" font-size="10" fill="#ffffff" text-anchor="middle" font-weight="bold">FLUOROMETER</text>
      <rect x="175" y="90" width="115" height="40" rx="6" fill="#22c55e"/>
      <text x="232" y="115" font-family="'Inter', Arial, sans-serif" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">QC PASS (Q30 ≥ 90%)</text>
      <text x="180" y="215" font-family="'Inter', Arial, sans-serif" font-size="14" fill="#0066cc" text-anchor="middle" font-weight="bold">Системы детекции / Флюориметры</text>
    </svg>
  `),

  'images/UNIPre-1.jpg': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240">
      <rect width="360" height="240" rx="8" fill="#f0f4f8"/>
      <rect x="40" y="20" width="280" height="165" rx="12" fill="#ffffff" stroke="#c0d4ea" stroke-width="2"/>
      <rect x="55" y="38" width="250" height="100" rx="8" fill="#003366"/>
      <!-- Pre-filled cartridges -->
      <rect x="75" y="55" width="40" height="68" rx="4" fill="#0066cc"/>
      <rect x="125" y="55" width="40" height="68" rx="4" fill="#0066cc"/>
      <rect x="175" y="55" width="40" height="68" rx="4" fill="#0066cc"/>
      <rect x="225" y="55" width="40" height="68" rx="4" fill="#38bdf8"/>
      <text x="180" y="160" font-family="'Inter', Arial, sans-serif" font-size="12" fill="#ffffff" text-anchor="middle" font-weight="bold">UNIPre-1 Картриджная система</text>
      <text x="180" y="215" font-family="'Inter', Arial, sans-serif" font-size="14" fill="#0066cc" text-anchor="middle" font-weight="bold">Приготовление библиотек</text>
    </svg>
  `),

  'images/BI.png': svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="360" height="240" viewBox="0 0 360 240">
      <rect width="360" height="240" rx="8" fill="#f0f4f8"/>
      <rect x="35" y="20" width="290" height="165" rx="12" fill="#002244" stroke="#0066cc" stroke-width="2"/>
      <rect x="50" y="35" width="260" height="110" rx="6" fill="#0a192f"/>
      <line x1="65" y1="55" x2="160" y2="55" stroke="#00d2ff" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="65" y1="75" x2="230" y2="75" stroke="#22c55e" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="65" y1="95" x2="190" y2="95" stroke="#ffaa00" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="65" y1="115" x2="245" y2="115" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round"/>
      <rect x="235" y="45" width="60" height="30" rx="4" fill="#0066cc"/>
      <text x="265" y="64" font-family="'Inter', Arial, sans-serif" font-size="10" fill="#ffffff" text-anchor="middle" font-weight="bold">SERVER</text>
      <text x="180" y="165" font-family="'Inter', Arial, sans-serif" font-size="12" fill="#85c2ff" text-anchor="middle">Пайплайны + Базы данных</text>
      <text x="180" y="215" font-family="'Inter', Arial, sans-serif" font-size="14" fill="#0066cc" text-anchor="middle" font-weight="bold">Биоинформатическая станция</text>
    </svg>
  `),
};

export function getDefaultImage(src: string): string | undefined {
  return DEFAULT_PLACEHOLDERS[src];
}
