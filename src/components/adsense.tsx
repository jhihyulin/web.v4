import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface AdSenseProps {
  adClient: string;
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export function AdSense({
  adClient,
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style,
  className = "",
}: AdSenseProps) {
  const { t } = useTranslation();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const loadAdSenseScript = () => {
      if (document.querySelector(`script[src*="adsbygoogle.js"]`)) {
        setScriptLoaded(true);
        return;
      }

      const script = document.createElement("script");
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => setScriptLoaded(true);
      document.head.appendChild(script);
    };

    loadAdSenseScript();
  }, [adClient]);

  useEffect(() => {
    if (!scriptLoaded) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, [scriptLoaded]);

  return (
    <div>
      <div className="text-center text-xs text-muted-foreground mb-2">
        {t("ads.start")}
      </div>
      <ins
        className={`adsbygoogle ${className}`}
        style={{ display: "block", ...style }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      ></ins>
      <div className="text-center text-xs text-muted-foreground mt-2">
        {t("ads.end")}
      </div>
    </div>
  );
}
