const HEAD = (
  <div
    style={{
      border: "10px solid black",
      borderRadius: "100%",
      position: "absolute",
      height: "50px",
      width: "50px",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      background: "black",
      position: "absolute",
      height: "100px",
      width: "10px",
      top: "120px",
      right: "0",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      background: "black",
      position: "absolute",
      height: "10px",
      width: "100px",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      background: "black",
      position: "absolute",
      height: "10px",
      width: "100px",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      background: "black",
      position: "absolute",
      height: "10px",
      width: "100px",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      background: "black",
      position: "absolute",
      height: "10px",
      width: "100px",
      top: "210px",
      right: "0",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

interface HangManDrawingProps {
  numberOfGuesses: number;
}
export const HangManDrawing = ({ numberOfGuesses }: HangManDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}

      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
};
