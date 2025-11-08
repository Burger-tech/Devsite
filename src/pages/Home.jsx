import { useTheme } from "../contexts/ThemeContext";

export default function Home() {
  const { isDark } = useTheme();
  
  return (
    <div className="pl-16 pr-8 py-8">
      <h1 className={`text-4xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
        Welcome to My Portfolio
      </h1>
      <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem eum expedita laborum veniam eaque quo, pariatur recusandae voluptates autem, mollitia dolores iste consequatur repudiandae illo vitae, minima aliquam ut in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique inventore dolores officiis numquam quod reprehenderit architecto impedit veniam, optio magni sed vitae cupiditate suscipit minus? Officia dolores nam placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, nisi et, voluptatum voluptates temporibus vero perspiciatis deleniti numquam consequatur quisquam repellendus dolore eos alias libero aut delectus ratione vitae eveniet.
      </p>
    </div>
  );
}