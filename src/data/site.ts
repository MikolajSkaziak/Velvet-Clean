import type { ImageMetadata } from 'astro';
import {
  Armchair, Baby, BedDouble, Brush, Bug, CalendarDays, Camera, Car, Cat, Coffee, Dog, Droplets, Grid3x3, MapPin, Paintbrush, PawPrint, PenLine, Puzzle, Sofa, SprayCan, Timer, Truck, Wallet, Wind,
} from '@lucide/astro';

import materacPrzed from '../assets/img/pair-materac-przed.webp';
import materacPo from '../assets/img/pair-materac-po.webp';
import fotelPrzed from '../assets/img/pair-fotel-przed.webp';
import fotelPo from '../assets/img/pair-fotel-po.webp';
import naroznikPrzed from '../assets/img/pair-naroznik-przed.webp';
import naroznikPo from '../assets/img/pair-naroznik-po.webp';
import siedziskoPrzed from '../assets/img/pair-siedzisko-przed.webp';
import siedziskoPo from '../assets/img/pair-siedzisko-po.webp';
import autoPrzed from '../assets/img/pair-auto-przed.webp';
import autoPo from '../assets/img/pair-auto-po.webp';
import dywanPrzed from '../assets/img/pair-dywan-przed.webp';
import dywanPo from '../assets/img/pair-dywan-po.webp';
import krataPrzed from '../assets/img/pair-dywan-krata-przed.webp';
import krataPo from '../assets/img/pair-dywan-krata-po.webp';
import chodnikPrzed from '../assets/img/pair-chodnik-przed.webp';
import chodnikPo from '../assets/img/pair-chodnik-po.webp';
import autoKanapaPrzed from '../assets/img/pair-auto-kanapa-przed.webp';
import autoKanapaPo from '../assets/img/pair-auto-kanapa-po.webp';
import autoFotelPrzed from '../assets/img/pair-auto-fotel-przed.webp';
import autoFotelPo from '../assets/img/pair-auto-fotel-po.webp';

export const contact = {
  phoneDisplay: '539 459 182',
  phoneIntl: '+48 539 459 182',
  tel: 'tel:+48539459182',
  whatsapp: 'https://wa.me/48539459182',
  messenger: 'https://m.me/velvetclean24',
  email: 'velveclean24@icloud.com', // unconfirmed spelling, as published on Facebook
  facebook: 'https://www.facebook.com/velvetclean24',
  googleMaps: 'https://maps.google.com/?cid=16333150134500351226',
  googleReview: 'https://g.page/r/CfpcBLaCAaviEBM/review',
  address: 'ul. Górnośląska, 62-800 Kalisz',
  area: 'Kalisz i okolice',
};

export const rating = { score: '5,0', count: 13 };

/**
 * Privacy policy facts. The owner works as a private person (no company, no NIP yet),
 * so the data controller is him by name.
 */
export const legal = {
  controllerName: 'Pavlo Fedorovych',
  policyDate: '19 października 2026',
};

export const nav = [
  { id: 'realizacje', label: 'Realizacje' },
  { id: 'cennik', label: 'Cennik' },
  { id: 'przebieg', label: 'Przebieg' },
  { id: 'opinie', label: 'Opinie' },
  { id: 'kontakt', label: 'Kontakt' },
];

export interface Pair {
  furniture: string;
  problem: string;
  before: ImageMetadata;
  after: ImageMetadata;
  beforeAlt: string;
  afterAlt: string;
}

