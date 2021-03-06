import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const AddCircle: React.FC<IconProps> = (props) => {
  const width = props.width || 24;
  const height = props.height || 24;
  const className = props.className;

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" className={className}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2a10 10 0 1 0 10 10A9.991 9.991 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.011 8.011 0 0 1-8 8z"
        fill="rgba(0,0,0,.2)"
      />
      <path
        d="M11.003 7.34v3.663H7.34v1.994h3.663v3.663h1.994v-3.663h3.663v-1.994h-3.663V7.34z"
        fill="rgba(0,0,0,.38)"
      />
    </svg>
  );
};

export default AddCircle;
