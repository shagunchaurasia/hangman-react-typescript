const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
interface HangManKeyboardProps {
  clickHandler: (letterClicked: string) => void;
  activeLetters: string[];
  inactiveLetters: string[];
  disabled?: boolean;
}

export const HangManKeyboard = ({
  clickHandler,
  activeLetters,
  inactiveLetters,
  disabled=false,
}: HangManKeyboardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {alphabets.map((alphabet) => {
        const inactive = inactiveLetters.includes(alphabet) ? "inactive" : "";
        const active = activeLetters.includes(alphabet) ? "active" : "";
        return (
          <button
            key={alphabet}
            className={`btn ${inactive} ${active} `}
            onClick={(e) => clickHandler(alphabet)}
            disabled={inactive || active || disabled ? true : false}
          >
            {alphabet}
          </button>
        );
      })}
    </div>
  );
};
