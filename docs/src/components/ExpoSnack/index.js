import React, { useEffect, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";

import { SnackApi } from "./api";

const ExpoSnack = ({ id }) => {
  const { colorMode } = useColorMode();
  const ref = useRef(null);

  useEffect(() => {
    SnackApi.remove(ref.current);
    SnackApi.append(ref.current);
  }, [colorMode]);
  return (
    <div
      ref={ref}
      data-snack-id={id}
      data-snack-platform="web"
      data-snack-preview="true"
      data-snack-theme={colorMode === "dark" ? "dark" : "light"}
      style={{
        overflow: "hidden",
        background: "#f9f9f9",
        border: "1px solid var(--color-border)",
        borderRadius: 4,
        height: 505,
        width: "100%",
      }}
    />
  );
};

export default ExpoSnack