"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxDemo() {
  const newProducts = [
    {
      key: "1",
      url: "https://www.instagram.com/reel/C-u4LEqh469/?igsh=MWZldjM5bmhjNW1sOQ==",
      embed: "C-u4LEqh469",
      platform: "instagram",
    },
    {
      key: "2",
      url: "https://www.instagram.com/reel/Cz_QhYvxe-N/?igsh=NHBrcjhoOGI4bGo1",
      embed: "Cz_QhYvxe-N",
      platform: "instagram",
    },
    {
      key: "3",
      url: "https://www.instagram.com/reel/C2H2E1wxmDb/?igsh=MTNrczFvdmJsMGlhbA==",
      embed: "C2H2E1wxmDb",
      platform: "instagram",
    },
    {
      key: "4",
      url: "https://www.instagram.com/reel/DBY6arlC4RT/?igsh=cWJhcncxMHBxNjBr",
      embed: "DBY6arlC4RT",
      platform: "instagram",
    },
    {
      key: "5",
      url: "https://www.instagram.com/reel/DBjSYdgu89r/?igsh=MXVuYWt5cndrcWF6ZA==",
      embed: "DBjSYdgu89r",
      platform: "instagram",
    },
    {
      key: "6",
      url: "https://www.instagram.com/reel/CzZFW6URmBy/?igsh=MWRpeTF3dDlseTB2cQ==",
      embed: "CzZFW6URmBy",
      platform: "instagram",
    },
    {
      key: "7",
      url: "https://www.instagram.com/reel/C_0zI7-Ixe-/?igsh=MXZuNGVuNGd3OTNiNA==",
      embed: "C_0zI7-Ixe-",
      platform: "instagram",
    },
    {
      key: "8",
      url: "https://www.instagram.com/reel/C_jmcrthtIN/?igsh=MTdwb29neTI1YnU2Mg==",
      embed: "C_jmcrthtIN",
      platform: "instagram",
    },
    {
      key: "9",
      url: "https://www.instagram.com/reel/C_jHCOxo52g/?igsh=MXR1aDJ2YWtrZzR3ZA==",
      embed: "C_jHCOxo52g",
      platform: "instagram",
    },
    {
      key: "10",
      url: "https://www.instagram.com/reel/C_p03XIoGAw/?igsh=eDFkZHhsZ3NwNnF0",
      embed: "C_p03XIoGAw",
      platform: "instagram",
    },
    {
      key: "11",
      url: "https://www.instagram.com/reel/C_fUXWAxYNC/?igsh=MXd6YjUyem05cW5sNA==",
      embed: "C_fUXWAxYNC",
      platform: "instagram",
    },
    {
      key: "12",
      url: "https://www.instagram.com/reel/C_rHRqQoacI/?igsh=cHdiNHlwMDdoczRt",
      embed: "C_rHRqQoacI",
      platform: "instagram",
    },
    {
      key: "13",
      url: "https://www.instagram.com/reel/C_qC3VtylsF/?igsh=N296MDI2YTFlb3Vx",
      embed: "C_qC3VtylsF",
      platform: "instagram",
    },
    {
      key: "14",
      url: "https://www.instagram.com/reel/C_mt2HMx3Ma/?igsh=ZTB6ejQ5NDBxYWo5",
      embed: "C_mt2HMx3Ma",
      platform: "instagram",
    },
    {
      key: "15",
      url: "https://www.instagram.com/reel/C_q4TmcodGu/?igsh=dWpwYWl1ZG42cW8w",
      embed: "C_q4TmcodGu",
      platform: "instagram",
    },
  ];

  return <HeroParallax products={newProducts} />;
}
