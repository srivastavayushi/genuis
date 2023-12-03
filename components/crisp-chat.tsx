"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8cac6f51-51b4-4028-8676-1f1b2041e794");
  }, []);

  return null;
};
