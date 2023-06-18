// import BannerCarousel from "./bannerCarousel";

import React from "react";

export default function Banner() {
  const BannerCarousel = React.lazy(() => import("./bannerCarousel"));
  return <BannerCarousel />;
}
