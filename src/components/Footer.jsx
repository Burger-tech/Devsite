import { useTheme } from "../contexts/ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();
  
  return (
    <footer className={`fixed bottom-0 left-12 right-0 ${
      isDark ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'
    } py-3 px-8 text-sm border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
      <p>2025 Tyler Bergsma. All rights reserved.</p>
    </footer>
  );
}