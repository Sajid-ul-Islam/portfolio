import React from 'react';

export default function SketchbookFilters() {
  return (
    <div style={{ display: 'none' }}>
      <svg aria-hidden="true" width="0" height="0" class="pointer-events-none absolute">
    <filter id="sk-rough-1" x="-25%" y="-25%" width="150%" height="150%">
      <feTurbulence type="fractalNoise" baseFrequency="0.019" numOctaves="4" seed="11" result="n"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="5.6" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
    <filter id="sk-rough-2" x="-25%" y="-25%" width="150%" height="150%">
      <feTurbulence type="fractalNoise" baseFrequency="0.023" numOctaves="4" seed="19" result="n"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="6.4" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
    <filter id="sk-rough-text" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="7" result="n"></feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
  </svg>
    </div>
  );
}
