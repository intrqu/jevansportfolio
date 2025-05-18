"use client";

import { useEffect } from "react";

const ConsoleEasterEgg = () => {
	useEffect(() => {
		console.log(
			`%cHey there, curious cat! 🐱
			
You’ve opened the console, which means you’re either a developer, a hacker, or just vibing dangerously.

Inspect respectfully. 😈`,
			"color: hotpink; font-size: 14px; font-family: monospace;"
		);
	}, []);

	return null;
};

export default ConsoleEasterEgg;
