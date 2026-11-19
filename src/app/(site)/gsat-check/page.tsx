import type { Metadata } from 'next';
import GsatCheck from './GsatCheck';

export const metadata: Metadata = {
  title: '學測落點快查｜填級分看大學個人申請落點',
  description:
    '免費學測落點快查：填入學測或模擬考級分，比對 115 學年度個人申請的檢定標準與第一階段篩選門檻，查看臺大、政大、成大等 40 所大學校系的落點。',
  openGraph: {
    title: '學測落點快查｜填級分看大學個人申請落點',
    description: '填入學測或模擬考級分，查看 40 所大學校系的個人申請落點。',
    url: 'https://www.minghuiedu.com/gsat-check',
  },
  alternates: { canonical: 'https://www.minghuiedu.com/gsat-check' },
};

export default function GsatCheckPage() {
  return <GsatCheck />;
}
