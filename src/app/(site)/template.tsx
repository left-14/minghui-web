/**
 * 換頁轉場：template 在每次換頁時都會重新掛載，
 * 所以外層的 CSS 動畫（.page-enter，定義在 globals.css）每換一頁就播放一次。
 * Navbar、Footer 在 layout.tsx，不會跟著重播。
 * 純 CSS，沒有 JavaScript 也能正常顯示。
 */
export default function SiteTemplate({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
