import { SequencerData, ProcessStepData } from './types';

import uniseq100Img from './assets/images/uniseq100.png';
import uniseq2000Img from './assets/images/uniseq2000.png';
import nucleicExtractionImg from './assets/images/nucleic_acid_extraction_system.png';
import liquidHandlingImg from './assets/images/Liquid_Handing_Workstation.png';
import pcrSystemImg from './assets/images/PCR_System.png';
import qcImg from './assets/images/QC.png';
import uniPreImg from './assets/images/UNIPre-1.jpg';
import biImg from './assets/images/BI.png';

export const SEQUENCERS: SequencerData[] = [
  {
    id: 'uniseq100',
    name: 'UniSeq100',
    imageSrc: uniseq100Img,
    imageAlt: 'UniSeq100',
    subtitle: 'Компактный секвенатор для лабораторий с малым и средним потоком образцов',
    specs: [
      { label: 'Производительность за запуск', value: '1 — 16 млрд нт (1 — 16 Gb)' },
      { label: 'Количество прочтений', value: '5 — 50 млн ридов (M SE/PE)' },
      { label: 'Длина прочтения', value: 'SE50, PE75, PE150, SE300, PE300' },
      { label: 'Время запуска', value: 'от 5.5 до 34.5 часов' },
      { label: 'Тип проточных ячеек', value: 'FCM (мини), FCL (стандарт)' },
      { label: 'Качество данных', value: 'Q30 ≥ 85%' },
    ],
    highlights: [
      'Максимальная гибкость и независимость от накопления образцов',
      'Быстрые протоколы (SE50 за 5.5 ч)',
      'Низкая стоимость входа в NGS-технологию',
      'Широкий спектр длин прочтений до PE300',
    ],
    suitableFor: [
      'Малых и средних потоков (до 20–30 образцов в неделю)',
      'Срочных анализов и коротких таргетных панелей',
      'Бактериального/вирусного секвенирования (WGS малых геномов)',
      'Анализа 16S/18S рРНК и таргетного секвенирования',
      'Начального этапа внедрения NGS в клиническую практику',
    ],
  },
  {
    id: 'uniseq2000',
    name: 'UniSeq2000',
    imageSrc: uniseq2000Img,
    imageAlt: 'UniSeq2000',
    subtitle: 'Высокопроизводительная платформа для широкого спектра клинических применений',
    specs: [
      { label: 'Производительность за запуск', value: '8 — 480 млрд нт (8 — 480 Gb)' },
      { label: 'Количество прочтений', value: '55 — 1600 млн ридов (M SE/PE)' },
      { label: 'Длина прочтения', value: 'SE50, PE75, PE100, PE150, PE300' },
      { label: 'Время запуска', value: 'от 12 до 58 часов' },
      { label: 'Тип проточных ячеек', value: 'FCS, FCN, FCM, FCL' },
      { label: 'Качество данных', value: 'Q30 ≥ 85%' },
    ],
    highlights: [
      'Масштабируемость: 4 типа проточных ячеек (FCS/FCN/FCM/FCL)',
      'Две независимые ячейки — запуск разного типа ячеек одновременно',
      'Минимальная себестоимость на один образец при высоком потоке',
      'Производительность до 480 Gb за запуск',
    ],
    suitableFor: [
      'Для лабораторий со средним и большим потоком образцов',
      'Таргетного секвенирования',
      'Запусков от 10 образцов на ячейку',
      'Экономии бюджета и минимизации стоимости реагентов на запуск при среднем и большом потоке',
      'Универсальности — таргетное NGS, метагеномика, патогены, NIPT, CNV-seq, PGS, онкология',
    ],
  },
];

export const PROCESS_STEPS: ProcessStepData[] = [
  {
    number: 1,
    icon: '🧪',
    title: 'Система автоматического выделения',
    description: 'ДНК/РНК',
    imageSrc: nucleicExtractionImg,
    imageAlt: 'Система выделения',
  },
  {
    number: 2,
    icon: '⚙️',
    title: 'Система автоматического дозирования',
    description: 'Роботизированная система с максимальным функционалом для NGS',
    imageSrc: liquidHandlingImg,
    imageAlt: 'Система дозирования',
  },
  {
    number: 3,
    icon: '📊',
    title: 'Real-time ПЦР амплификаторы',
    description: 'Амплификация библиотек',
    imageSrc: pcrSystemImg,
    imageAlt: 'ПЦР система',
  },
  {
    number: 4,
    icon: '🔬',
    title: 'Системы детекции',
    description: 'Флюориметры и др.',
    imageSrc: qcImg,
    imageAlt: 'Системы детекции',
  },
  {
    number: 5,
    icon: '🧬',
    title: 'Автоматическая картриджная система приготовления библиотек',
    description: 'Внесение ДНК в предзаполненные картриджи и получение готовой библиотеки на выходе',
    imageSrc: uniPreImg,
    imageAlt: 'Картриджная система',
  },
  {
    number: 6,
    icon: '🔭',
    title: 'Секвенаторы',
    description: 'UniSeq100 и UniSeq2000',
    imageSrc: uniseq100Img,
    imageAlt: 'Секвенаторы',
  },
  {
    number: 7,
    icon: '💻',
    title: 'Биоинформатическая станция',
    description: 'Готовые пайплайны, интеграция с биоинформатическими базами',
    imageSrc: biImg,
    imageAlt: 'Биоинформатическая станция',
  },
];
