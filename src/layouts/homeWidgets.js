import React from "react";
import Banner from "@widgets/Banner";
import FeaturedCategory from "@widgets/FeaturedCategory";

function HomeWidgets({ widgets }) {
  return widgets.map((each) => {
    switch (each.type) {
      case "banner":
        return <Banner />;
      case "featured-category":
        return <FeaturedCategory />;
      default:
        break;
    }
  });
}

export default React.memo(HomeWidgets);
