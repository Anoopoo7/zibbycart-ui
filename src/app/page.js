import React from "react";
import HomeWidgets from "@src/layouts/homeWidgets";

export default function Home() {
  const widgets = [
    {
      type: "banner",
      items: [
        {
          src: "",
          navigation: "",
          link: "",
        },
        {
          src: "",
          navigation: "",
          link: "",
        },
      ],
    },
    {
      type: "featured-category",
      items: [
        {
          src: "",
        },
      ],
    },
  ];
  return <HomeWidgets widgets={widgets} />;
}
