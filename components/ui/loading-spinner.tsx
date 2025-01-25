const LoadingSpinner = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <figure className="loader">
        <div className="dot black"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </figure>
    </div>
  );
};

export default LoadingSpinner;