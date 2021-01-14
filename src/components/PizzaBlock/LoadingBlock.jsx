import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="1" rx="140" ry="140" width="260" height="260" />
      <rect x="0" y="300" rx="3" ry="3" width="280" height="24" />
      <rect x="0" y="340" rx="10" ry="10" width="280" height="84" />
      <rect x="0" y="450" rx="3" ry="3" width="90" height="27" />
      <rect x="130" y="443" rx="30" ry="30" width="150" height="44" />
    </ContentLoader>
  );
};

export default LoadingBlock;