export const pairs: Pair[] = [
  { furniture: 'Materac', problem: 'Zaciek', before: materacPrzed, after: materacPo, beforeAlt: 'Materac z żółtym zaciekiem przed praniem', afterAlt: 'Ten sam materac po praniu, bez zacieku' },
  { furniture: 'Fotel', problem: 'Plamy', before: fotelPrzed, after: fotelPo, beforeAlt: 'Żółty podłokietnik fotela z plamami przed praniem', afterAlt: 'Podłokietnik fotela po praniu' },
  { furniture: 'Narożnik', problem: 'Zacieki', before: naroznikPrzed, after: naroznikPo, beforeAlt: 'Ciemny narożnik z zaciekami przed praniem', afterAlt: 'Ciemny narożnik po praniu' },
  { furniture: 'Kanapa', problem: 'Codzienny brud', before: siedziskoPrzed, after: siedziskoPo, beforeAlt: 'Niebieskie siedzisko kanapy z zabrudzeniami przed praniem', afterAlt: 'Niebieskie siedzisko kanapy po praniu' },
  { furniture: 'Auto', problem: 'Zabrudzenia', before: autoPrzed, after: autoPo, beforeAlt: 'Tylna kanapa samochodu przed praniem', afterAlt: 'Tylna kanapa samochodu po praniu' },
  { furniture: 'Dywan', problem: 'Kurz i plamy', before: dywanPrzed, after: dywanPo, beforeAlt: 'Owalny dywan przed praniem', afterAlt: 'Owalny dywan po praniu' },
];

/** Prices are "od" (from) amounts from the client's flyer; still to be confirmed by the owner. */
export const prices: { icon: typeof Sofa; name: string; note: string; from?: number; href?: string }[] = [
  { icon: Sofa, name: 'Kanapy i sofy', note: 'Plamy, zabrudzenia i zapachy z codziennego używania.', from: 150 },
  { icon: Puzzle, name: 'Narożniki', note: 'Duże zestawy, także tkaniny typu flok i welur.', from: 200 },
  { icon: BedDouble, name: 'Materace', note: 'Usuwamy roztocza i alergeny, dla zdrowszego snu.', from: 150 },
  { icon: Car, name: 'Tapicerka samochodowa', note: 'Kompleksowe pranie wnętrza: fotele i kanapa tylna.', from: 200, href: '/pranie-tapicerki-samochodowej-kalisz' },
  { icon: Armchair, name: 'Fotele, pufy, krzesła', note: 'Uszaki, fotele, pufy i krzesła tapicerowane.' },
  { icon: Grid3x3, name: 'Dywany i chodniki', note: 'Pierzemy na miejscu, także dywany dziecięce.', href: '/pranie-dywanow-kalisz' },
];

export const steps = [
  { icon: Camera, title: 'Zdjęcie', text: 'Wyślij zdjęcie mebla na WhatsApp lub Messengerze. Wycenę dostaniesz w kilka minut.' },
  { icon: CalendarDays, title: 'Termin', text: 'Umawiamy dzień i przyjeżdżamy do Ciebie. W Kaliszu i okolicach dojazd jest gratis.' },
  { icon: Droplets, title: 'Pranie', text: 'Pranie ekstrakcyjne wypłukuje brud z głębi tkaniny, nie tylko z wierzchu.' },
  { icon: Wind, title: 'Suszenie', text: 'Odciągamy maksimum wody i suszymy na miejscu. Mebel jest gotowy po kilku godzinach.' },
];

export const handles = [
  { icon: Coffee, text: 'Uporczywe plamy' }, { icon: PawPrint, text: 'Mocz zwierząt' },
  { icon: Cat, text: 'Zapach kota' }, { icon: Dog, text: 'Sierść' },
  { icon: Bug, text: 'Roztocza i alergeny' }, { icon: PenLine, text: 'Pisaki i markery' },
  { icon: Paintbrush, text: 'Farby i lakiery' }, { icon: Brush, text: 'Kurz i codzienny brud' },
];

