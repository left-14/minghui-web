import type { Metadata } from 'next';
import GsatCheck from './GsatCheck';

export const metadata: Metadata = {
  title: '學測落點快查｜填級分看 29 所大學個人申請落點',
  description:
    '免費學測落點快查：填入學測或模擬考級分，比對 115 學年度個人申請的檢定標準與第一階段篩選門檻，一次看完 29 所大學、367 個校系的落點。',
  openGraph: {
    title: '學測落點快查｜填級分看 29 所大學個人申請落點',
    description: '填入學測或模擬考級分，一次看完 29 所大學、367 個校系的個人申請落點。',
    url: 'https://www.minghuiedu.com/gsat-check',
  },
  alternates: { canonical: 'https://www.minghuiedu.com/gsat-check' },
};

export default function GsatCheckPage() {
  return <GsatCheck />;
}
