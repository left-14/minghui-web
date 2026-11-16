import type { Metadata } from 'next';
import MajorQuiz from './MajorQuiz';

export const metadata: Metadata = {
  title: '科系羅盤｜12 到 20 題找到適合你的大學科系',
  description:
    '科系羅盤測試版：用 12 到 20 題自適應問答，找出適合你的大學學群與科系，並可填入模擬考級分查看校系落點。',
  openGraph: {
    title: '科系羅盤｜12 到 20 題找到適合你的大學科系',
    description: '12 到 20 題自適應問答，找出適合你的學群與科系，填入模擬考級分看校系落點。',
    url: 'https://www.minghuiedu.com/major-quiz',
  },
  alternates: { canonical: 'https://www.minghuiedu.com/major-quiz' },
};

export default function MajorQuizPage() {
  return <MajorQuiz />;
}
