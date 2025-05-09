import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <Image
        src="/assets/images/loader.gif" 
        alt="Loading..."
        width={200}
        height={200}
        priority
      />
    </div>
  );
};

export default Loader;
