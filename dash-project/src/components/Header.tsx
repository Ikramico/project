import { Search, Menu, Moon, Sun } from "lucide-react";
import type { FC } from "react";


interface HeaderProps {
	isDark: boolean;
	setIsDark: (value: boolean) => void;
}

const Header: FC<HeaderProps> = ({ isDark, setIsDark }) => {
	return (
		<header
			className={`flex items-center justify-between px-4 md:px-6 py-4 border-b transition-colors ${
				isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
			}`}>
			<div className="flex items-center gap-4 md:gap-6 flex-1">
				<button title="btn"
					className={`p-2 rounded ${
						isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
					}`}>
					<Menu size={20} />
				</button>
				<nav className="hidden md:flex gap-6">
					<a
						href="#"
						className={`font-medium border-b-2 border-indigo-500 pb-4 ${
							isDark ? "text-white" : "text-gray-900"
						}`}>
						Dashboard
					</a>
					<a
						href="#"
						className={`pb-4 ${
							isDark
								? "text-gray-400 hover:text-white"
								: "text-gray-400 hover:text-gray-900"
						}`}>
						Advanced Quarry
					</a>
					<a
						href="#"
						className={`pb-4 ${
							isDark
								? "text-gray-400 hover:text-white"
								: "text-gray-400 hover:text-gray-900"
						}`}>
						Events
					</a>
				</nav>
				<button title="btn"
					className={`p-2 rounded ml-auto md:ml-0 ${
						isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
					}`}>
					<Search size={20} />
				</button>
			</div>
			<div className="flex items-center gap-4">
				<span className="text-sm hidden md:inline">Bessie Cooper</span>
				<img
					src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
					className="w-10 h-10 rounded-full"
					alt="User"
				/>
				<button
					onClick={() => setIsDark(!isDark)}
					className={`p-2 rounded ${
						isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"
					}`}>
					{isDark ? <Sun size={20} /> : <Moon size={20} />}
				</button>
			</div>
		</header>
	);
};

export default Header;
