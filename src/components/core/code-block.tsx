import { useTheme } from "next-themes";
import { LanguageName, langs } from "@uiw/codemirror-extensions-langs";
import ReactCodeMirror, { ReactCodeMirrorProps } from "@uiw/react-codemirror";

interface CodeBlockProps {
  code: string;
  language: LanguageName;
}

export const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const { theme, systemTheme } = useTheme();
  const themeCurrent = theme === "system" ? systemTheme : theme;
  const languageExtension = langs[language];

  return (
    <div className="w-1/3 min-w-[400px] max-sm:min-w-full max-sm:self-start">
      <ReactCodeMirror
        value={code}
        theme={themeCurrent as ReactCodeMirrorProps["theme"]}
        editable={false}
        basicSetup={{ lineNumbers: true, foldGutter: false }}
        extensions={[languageExtension()]}
        className="overflow-hidden rounded-lg border border-border"
      />
    </div>
  );
};
