const toolSvg = [
  {
    d: "M314.492 252.75C314.492 95.25 125.492 189.75 125.492 0.75",
    img: "github.svg",
    imgPos: {
      x: "-20",
      y: "-75",
    },
  },
  {
    d: "M314.492 252.75C314.492 95.25 251.492 189.75 251.492 0.75",
    img: "js.svg",
    imgPos: {
      x: "100",
      y: "-75",
    },
  },
  {
    d: "M314.492 252.75C314.492 95.25 377.492 189.75 377.492 0.75",
    img: "next.svg",
    imgPos: {
      x: "230",
      y: "-75",
    },
  },
  {
    d: "M314.492 252.75C314.492 95.25 503.492 189.75 503.492 0.75",
    img: "vscode.svg",
    imgPos: {
      x: "355",
      y: "-75",
    },
  },
  {
    d: "M313.867 252.499C313.867 95.3133 628.238 189.625 628.238 1.00195",
    img: "wordpress.svg",
    imgPos: {
      x: "480",
      y: "-75",
    },
  },
  ,
  {
    d: "M315.121 252.499C315.121 95.3133 0.75 189.625 0.75 1.00195",
    img: "ai.svg",
    imgPos: {
      x: "600",
      y: "-75",
    },
  },
];

export default function Tool() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-wrap ">
      <svg viewBox="0 0 600 300" className="w-150   p-10 overflow-visible">
        {/* Base line */}

        {toolSvg.map((line, index) => {
          return (
            <g key={index}>
              {/* Base line */}

              <path
                d={line ? line.d : ""}
                stroke="rgb(38,38,38)"
                strokeWidth="1.5"
                fill="transparent"
              />

              {/* Animated pulse */}
              <path
                d={line ? line.d : ""}
                stroke="#ff442e"
                strokeWidth="1.5"
                fill="transparent"
                strokeDasharray="20 80"
                pathLength="100"
                className="pulse-line"
              />
              <image
                href={`/images/${line ? line.img : ""}`}
                x={line ? line.imgPos.x : ""}
                y={line ? line.imgPos.y : ""}
                width="45"
                height="45"
              />
            </g>
          );
        })}
        <image
          href={`/images/dabba.svg`}
          x={285}
          y={270}
          width={60}
          height={60}
          className=""
        />
      </svg>
    </div>
  );
}
