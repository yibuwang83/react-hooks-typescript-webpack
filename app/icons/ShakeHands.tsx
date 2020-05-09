import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  className?: string;
}

const ShakeHands: React.FC<IconProps> = (props) => {
  const width = props.width || '100%';
  const height = props.height || '100%';
  const color = props.color || '#888';
  const className = props.className;
  return (
    <svg width={width} height={height} className={className} style={{ display: 'block' }} viewBox="0 0 24 24">
      <defs>
        <style>{'.prefix__b{fill:#888}'}</style>
        <clipPath id="prefix__a">
          <path d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path
          fill={color}
          d="M23.775 11.975L16.075 3l-1.9 1.625.425.5a5.366 5.366 0 0 0-1.95.425 5.351 5.351 0 0 0-2.9-.2l.5-.55-1.825-1.7-8.15 8.825 1.825 1.7 1-1.075 2.425 2.1a1.945 1.945 0 0 0-.1.85 2.219 2.219 0 0 0 2.2 2.05h.025a2.32 2.32 0 0 0 .725 1.375 2.278 2.278 0 0 0 1.45.55.85.85 0 0 0 .25-.025 2.127 2.127 0 0 0 .7 1.15 2.178 2.178 0 0 0 1.45.55h.15a2.18 2.18 0 0 0 1.5-.75l.675-.775a2.83 2.83 0 0 0 .25-.325 2.571 2.571 0 0 0 .9-.55 2.444 2.444 0 0 0 .7-.9 1.886 1.886 0 0 0 1.325-.65 2.279 2.279 0 0 0 .625-1.575 2.038 2.038 0 0 0 1.05-1.875 5.32 5.32 0 0 0 1.65-1.1l.85 1zM6.9 15.4a.621.621 0 0 1 .175-.5l.425-.5a.747.747 0 0 1 .525-.25.6.6 0 0 1 .45.175.742.742 0 0 1 .25.475.621.621 0 0 1-.175.5l-.425.5a.742.742 0 0 1-.475.25.721.721 0 0 1-.5-.175.639.639 0 0 1-.25-.475zm2.425 2.4a.742.742 0 0 1-.25-.475.621.621 0 0 1 .175-.5l.25-.275.85-.975a.747.747 0 0 1 .525-.25.6.6 0 0 1 .45.175.711.711 0 0 1 .075 1l-.2.225-.35.4-.55.625a.7.7 0 0 1-.975.05zm4.075.825l-.675.775a.742.742 0 0 1-.475.25.593.593 0 0 1-.5-.175.742.742 0 0 1-.25-.475.621.621 0 0 1 .175-.5l.1-.1.6-.675a.742.742 0 0 1 .475-.25h.05a.6.6 0 0 1 .45.175.742.742 0 0 1 .25.475.965.965 0 0 1-.2.5zm3.9-4.225l-.625.2.125.65c.025.15.05.625-.15.8a.562.562 0 0 1-.5.225c-.125.025-.3.025-.525.075l-.45.1-.125.45a1.935 1.935 0 0 1-.175.4 1.959 1.959 0 0 0-.6-.825 2.249 2.249 0 0 0-1.25-.525 2.251 2.251 0 0 0-.75-1.6A2.179 2.179 0 0 0 10 13.975a2.2 2.2 0 0 0-3.675-.55l-2.25-1.95L8 7.275l.025.075a11.445 11.445 0 0 1 2.725-.55 11.928 11.928 0 0 0-1.5 1.65 1.951 1.951 0 0 0-.35 2.275 2.072 2.072 0 0 0 2.2.85 5.428 5.428 0 0 0 2.625-1.4l.375-.3a16.384 16.384 0 0 1 3.2 2.35l.075.1a3.751 3.751 0 0 1 .525 1.45c.025.4-.6.625-.6.625zm1.7-2.175a3.36 3.36 0 0 0-.3-.6c-.175-.4-.9-1.2-4.25-3.3l-.425-.25-.4.275c-.3.2-.6.45-.85.65a4.067 4.067 0 0 1-1.9 1.075.672.672 0 0 1-.65-.125c-.05-.075-.025-.3.225-.6a9.505 9.505 0 0 1 2.325-2.225A5.037 5.037 0 0 1 15.55 6.6h.375l4.15 4.825a3.552 3.552 0 0 1-1.075.8z"
        />
        <path
          fill={color}
          d="M14.16 4.62L16.083 3l7.69 8.98-1.87 1.681zM8.424 3.096l1.827 1.707L2.1 13.62.276 11.93z"
        />
      </g>
    </svg>
  );
};

export default ShakeHands;