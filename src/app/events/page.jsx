import { Spacer } from "@/components/common/spacer/spacer";
import { Events } from "@/components/events/events";
import { PageHeader } from "@/components/page-header/page-header";
import React from "react";

export const metadata = {
	title: "Events",
	description:
		"Explore the variety of events we offer to help you reach your goals. Learn from our experienced educators and take your learning to the next level. Let's get started!",
};
const Page = () => {
	return (
		<>
			<PageHeader title="Events" />
			<Spacer />
			<Events />
			<Spacer />
		</>
	);
};

export default Page;
