import ShayarPage4 from "@/shayarSection/ShayarPage4";
import React from "react";

export default function page({ params }) {
  return (
    <div>
      <ShayarPage4 heading={params.subslug} />
    </div>
  );
}
