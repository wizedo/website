import Button from "./button";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<div className="w-full pt-40 px-10">
			<h1 className="text-[25vw] uppercase leading-none text-center tracking-[-5] font-humaneMedium text-white">
				subscribe to PEERMATE
			</h1>
			<div className="relative w-full flex items-center justify-center">
				<div className="absolute -bottom-20 right-80">
					<div className="relative">
						<motion.img
							animate={{
								rotate: [0, 360],
								transition: {
									duration: 6,
									ease: "linear",
									repeat: Infinity,
								},
							}}
							src={"/circlerotation.svg"}
							alt="right eye"
							width={250}
							height={250}
							className="w-[250px] h-[250px]"
						/>
						<h1 className="text-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase leading-tight font-humaneMedium text-black">
							PEERMATE
						</h1>
					</div>
				</div>
			</div>
			<div className="w-full flex items-center justify-center py-40">
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
