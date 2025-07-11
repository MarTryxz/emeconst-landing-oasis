const EmecoLogo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
        fill="currentColor"
      >
        {/* Cuadrado exterior */}
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="3"/>
        
        {/* Letra E - líneas horizontales */}
        <line x1="25" y1="30" x2="45" y2="30" stroke="currentColor" strokeWidth="3"/>
        <line x1="25" y1="50" x2="40" y2="50" stroke="currentColor" strokeWidth="3"/>
        <line x1="25" y1="70" x2="45" y2="70" stroke="currentColor" strokeWidth="3"/>
        <line x1="25" y1="30" x2="25" y2="70" stroke="currentColor" strokeWidth="3"/>
        
        {/* Letra M - líneas */}
        <line x1="55" y1="30" x2="55" y2="70" stroke="currentColor" strokeWidth="3"/>
        <line x1="55" y1="30" x2="65" y2="45" stroke="currentColor" strokeWidth="3"/>
        <line x1="65" y1="45" x2="75" y2="30" stroke="currentColor" strokeWidth="3"/>
        <line x1="75" y1="30" x2="75" y2="70" stroke="currentColor" strokeWidth="3"/>
        
        {/* Letra E - segunda E */}
        <line x1="20" y1="25" x2="35" y2="25" stroke="currentColor" strokeWidth="2"/>
        <line x1="60" y1="25" x2="80" y2="25" stroke="currentColor" strokeWidth="2"/>
        <line x1="20" y1="75" x2="35" y2="75" stroke="currentColor" strokeWidth="2"/>
        <line x1="60" y1="75" x2="80" y2="75" stroke="currentColor" strokeWidth="2"/>
      </svg>
    </div>
  );
};

export default EmecoLogo;