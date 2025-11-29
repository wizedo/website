import { Button } from "@/components";
import Image from "next/image";

export default function Navbar() {
	return (
		<div className="fixed top-0 left-0 w-full flex justify-between items-center py-5 px-10 z-50 backdrop-blur-sm">
			<div className="flex flex-col gap-2">
				<Image 
					className="w-[150px] h-[50px]"
					src="/logo.svg" alt="logo" width={200} height={200} 
					/>
			</div>
			<div className="flex items-center gap-2">
				{/* <Button title="Contact Us" /> */}
				<a
					href="https://play.google.com/store/apps/details?id=com.scanpick.peermatee&pcampaignid=web_share"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button title="Download App" />
				</a>
			</div>
		</div>
	);
}
