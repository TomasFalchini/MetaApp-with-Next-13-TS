"use client";

import React from "react";
import { useRouter } from "next/navigation";

function GoBackButton() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return <button onClick={goBack}>GO BACK ICON</button>;
}

export default GoBackButton;
