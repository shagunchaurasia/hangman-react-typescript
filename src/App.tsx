import { SyntheticEvent, useEffect, useState } from "react";
import "./App.css";
import { HangManDrawing } from "./HangManDrawing";
import { HangManKeyboard } from "./HangManKeyboard";
import { HangManWord } from "./HangManWord";
import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words.data[Math.floor(Math.random() * words.data.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const clickHandler = (letterClicked: string) => {
    setGuessedLetters((previousState) => {
      return [...previousState, letterClicked];
    });
  };

  const addGuessedLetter = (letterPressed: string) => {
    if (guessedLetters.includes(letterPressed)) return;
    setGuessedLetters((previousState) => {
      return [...previousState, letterPressed];
    });
  };
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
  }, [guessedLetters]);

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
      <div style={{ fontSize: "2rem", textAlign: "center" }}>Lose or Win</div>
      <h1>{wordToGuess}</h1>

      <HangManDrawing numberOfGuesses={incorrectLetters.length} />
      <HangManWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <div style={{ alignSelf: "stretch" }}>
        <HangManKeyboard clickHandler={clickHandler} />
      </div>
    </div>
  );
}

export default App;
