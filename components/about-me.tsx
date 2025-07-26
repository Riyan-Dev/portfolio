"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"

const timelineData = [
	{
		id: 1,
		company: "VisionRD",
		role: "AI Software Engineer",
		period: "06/2025 - Present",
		location: "Pakistan",
		type: "Full-time",
		logo: "/placeholder.svg?height=56&width=56",
		skills: [
			"Computer Vision",
			"Redis",
			"WebRTC",
			"Python",
			"Real-time Systems",
		],
	},
	{
		id: 2,
		company: "Cowlar Design Studios",
		role: "Full Stack Apprentice",
		period: "02/2025 - 06/2025",
		location: "Pakistan",
		type: "Apprentice",
		logo: "/placeholder.svg?height=56&width=56",
		skills: ["Node.js", "Vue.js", "MongoDB", "Docker", "Fabric.js"],
	},
	{
		id: 3,
		company: "Tech Quest",
		role: "AI and Automation Intern",
		period: "06/2024 - 08/2024",
		location: "Pakistan",
		type: "Internship",
		logo: "/placeholder.svg?height=56&width=56",
		skills: ["FastAPI", "LLM", "CI/CD", "GitHub Actions", "DigitalOcean"],
	},
	{
		id: 4,
		company: "Lancers",
		role: "Full Stack App Developer",
		period: "04/2024 - 07/2024",
		location: "Pakistan",
		type: "Contract",
		logo: "/placeholder.svg?height=56&width=56",
		skills: ["Flutter", "Node.js", "Flask", "AI Integration", "NLP"],
	},
	{
		id: 5,
		company: "Spark AI",
		role: "Flutter Developer",
		period: "09/2023 - 04/2024",
		location: "Pakistan",
		type: "Full-time",
		logo: "/placeholder.svg?height=56&width=56",
		skills: ["Flutter", "Firebase", "GCP", "LLM", "Agile/Scrum"],
	},
]

const skillsData = {
	"Programming Languages": [
		{ name: "Python", proficiency: 95 },
		{ name: "JavaScript/TypeScript", proficiency: 90 },
		{ name: "Dart/Flutter", proficiency: 95 },
		{ name: "Go Lang", proficiency: 75 },
		{ name: "C++", proficiency: 80 },
		{ name: "Solidity", proficiency: 70 },
	],
	"Frameworks/Libraries": [
		{ name: "Flutter", proficiency: 95 },
		{ name: "Node.js/Express.js", proficiency: 90 },
		{ name: "Vue.js", proficiency: 85 },
		{ name: "React/Next.js", proficiency: 80 },
		{ name: "FastAPI", proficiency: 85 },
		{ name: "TensorFlow/PyTorch", proficiency: 80 },
	],
	"Tools & Technologies": [
		{ name: "MongoDB/SQL", proficiency: 90 },
		{ name: "Firebase", proficiency: 85 },
		{ name: "Docker", proficiency: 80 },
		{ name: "AWS/GCP", proficiency: 75 },
		{ name: "Git", proficiency: 95 },
		{ name: "Redis", proficiency: 80 },
	],
}

