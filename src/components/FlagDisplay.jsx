function FlagDisplay({ flagUrl }) {
  return (
    <img
      src={flagUrl}
      alt="Flag to guess"
      className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
    />
  );
}

export default FlagDisplay;
