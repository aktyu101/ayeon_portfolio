"use client";

import { NotionRenderer } from "react-notion-x";

export const Renderer = ({ recordMap, pageId }) => {
  return (
    <div>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={pageId}
        previewImages
        className="!bg-transparent"
        disableHeader
      />
    </div>
  );
};
