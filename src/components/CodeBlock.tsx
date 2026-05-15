import React, { useState, useEffect } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  typewriter?: boolean;
  showCursor?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "typescript",
  filename = "code.ts",
  showLineNumbers = false,
  typewriter = false,
  showCursor = true,
}) => {
  const [displayedCode, setDisplayedCode] = useState(typewriter ? "" : code);
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(typewriter);

  useEffect(() => {
    if (!typewriter) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index <= code.length) {
        setDisplayedCode(code.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
        setShowBlinkingCursor(false);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [code, typewriter]);

  const lines = displayedCode.split("\n");

  return (
    <div className="w-full rounded-lg overflow-hidden border border-slate-mid/60 bg-slate-mid/40 backdrop-blur-sm">
      {/* Top Bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-slate-mid/60 border-b border-slate-mid/60">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 opacity-80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 opacity-80"></div>
        </div>
        <span className="text-xs text-chalk/60 ml-auto font-mono">
          {filename}
        </span>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm text-chalk/90 leading-relaxed">
          {showLineNumbers && (
            <div className="inline-block mr-6 text-chalk/40">
              {lines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
          )}
          <code className="text-chalk/90">
            {displayedCode}
            {showBlinkingCursor && (
              <span
                className="inline-block w-2 h-5 bg-amber ml-0.5"
                style={{ animation: "blink 1s infinite" }}
              ></span>
            )}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
