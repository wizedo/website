import { Eye } from "@/components";
import { motion, MotionValue, useTransform } from "framer-motion";

export default function Hero({
	scrollYProgress,
}: {
	scrollYProgress: MotionValue<number>;
}) {
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
	return (
		<motion.div
			style={{ scale, rotate }}
			className="w-full h-screen bg-heroGradient bg-cover bg-center sticky top-0 left-0 pb-[10vh] overflow-hidden">
			<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
				<h1 className="text-[45vw] uppercase leading-none tracking-[-5] font-humaneMedium text-white relative">
					Peermate
					<div className="absolute bottom-28 -right-16">
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
							<h1 className="text-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase leading-tight font-humaneMedium text-black tracking-wide">
								PEERMATE
							</h1>
						</div>
					</div>
				</h1>
			</div>
			<Eye />
			<div className="absolute bottom-5 text-center left-1/2 -translate-x-1/2">
				<h1 className="text-[18px] font-helveticaNeue leading-tight text-white uppercase">
					PeerMate is your campus {" "}
					<span className="text-[24px] font-bodoniseventytwo leading-tight lowercase">
						skill-sharing hub
					</span>
					{" "} Learn new skills, teach what you know {" "} 
					<span className="text-[24px] font-bodoniseventytwo leading-tight lowercase">
						and grow together
					</span>
				</h1>
			</div>
			<div className="absolute bottom-20 -left-20">
				<motion.img
					src={"/linedraw.svg"}
					alt="right eye"
					width={300}
					height={300}
					className="w-full h-full"
				/>
			</div>
		</motion.div>
	);
}
