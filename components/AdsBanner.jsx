// components/AdsBanner.jsx
import { useEffect } from "react";

export default function AdsBanner({ adClient = "ca-pub-8061135224509487", adSlot = "3364563697" }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // ignore
    }
  }, []);
  return (
    <div className="my-8">
      <ins className="adsbygoogle"
           style={{ display: "block" }}
           data-ad-client={adClient}
           data-ad-slot={adSlot}
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
}
