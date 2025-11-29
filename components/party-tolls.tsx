"use client"
import Image from "next/image";
import { useState } from "react";
import { partyItems } from "@/constants";
import { AnimatedText } from "@/components";

export default function PartyTolls() {
	const [openId, setOpenId] = useState<number | null>(null);

	const toggleItem = (id: number) => {
		setOpenId((current) => (current === id ? null : id));
	};

	const getAnswer = (id: number) => {
		switch (id) {
			case 1:
				return "PeerMate is a peer-to-peer learning and collaboration platform for college students to share skills, learn from each other, and work together on both academic and creative interests.";
			case 2:
				return "Students can offer or request a wide range of skills — from programming (Python, Web Development, AI, Cybersecurity) to creative and practical skills like Guitar, Violin, Painting, Video Editing, Public Speaking, and even simple tasks like assignments help or getting xerox.";
			case 3:
				return "Not necessarily! Students can choose to exchange skills directly (like teaching guitar in return for coding help) or offer payment if preferred. It’s entirely flexible based on peer agreement.";
			case 4:
				return "Only college students can join. The platform connects you with peers from your own college to ensure trust, convenience, and collaborative learning on campus.";
			case 5:
				return "PeerMate makes it easy to: Learn new skills during free periods, Collaborate on projects & build portfolios, Earn by teaching skills you already know, Meet like-minded students & grow your network"
			default:
				return "More details coming soon.";
		}
	};

	return (
		<>
			<div className="w-full py-20 bg-heroGradient">
				<div className="w-full flex items-center justify-between gap-2 pt-40 pb-10 px-10">
					<AnimatedText
						text="FAQ"
						className="text-[250px] text-white overflow-hidden leading-[0.85]"
					/>
					<h1 className="text-[24px] font-helveticaNeue leading-none text-white uppercase text-right">
						All your questions <br />
						you{" "}
						<span className="text-[34px] font-bodoniseventytwo leading-[0.9] lowercase">
							need Answers{" "}
						</span>
						For
					</h1>
				</div>
				<div className="w-full flex flex-col">
					{partyItems.map((item) => {
						const isOpen = openId === item.id;
						return (
							<div
								key={item.id}
								className="w-full border-b border-black">
								<button
									onClick={() => toggleItem(item.id)}
									className="w-full flex items-center justify-between pt-4 px-10 cursor-pointer group hover:bg-black/10">
									<h1 className="text-[100px] font-humaneMedium leading-none text-white uppercase text-left group-hover:translate-x-10 transition-all duration-200 ease-in-out">
										{item.title}
									</h1>
									<Image
										src={item.src}
										alt="arrowUp"
										width={100}
										height={100}
										className={`w-[100px] h-[100px] object-cover transition-all duration-200 ease-in-out group-hover:-translate-x-10 ${
											isOpen ? "rotate-180" : ""
										}`}
									/>
								</button>
								{isOpen && (
									<div className="px-10 pb-6 pt-2 bg-heroGradient">
										<p className="text-[18px] leading-snug font-helveticaNeue text-white">
											{getAnswer(item.id)}
										</p>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
