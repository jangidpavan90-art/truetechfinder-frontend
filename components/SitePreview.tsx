"use client";

import { useEffect, useState } from "react";

interface SitePreviewProps {
  url: string;
  compact?: boolean;
  accentColor?: "orange" | "slate" | "blue" | "purple";
}

export default function SitePreview({ url, compact = false, accentColor = "orange" }: SitePreviewProps) {
  const [favicon, setFavicon] = useState("");
  const [screenshot, setScreenshot] = useState("");
  const [imgLoaded, setImgLoaded] = useState(false);

  const domain = url.replace("https://", "").replace("http://", "").split("/")[0];

  useEffect(() => {
    const iconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    setFavicon(iconUrl);
  }, [domain]);

  useEffect(() => {
    const imgUrl = `https://image.thum.io/get/width/1200/https://${domain}`;
    setScreenshot(imgUrl);
  }, [domain]);

  const colorMap = {
    orange: { border: "border-[#FFEDD5]", spinner: "#FF8A3D" },
    slate: { border: "border-[#E7EDF3]", spinner: "#4A5A70" },
    blue: { border: "border-[#DBEAFE]", spinner: "#3B82F6" },
    purple: { border: "border-[#F3E8FF]", spinner: "#A855F7" },
  };

  const colors = colorMap[accentColor] || colorMap.orange;

  if (compact) {
    return (
      <div className={`bg-white border ${colors.border} rounded-xl p-4 shadow-sm`}>
        <div className="flex items-center gap-3 mb-4">
          <img
            src={favicon}
            alt="favicon"
            className="w-8 h-8 rounded-md border border-[#DCE4EC]"
          />
          <div className="overflow-hidden">
            <h3 className="text-lg font-semibold truncate text-[#1A2A45]">{domain}</h3>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-[#DCE4EC] shadow-sm bg-[#F3F7FA] w-full h-[160px] flex items-center justify-center relative">
          {!imgLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#F3F7FA]">
              <div className="animate-spin rounded-full h-6 w-6 border-3 border-t-transparent" style={{ borderColor: colors.spinner, borderTopColor: "transparent" }}></div>
            </div>
          )}
          <img
            src={screenshot}
            alt="Site screenshot"
            className={`w-full h-full object-cover object-top transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#DCE4EC] rounded-xl p-6 shadow-sm mb-10">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={favicon}
          alt="favicon"
          className="w-10 h-10 rounded-md border border-[#DCE4EC]"
        />
        <div>
          <h2 className="text-2xl font-semibold text-[#1A2A45]">{domain}</h2>
          <p className="text-[#7A8A9C] text-sm truncate max-w-md">{url}</p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-[#DCE4EC] shadow-sm bg-[#F3F7FA] w-full h-[300px] flex items-center justify-center relative">
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#F3F7FA]">
            <div className="flex flex-col items-center gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-4 border-[#FF8A3D] border-t-transparent"></div>
              <span className="text-[#7A8A9C] text-sm">Loading preview...</span>
            </div>
          </div>
        )}
        <img
          src={screenshot}
          alt="Site screenshot"
          className={`w-full h-full object-cover object-top transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImgLoaded(true)}
        />
      </div>
    </div>
  );
}
