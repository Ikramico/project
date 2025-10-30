import React, {  useState, type FC } from "react";
import Header from "./components/Header";

const Dashboard: FC = () => {
	const [isDark, setIsDark]: [
		boolean,
		React.Dispatch<React.SetStateAction<boolean>>
	] = useState(false);

	return (
		<div
			className={`min-h-screen transition-colors ${
				isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
			}`}>
			<Header isDark={isDark} setIsDark={setIsDark} />
			<div className="flex flex-col md:flex-row">
				<main className="flex-1 p-4 md:p-6">
					<div className="flex flex-col lg:flex-row gap-6">
						{/* Left Column */}
						<div className="flex-1 space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
						</div>

						{/* Right Sidebar */}
						<aside className="w-full lg:w-80 space-y-6"></aside>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Dashboard;
