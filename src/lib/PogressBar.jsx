"use client"
import React from 'react';
import { ProgressBar  as NextProgress} from 'nextjs-progressbar';
const PogressBar = () => {
    return (
        <NextProgress
        color="#ff0000"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
       
    );
};

export default PogressBar;