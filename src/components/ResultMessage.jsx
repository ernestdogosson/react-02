function ResultMessage({ isCorrect, correctAnswer }) {
  return (
    <div
      className={`mb-4 p-3 rounded min-h-12 flex items-center justify-center ${
        isCorrect !== null
          ? isCorrect
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
          : "bg-transparent"
      }`}
    >
      {isCorrect !== null && (
        <>{isCorrect ? "Correct!" : `Wrong! The answer is ${correctAnswer}`}</>
      )}
    </div>
  );
}

export default ResultMessage;
