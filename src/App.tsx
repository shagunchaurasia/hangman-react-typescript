import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { HangManDrawing } from "./HangManDrawing";
import { HangManKeyboard } from "./HangManKeyboard";
import { HangManWord } from "./HangManWord";
import words from "./wordList.json";

function App() {
  const getWord = () => {
    return words.data[Math.floor(Math.random() * words.data.length)];
  };
  const [wordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length >= 6 ? true : false;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letterPressed: string) => {
      if (guessedLetters.includes(letterPressed) || isWinner || isLoser) return;
      setGuessedLetters((previousState) => {
        return [...previousState, letterPressed];
      });
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) {
        return;
      }
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addGuessedLetter, guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([])
      setWordToGuess(getWord());
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Winner!!- Refresh to Try Again"}
        {isLoser && "Nice Try -  Refresh to Try Again"}
      </div>

      <HangManDrawing numberOfGuesses={incorrectLetters.length} />
      <HangManWord
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        reveal={isLoser}
      />
      <div style={{ alignSelf: "stretch" }}>
        <HangManKeyboard
          disabled={isWinner || isLoser}
          clickHandler={addGuessedLetter}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
        />
      </div>
    </div>
  );
}

export default App;