export const reviews = [
  { author: 'Weronika M.', text: 'Fotel i narożnik wyprane, wyglądają jak nowe. Wszystko wysuszone, można od razu użytkować. Jeśli zajdzie potrzeba, na pewno tu wrócę.' },
  { author: 'Magdalena R.', text: 'Doskonała robota! Dokładnie, profesjonalnie, z pełnym zaangażowaniem. Widać wiedzę i fachowość. Właścicielka 4 kotów i psa.' },
  { author: 'Ania W.', text: 'Świetny kontakt. Pan telefonicznie udzielił mi wszystkich informacji. Na miejscu bardzo profesjonalne podejście, sprawnie.' },
  { author: 'Małgorzata J.', text: 'Usługa wykonana perfekcyjnie. Punktualnie, dokładnie i z dużym zaangażowaniem.' },
  { author: 'Kross P.', text: 'Meble wyglądają jak nowe. Pełen profesjonalizm, pan wie, co robi! Kolejnym etapem będzie wnętrze mojego samochodu.' },
];

export const faq = [
  { icon: Wallet, q: 'Ile kosztuje pranie?', a: 'Kanapa od 150 zł, narożnik od 200 zł, materac od 150 zł, zawsze z suszeniem w cenie. Dokładną kwotę podamy po zdjęciu mebla.' },
  { icon: Timer, q: 'Jak długo schnie mebel?', a: 'Odciągamy maksymalnie dużo wody i suszymy na miejscu, więc mebel jest gotowy do użytku po kilku godzinach.' },
  { icon: Baby, q: 'Czy środki są bezpieczne dla dzieci i zwierząt?', a: 'Tak. Używamy atestowanych środków, bezpiecznych dla dzieci i zwierząt.' },
  { icon: SprayCan, q: 'Czy usuniecie każdą plamę?', a: 'Radzimy sobie z większością plam, także z moczem zwierząt, pisakami i farbą. Przy bardzo starych plamach efekt zależy od tkaniny, a o tym uczciwie powiemy już przy wycenie.' },
  { icon: MapPin, q: 'Gdzie dojeżdżacie?', a: 'Działamy w Kaliszu i okolicach. Dojazd do klienta jest gratis.' },
];

/**
 * Service pages, one per search demand that Search Console shows (Oct–Nov 2026):
 * "pranie dywanów kalisz" and "pranie tapicerki samochodowej kalisz" were the top queries
 * while the home page spoke mostly about sofas. Every claim here comes from the owner's
 * own posts or the home page; nothing new is promised.
 */
export interface Service {
  slug: string;
  /** <title>, keyword first, brand last */
  title: string;
  description: string;
  kicker: string;
  h1: string;
  lede: string;
  /** "od" price in zł; undefined = quote from a photo */
  from?: number;
  serviceType: string;
  includes: string[];
  pairs: Pair[];
  faq: { icon: typeof Sofa; q: string; a: string }[];
}

const rugPair = pairs.find((p) => p.furniture === 'Dywan')!;
const carPair = pairs.find((p) => p.furniture === 'Auto')!;

