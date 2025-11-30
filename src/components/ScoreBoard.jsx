function ScoreBoard({ correct, streak }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 h-fit flex flex-col justify-center absolute right-8 top-[200px] w-48">
      <h3 className="text-sm font-bold text-gray-800 mb-4">Score Board</h3>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Correct:</span>
          <span className="text-xl font-bold text-green-600">{correct}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">Streak:</span>
          <span className="text-base font-semibold text-orange-600">
            {streak} 🔥
          </span>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
