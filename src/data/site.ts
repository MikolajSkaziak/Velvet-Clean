import type { ImageMetadata } from 'astro';
import {
  Armchair, Baby, BedDouble, Brush, Bug, CalendarDays, Camera, Car, Cat, Coffee, Dog, Droplets, Grid3x3, MapPin, Paintbrush, PawPrint, PenLine, Puzzle, Sofa, SprayCan, Timer, Wallet, Wind,
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
export const prices = [
  { icon: Sofa, name: 'Kanapy i sofy', note: 'Plamy, zabrudzenia i zapachy z codziennego używania.', from: 120 },
  { icon: Puzzle, name: 'Narożniki', note: 'Duże zestawy, także tkaniny typu flok i welur.', from: 180 },
  { icon: BedDouble, name: 'Materace', note: 'Usuwamy roztocza i alergeny, dla zdrowszego snu.', from: 200 },
  { icon: Car, name: 'Tapicerka samochodowa', note: 'Kompleksowe pranie wnętrza: fotele i kanapa tylna.', from: 200 },
  { icon: Armchair, name: 'Fotele, pufy, krzesła', note: 'Uszaki, fotele, pufy i krzesła tapicerowane.' },
  { icon: Grid3x3, name: 'Dywany i chodniki', note: 'Także dywany dziecięce.' },
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
  { icon: Wallet, q: 'Ile kosztuje pranie?', a: 'Kanapa od 120 zł, narożnik od 180 zł, materac od 200 zł, zawsze z suszeniem w cenie. Dokładną kwotę podamy po zdjęciu mebla.' },
  { icon: Timer, q: 'Jak długo schnie mebel?', a: 'Odciągamy maksymalnie dużo wody i suszymy na miejscu, więc mebel jest gotowy do użytku po kilku godzinach.' },
  { icon: Baby, q: 'Czy środki są bezpieczne dla dzieci i zwierząt?', a: 'Tak. Używamy atestowanych środków, bezpiecznych dla dzieci i zwierząt.' },
  { icon: SprayCan, q: 'Czy usuniecie każdą plamę?', a: 'Radzimy sobie z większością plam, także z moczem zwierząt, pisakami i farbą. Przy bardzo starych plamach efekt zależy od tkaniny, a o tym uczciwie powiemy już przy wycenie.' },
  { icon: MapPin, q: 'Gdzie dojeżdżacie?', a: 'Działamy w Kaliszu i okolicach. Dojazd do klienta jest gratis.' },
];