export default function AboutMe() {
	return (
		<section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
			<div className="container px-4 mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-500">
							Code, Coffee & Me
						</span>
						<span className="ml-2">☕💻</span>
					</h2>
					{/* Profile Section */}
					<div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
						<div className="md:w-1/3">
							<div className="relative w-64 h-64 mx-auto">
								<Image
									src="/portfolio/profile.jpg"
									alt="Profile photo"
									fill
									className="rounded-lg object-cover shadow-lg"
								/>
							</div>
						</div>
						<div className="md:w-2/3">
							<div className="prose prose-invert max-w-none text-center md:text-left">
								{/* Mobile description */}
								<p className="text-lg leading-relaxed md:hidden">
									AI Software Engineer 🤖 and Full Stack Dev 💻. Building
									intelligent solutions with Flutter, Node.js, and cutting-edge
									AI. From computer vision to blockchain, turning complex
									problems into elegant code. 🚀⚡🔥
								</p>
								{/* Desktop description */}
								<div className="hidden md:block">
									<p className="text-xl mb-4">
										🚀 <strong>Hey, I'm Muhammad Riyan!</strong>
									</p>
									<p className="mb-4">
										An{" "}
										<strong>AI Software Engineer 🤖</strong> and{" "}
										<strong>Full Stack Wizard 💻</strong>, crafting intelligent
										solutions that bridge the gap between{" "}
										<strong>artificial intelligence</strong> and{" "}
										<strong>real-world applications</strong>! Whether it's{" "}
										<strong>computer vision pipelines</strong>,{" "}
										<strong>Flutter apps</strong>, or{" "}
										<strong>blockchain platforms</strong>, I love turning
										complex problems into elegant code.
									</p>
									<p className="mb-4">
										I spend my days building{" "}
										<strong>
											real-time AI systems, optimizing APIs, and creating
											cross-platform mobile experiences
										</strong>
										—and my nights exploring the latest in{" "}
										<strong>machine learning and Web3</strong>. 🧠 When I'm not
										coding, I'm probably fine-tuning models, contributing to{" "}
										<strong>open-source projects</strong>, or mentoring fellow
										developers.
									</p>
									<p>
										With a <strong>3.94 CGPA</strong> and multiple academic
										honors, I believe in{" "}
										<strong>continuous learning and innovation</strong>. Let's{" "}
										<strong>connect, collaborate, and create the future</strong>
										—because the best solutions come from passionate minds
										working together! 🌟⚡🔥
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Timeline Section */}
					<div className="mb-20">
						<h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-500">
								The Road So Far
							</span>
							<span className="ml-2 text-white">🛤️</span>
						</h3>
						<div className="relative">
							{/* Vertical Line (only visible on larger screens) */}
							<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 hidden md:block"></div>

							{/* Timeline Items */}
							<div className="space-y-8">
								{timelineData.map((item, index) => (
									<motion.div
										key={item.id}
										initial={{ opacity: 0, y: 50 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
										className={`flex flex-col ${
											index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
										} gap-8 relative`}
									>
										{/* Content */}
										<div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
											<div className="flex flex-col md:flex-row items-center gap-4">
												<div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
													<Image
														src={item.logo || "/placeholder.svg"}
														alt={item.company}
														width={56}
														height={56}
														className="rounded-full"
													/>
												</div>
												<div className="text-center md:text-left">
													<h3 className="text-xl font-bold text-white">
														{item.role}
													</h3>
													<h4 className="text-lg text-cyan-400">
														{item.company}
													</h4>
													<div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
														<Calendar className="w-4 h-4" />
														<span className="text-sm">{item.period}</span>
													</div>
													<div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
														<MapPin className="w-4 h-4" />
														<span className="text-sm">{item.location}</span>
													</div>
													<div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
														<Building2 className="w-4 h-4" />
														<span className="text-sm">{item.type}</span>
													</div>
												</div>
											</div>
											{item.skills.length > 0 && (
												<div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
													{item.skills.map((skill, skillIndex) => (
														<span
															key={skillIndex}
															className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-cyan-300 border border-cyan-500/20"
														>
															{skill}
														</span>
													))}
												</div>
											)}
										</div>

										{/* Timeline Point (hidden on mobile) */}
										<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hidden md:block"></div>

										{/* Timeline Connector (hidden on mobile) */}
										{index < timelineData.length - 1 && (
											<motion.div
												initial={{ height: 0 }}
												whileInView={{ height: "100%" }}
												transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
												className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 hidden md:block"
												style={{ top: "100%", height: "100px" }}
											></motion.div>
										)}
									</motion.div>
								))}
							</div>
						</div>
					</div>

					{/* Skills Section */}
					<div>
						<h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-500">
								Code Arsenal
							</span>
							<span className="ml-2 text-white">⚔️</span>
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{Object.entries(skillsData).map(([category, skills]) => (
								<div
									key={category}
									className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800"
								>
									<h4 className="text-xl font-bold mb-4 text-cyan-400 text-center md:text-left">
										{category}
									</h4>
									{skills.map((skill) => (
										<SkillBar
											key={skill.name}
											name={skill.name}
											proficiency={skill.proficiency}
										/>
									))}
								</div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}

type SkillBarProps = {
	name: string
	proficiency: number
}

function SkillBar({ name, proficiency }: SkillBarProps) {
	return (
		<div className="mb-4">
			<div className="flex justify-between mb-1">
				<span className="text-gray-300">{name}</span>
				<span className="text-gray-400">{proficiency}%</span>
			</div>
			<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
				<motion.div
					initial={{ width: 0 }}
					whileInView={{ width: `${proficiency}%` }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
				/>
			</div>
		</div>
	)
}
