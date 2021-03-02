import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

export default ({ node }) => {
  console.log(node);
  const sanityConfig = {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID || 'mlpnylp0',
    dataset: process.env.GATSBY_SANITY_DATASET || 'production',
  };

  const imageAssetId = node.asset._ref;

  if (node.asset.mimeType === 'image/gif') {
    return (
      <figure>
        <img src={node.asset.url} alt={node.alt} />
        <figcaption>{node.caption}</figcaption>
      </figure>
    );
  }

  const fluidProps = getFluidGatsbyImage(
    imageAssetId,
    { maxWidth: 800 },
    sanityConfig
  );
  return <Img fluid={fluidProps} alt={node.alt} />;
};
