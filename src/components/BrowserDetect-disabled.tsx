import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface DetectedInfo {
  browser: string;
  os: string;
  device: string;
  isMobile: boolean;
  isIOS: boolean;
  isAndroid: boolean;
}

export default function BrowserDetect({ onlyShowInDev = true }: { onlyShowInDev?: boolean }) {
  const { theme } = useTheme();
  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState<DetectedInfo>({
    browser: 'Unknown',
    os: 'Unknown',
    device: 'Unknown',
    isMobile: false,
    isIOS: false,
    isAndroid: false
  });

  useEffect(() => {
    // Don't run in production unless explicitly allowed
    if (onlyShowInDev && import.meta.env.PROD) {
      return;
    }

    const detectBrowser = () => {
      const userAgent = navigator.userAgent;
      let browserName = 'Unknown';
      let os = 'Unknown';
      let device = 'Desktop';
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
      const isAndroid = /Android/i.test(userAgent);

      // Detect browser
      if (userAgent.indexOf('Firefox') > -1) {
        browserName = 'Firefox';
      } else if (userAgent.indexOf('SamsungBrowser') > -1) {
        browserName = 'Samsung Browser';
      } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
        browserName = 'Opera';
      } else if (userAgent.indexOf('Edge') > -1 || userAgent.indexOf('Edg') > -1) {
        browserName = 'Edge';
      } else if (userAgent.indexOf('Chrome') > -1) {
        browserName = 'Chrome';
      } else if (userAgent.indexOf('Safari') > -1) {
        browserName = 'Safari';
      }

      // Detect OS and adjust device if needed
      if (/Windows/.test(userAgent)) {
        os = 'Windows';
      } else if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
        os = 'MacOS';
      } else if (/iPhone|iPad|iPod/.test(userAgent)) {
        os = 'iOS';
        device = 'Mobile';
      } else if (/Android/.test(userAgent)) {
        os = 'Android';
        device = 'Mobile';
      } else if (/Linux/.test(userAgent)) {
        os = 'Linux';
      }

      // Set the detected information using the computed device value
      setInfo({
        browser: browserName,
        os,
        device,
        isMobile,
        isIOS,
        isAndroid
      });
    };

    detectBrowser();
  }, [onlyShowInDev]);

  // If in production and onlyShowInDev is true, don't render anything
  if (onlyShowInDev && import.meta.env.PROD) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 right-4 rounded-lg z-50 shadow-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} hardware-accelerated`}
      style={{
        opacity: 0.9,
        maxWidth: '300px'
      }}
    >
      <button
        onClick={() => setShowInfo(!showInfo)}
        className={`p-2 w-full flex items-center justify-between rounded-lg text-sm ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
      >
        <span className="font-medium">Browser Info</span>
        <span>{showInfo ? '▼' : '▲'}</span>
      </button>

      {showInfo && (
        <div className="p-3 text-xs">
          <div className="grid grid-cols-2 gap-2">
            <div className="font-medium">Browser:</div>
            <div>{info.browser}</div>

            <div className="font-medium">OS:</div>
            <div>{info.os}</div>

            <div className="font-medium">Device:</div>
            <div>{info.device}</div>

            <div className="font-medium">Mobile:</div>
            <div>{info.isMobile ? 'Yes' : 'No'}</div>

            <div className="font-medium">iOS:</div>
            <div>{info.isIOS ? 'Yes' : 'No'}</div>

            <div className="font-medium">Android:</div>
            <div>{info.isAndroid ? 'Yes' : 'No'}</div>
          </div>
        </div>
      )}
    </div>
  );
}
