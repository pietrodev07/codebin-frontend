import { useTheme } from "next-themes";
import { LanguageName, langs } from "@uiw/codemirror-extensions-langs";
import ReactCodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";

interface EditorProps {
  onChange: (value: string) => void;
  code: string;
  language: LanguageName;
}

export const CodeEditor = ({ onChange, code, language }: EditorProps) => {
  const { theme, systemTheme } = useTheme();
  const themeCurrent = theme === "system" ? systemTheme : theme;
  const languageExtension = langs[language];

  return (
    <div className="w-3/4 rounded-lg border border-border bg-backgroundSecondary max-lg:w-full">
      <div className="max-h-[calc(100svh-134px)] overflow-auto p-2">
        <ReactCodeMirror
          value={code}
          theme={themeCurrent as ReactCodeMirrorProps["theme"]}
          placeholder="Enter the code..."
          basicSetup={{ lineNumbers: true, foldGutter: false }}
          extensions={languageExtension ? [languageExtension()] : []}
          onChange={onChange}
          className="overflow-hidden rounded-lg border border-border"
        />
      </div>
    </div>
  );
};
