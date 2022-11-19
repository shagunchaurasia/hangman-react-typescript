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
}

export const HangManKeyboard = ({ clickHandler }: HangManKeyboardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {alphabets.map((alphabet) => {
        return (
          <button
            key={alphabet}
            className={`btn `}
            onClick={(e) => clickHandler(alphabet)}
          >
            {alphabet}
          </button>
        );
      })}
    </div>
  );
};
