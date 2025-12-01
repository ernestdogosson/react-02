import { useState, useEffect } from "react";
import FlagDisplay from "./FlagDisplay";
import ResultMessage from "./ResultMessage";
import AnswerButtons from "./AnswerButtons";
import NextButton from "./NextButton";
import ScoreBoard from "./ScoreBoard";

function Api() {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);

  const shuffleArray = (array) => {
    return [...array].sort(() => 0.5 - Math.random());
  };

  const selectRandomCountry = (countryList) => {
    if (countryList.length > 0) {
      const randomCountry = Math.floor(Math.random() * countryList.length);
      const selected = countryList[randomCountry];
      setCurrentCountry(selected);

      const sameRegion = countryList.filter(
        (c) =>
          c.region === selected.region &&
          c.name.common !== selected.name.common,
      );

      const wrongCountries = shuffleArray(sameRegion).slice(0, 3);
      const allOptions = shuffleArray([selected, ...wrongCountries]);

      setOptions(allOptions);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,region",
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setCountries(data);
        }
      } catch (error) {
        console.log("error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      setTimeout(() => {
        const randomCountry = Math.floor(Math.random() * countries.length);
        const selected = countries[randomCountry];

        const sameRegion = countries.filter(
          (c) =>
            c.region === selected.region &&
            c.name.common !== selected.name.common,
        );

        const wrongCountries = shuffleArray(sameRegion).slice(0, 3);
        const allOptions = shuffleArray([selected, ...wrongCountries]);

        setCurrentCountry(selected);
        setOptions(allOptions);
        setSelectedAnswer(null);
        setShowResult(false);
      }, 0);
    }
  }, [countries]);

  const handleAnswerSelect = (country) => {
    setSelectedAnswer(country);
    setShowResult(true);

    if (country.name.common === currentCountry.name.common) {
      setCorrectAnswers((prev) => prev + 1);
      setCurrentStreak((prev) => prev + 1);
    } else {
      setCurrentStreak(0);
    }
  };

  const nextCountry = () => {
    selectRandomCountry(countries);
  };

  if (!currentCountry) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Guess the flag!</h2>
      <div className="max-w-md mx-auto">
        <FlagDisplay flagUrl={currentCountry.flags.png} />

        <ResultMessage
          isCorrect={
            showResult
              ? selectedAnswer.name.common === currentCountry.name.common
              : null
          }
          correctAnswer={currentCountry.name.common}
        />

        <AnswerButtons
          options={options}
          onSelect={handleAnswerSelect}
          showResult={showResult}
          selectedAnswer={selectedAnswer}
          correctCountry={currentCountry}
        />

        <NextButton onClick={nextCountry} />
      </div>

      <ScoreBoard correct={correctAnswers} streak={currentStreak} />
    </div>
  );
}

export default Api;
