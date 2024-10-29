import ShayarPage3 from "@/shayarSection/ShayarPage3";
import React from "react";

export default function page({ params }) {
  return (
    <div>
      <ShayarPage3 heading={params.slug} />
    </div>
  );
}
