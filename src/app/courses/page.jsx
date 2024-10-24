import { Spacer } from "@/components/common/spacer/spacer";
import { Courses } from "@/components/courses/courses";
import { PageHeader } from "@/components/page-header/page-header";
import React from "react";

export const metadata = {
	title: "Courses",
	description:
		"Explore the variety of courses we offer to help you reach your goals. Learn from our experienced educators and take your learning to the next level. Let's get started!",
};
const Page = () => {
	return (
		<>
			<PageHeader title="Courses" />
			<Spacer />
			<Courses featured={false} />
			<Spacer />
		</>
	);
};

export default Page;