export const services: Service[] = [
  {
    slug: 'pranie-dywanow-kalisz',
    title: 'Pranie dywanów Kalisz · u Ciebie w domu | Velvet Clean',
    description: 'Pranie dywanów i chodników w Kaliszu i okolicach. Przyjeżdżamy i pierzemy na miejscu, dywanu nie trzeba nigdzie wozić. Dojazd gratis, cenę podamy ze zdjęcia.',
    kicker: 'Pranie dywanów · Kalisz',
    h1: 'Pranie dywanów w Kaliszu',
    lede: 'Pierzemy dywany i chodniki u Ciebie w domu, metodą ekstrakcyjną. Nie trzeba ich nigdzie wozić. W Kaliszu i okolicach dojazd gratis, suszenie w cenie.',
    serviceType: 'Pranie dywanów',
    includes: [
      'Dywany pokojowe, owalne i prostokątne',
      'Chodniki i dywaniki',
      'Dywany dziecięce',
      'Kurz, plamy i codzienny brud',
      'Sierść i mocz zwierząt',
      'Zapachy, także po kocie',
    ],
    pairs: [
      rugPair,
      { furniture: 'Dywan', problem: 'Szary nalot', before: krataPrzed, after: krataPo, beforeAlt: 'Czarny dywan w białą kratę przed praniem, przyszarzały', afterAlt: 'Ten sam dywan w kratę po praniu, z czystymi białymi pasami' },
      { furniture: 'Chodnik', problem: 'Zszarzałe runo', before: chodnikPrzed, after: chodnikPo, beforeAlt: 'Brązowy chodnik we wzory przed praniem', afterAlt: 'Ten sam chodnik po praniu, kolory są wyraźniejsze' },
    ],
    faq: [
      { icon: Truck, q: 'Czy dywan trzeba oddać do pralni?', a: 'Nie. Przyjeżdżamy do Ciebie i pierzemy dywan na miejscu, metodą ekstrakcyjną. W Kaliszu i okolicach dojazd jest gratis.' },
      { icon: Wallet, q: 'Ile kosztuje pranie dywanu?', a: 'To zależy od wielkości dywanu i od tego, jak bardzo jest brudny. Wyślij zdjęcie na WhatsApp albo Messengera, cenę podamy w kilka minut.' },
      { icon: Timer, q: 'Jak długo schnie dywan?', a: 'Zwykle kilka godzin. Odciągamy jak najwięcej wody i suszymy na miejscu. Gruby dywan może schnąć dłużej, powiemy to przy wycenie.' },
      { icon: Baby, q: 'Czy pierzecie dywany dziecięce?', a: 'Tak. Używamy atestowanych środków, bezpiecznych dla dzieci i zwierząt.' },
    ],
  },
  {
    slug: 'pranie-tapicerki-samochodowej-kalisz',
    title: 'Pranie tapicerki samochodowej Kalisz | Velvet Clean',
    description: 'Pranie tapicerki samochodowej w Kaliszu i okolicach: przednie fotele i tylna kanapa. Przyjeżdżamy tam, gdzie stoi auto. Od 200 zł, dojazd gratis.',
    kicker: 'Tapicerka samochodowa · Kalisz',
    h1: 'Pranie tapicerki samochodowej w Kaliszu',
    lede: 'Pierzemy przednie fotele i tylną kanapę metodą ekstrakcyjną. Przyjeżdżamy tam, gdzie stoi samochód. Od 200 zł, w Kaliszu i okolicach dojazd gratis.',
    from: 200,
    serviceType: 'Pranie tapicerki samochodowej',
    includes: [
      'Przednie fotele',
      'Tylna kanapa',
      'Uporczywe plamy',
      'Sierść zwierząt',
      'Kurz i codzienny brud',
      'Zapachy we wnętrzu',
    ],
    pairs: [
      carPair,
      { furniture: 'Auto', problem: 'Zacieki i brud', before: autoKanapaPrzed, after: autoKanapaPo, beforeAlt: 'Jasna tylna kanapa samochodu z ciemnymi zaciekami przed praniem', afterAlt: 'Ta sama jasna kanapa samochodu po praniu' },
      { furniture: 'Auto', problem: 'Kurz i plamy', before: autoFotelPrzed, after: autoFotelPo, beforeAlt: 'Szary fotel samochodowy z zabrudzeniami przed praniem', afterAlt: 'Ten sam fotel samochodowy po praniu' },
    ],
    faq: [
      { icon: Car, q: 'Co obejmuje pranie tapicerki samochodowej?', a: 'Przednie fotele i tylną kanapę. Jeśli chodzi Ci o coś więcej, napisz, co jest do wyprania.' },
      { icon: Wallet, q: 'Ile kosztuje pranie tapicerki w aucie?', a: 'Od 200 zł. Dokładną cenę podamy po zdjęciu wnętrza, bo zależy od wielkości auta i od tego, jak bardzo jest brudne.' },
      { icon: MapPin, q: 'Czy muszę gdzieś przyjechać autem?', a: 'Nie. Przyjeżdżamy do Ciebie, tam gdzie stoi auto. W Kaliszu i okolicach dojazd jest gratis.' },
      { icon: Timer, q: 'Kiedy mogę wsiąść do auta?', a: 'Po kilku godzinach. Odciągamy z tapicerki jak najwięcej wody, więc nie schnie długo.' },
    ],
  },
];
