import { useState } from "react";
import SimpleMarkdown from "simple-markdown";

const parseMarkdown = (markdownText: string) => {
  const rules = SimpleMarkdown.defaultRules;
  const rawBuiltParser = SimpleMarkdown.parserFor(rules);
  const parseTree = rawBuiltParser(markdownText + "\n\n", { inline: false });

  const reactOutput = SimpleMarkdown.outputFor(rules, "react");

  return reactOutput(parseTree);
};

const MarkdownRenderer = ({ markdownText }: { markdownText: string }) => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };
  const getPreviewText = (text: string, lines: number): string => {
    return text.split("\n").slice(0, lines).join("\n");
  };

  const previewText = getPreviewText(markdownText, 4);

  return (
    <div>
      {parseMarkdown(showFullText ? markdownText : previewText)}
      {!showFullText && markdownText.split("\n").length > 4 && (
        // put button in a divider
        <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", paddingTop: "10px", borderTop: "1px solid #ccc" }}>
        <button style={{ padding: "10px 20px",  color:"white", backgroundColor: "transparent", cursor: "pointer" }} onClick={toggleShowFullText}>
            {showFullText ? "Show less" : "Show more"}
        </button>
        </div>
      )}
    </div>
  );
};

export default MarkdownRenderer;
