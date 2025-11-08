import { useTheme } from "../contexts/ThemeContext";

export default function LineNumbers({ lineCount }) {
  const { isDark } = useTheme();
  
  return (
    <div className={`fixed left-0 top-0 bottom-0 w-12 ${
      isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-gray-300'
    } border-r flex flex-col items-center pt-20 select-none z-10`}>
      {Array.from({ length: lineCount }, (_, i) => (
        <div
          key={i + 1}
          className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'} leading-6 font-mono`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}