function AnswerButtons({
  options,
  onSelect,
  showResult,
  selectedAnswer,
  correctCountry,
}) {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      {options.map((country, index) => (
        <button
          key={index}
          onClick={() => onSelect(country)}
          className={`p-3 rounded border-2 transition-all ${
            showResult
              ? country.name.common === correctCountry.name.common
                ? "bg-green-100 border-green-500"
                : selectedAnswer === country
                  ? "bg-red-100 border-red-500"
                  : "bg-gray-100"
              : "bg-white hover:bg-gray-50 border-gray-300"
          }`}
          disabled={showResult}
        >
          {country.name.common}
        </button>
      ))}
    </div>
  );
}

export default AnswerButtons;
