import React from 'react';

export const AuroraBackground: React.FC = () => {
  return (
    <div id="aurora" className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Blob 1 - Emerald Glow */}
      <div className="absolute w-[60vw] h-[60vw] -top-[15%] -left-[10%] rounded-full blur-[100px] opacity-25 bg-[radial-gradient(circle,#10b981,transparent_70%)] animate-blob1 mix-blend-screen" />
      
      {/* Blob 2 - Cyan/Violet Glow */}
      <div className="absolute w-[50vw] h-[50vw] top-[20%] -right-[15%] rounded-full blur-[110px] opacity-20 bg-[radial-gradient(circle,#6366f1,transparent_70%)] animate-blob2 mix-blend-screen" />
      
      {/* Blob 3 - Amber Glow */}
      <div className="absolute w-[55vw] h-[55vw] -bottom-[20%] left-[10%] rounded-full blur-[120px] opacity-15 bg-[radial-gradient(circle,#f59e0b,transparent_70%)] animate-blob3 mix-blend-screen" />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};
