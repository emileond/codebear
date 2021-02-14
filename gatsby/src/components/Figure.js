import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

export default ({ node }) => {
  if (node.asset.mimeType === 'image/gif') {
    return (
      <figure>
        <img src={node.asset.url} alt={node.alt} />
        <figcaption>{node.caption}</figcaption>
      </figure>
    );
  }

  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 675 },
    {
      projectId: process.env.GATSBY_SANITY_PROJECT_ID || 'mlpnylp0',
      dataset: process.env.GATSBY_SANITY_DATASET || 'production',
    }
  );
  return (
    <figure>
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};
