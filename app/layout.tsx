import { Navbar } from "@/components";
import "@/styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "PEERMATE",
	description: "PEERMATE IS YOUR SPACE TO LEARN, TEACH AND GROW TOGETHER",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
