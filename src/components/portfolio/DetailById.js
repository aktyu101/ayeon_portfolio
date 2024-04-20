"use client";
import { useState, useEffect } from "react";

export default function DetailById({ id }) {
  console.log("detail by id", id);
  const [importedComponent, setImportedComponent] = useState(null);

  useEffect(() => {
    const importedComponent = async () => {
      console.log("id", id);
      const importModule = await import(`./details/Detail${id}`);
      const DetailComponent = importModule.default;
      setImportedComponent(<DetailComponent />);
    };

    importedComponent();
  }, [id]);

  return <>{importedComponent}</>;
}
//0420
