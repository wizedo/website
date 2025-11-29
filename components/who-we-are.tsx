"use client";
import Image from "next/image";
import { useRef } from "react";
import { AnimatedText } from "@/components";
import { motion, useScroll, useTransform } from "framer-motion";
import { emoji, emoji2, emoji3, whoweareline } from "@/public";

export default function WhoWeAre() {
	const container1Ref = useRef(null);
	const container2Ref = useRef(null);

	const { scrollYProgress: scrollYProgress1 } = useScroll({
		target: container1Ref,
		offset: ["start end", "end start"],
	});

	const { scrollYProgress: scrollYProgress2 } = useScroll({
		target: container2Ref,
		offset: ["start end", "end start"],
	});
	const cq = useTransform(scrollYProgress1, [0, 1], [0, 200]);
	const crq = useTransform(scrollYProgress1, [0, 1], [0, 40]);
	const mq = useTransform(scrollYProgress2, [0, 1], [0, -200]);
	const mrq = useTransform(scrollYProgress2, [0, 1], [0, 40]);

	return (
		<>
			<div className="w-full h-screen bg-greenColor pt-20">
				<div className="w-full flex items-center justify-between gap-5 p-10 h-full">
					<div className="w-1/2 flex flex-col justify-between gap-5 relative h-full">
						<div className="flex flex-col">
							<AnimatedText
								text="What is"
								className="text-[250px] text-[#1c1c1c] overflow-hidden leading-[0.85]"
							/>
							<AnimatedText
								text="PEERMATE"
								className="text-[250px] text-[#1c1c1c] overflow-hidden leading-[0.85]"
							/>
						</div>
						<div className="w-full flex justify-end items-end">
							<motion.p className="leading-tight text-lg uppercase font-helveticaNeue text-[#1c1c1c]">
								PeerMate is a peer-to-peer learning and collaboration platform for college students, helping them connect with peers who can teach or guide them in a wide range of academic and non-academic skills—from Python and web development to guitar, painting, and public speaking. Students can post what they want to learn, offer skill exchanges or payment, and easily find someone in their college to learn from during free periods or collaborate with on projects, creating a supportive and flexible learning ecosystem.
							</motion.p>
						</div>
					</div>
					<div
						ref={container1Ref}
						className="w-1/2 relative h-full flex justify-end items-start">
						
						<motion.div
							className="absolute top-0 right-12"
							style={{ y: cq, rotate: crq }}>
							<Image
								src={emoji}
								alt="flowCurveTextImg"
								width={300}
								height={300}
							/>
						</motion.div>
					</div>
				</div>
			</div>
			<div className="w-full h-screen bg-greenColor py-20">
				<div className="w-full flex h-full relative">
					<div
						ref={container2Ref}
						className="w-1/4 flex flex-col justify-between gap-5 relative h-full">
						<motion.div
							className="flex flex-col"
							style={{ y: mq, rotate: mrq }}>
							<Image
								src={emoji3}
								alt="emoji3img"
								width={300}
								height={300}
							/>
						</motion.div>
					</div>
					<div className="w-1/2 h-full flex justify-center items-center relative z-50">
						<div className="flex flex-col gap-14">
							<div className="w-full flex flex-col items-center justify-center overflow-hidden">
								<AnimatedText
									className="text-[#1c1c1c] leading-[0.85] text-[200px] overflow-hidden"
									text="A Perfect Place for"
								/>
								<AnimatedText
									className="text-[#1c1c1c] leading-[0.85] text-[200px] overflow-hidden"
									text="All College Folks"
								/>
								<AnimatedText
									className="text-[#1c1c1c] leading-[0.85] text-[200px] overflow-hidden"
									text="to learn, share knowledge"
								/>
								<AnimatedText
									className="text-[#1c1c1c] leading-[0.85] text-[200px] overflow-hidden"
									text="and create network"
								/>
							</div>
						</div>
						<motion.div
							className="absolute -bottom-40 -right-10 overflow-hidden"
							style={{ y: mq, rotate: mrq }}>
							<Image
								src={emoji2}
								alt="emoji2img"
								width={300}
								height={300}
							/>
						</motion.div>
					</div>
					<div className="w-1/4 h-full overflow-hidden">
						<Image
							src={whoweareline}
							alt="whoweareimg"
							width={400}
							height={400}
							className="absolute top-1/2 -right-20 -translate-y-1/2"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
