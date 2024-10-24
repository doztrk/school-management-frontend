import { Instructors } from "@/components/about/instructors";
import { Welcome } from "@/components/about/welcome";
import { Spacer } from "@/components/common/spacer/spacer";
import { PageHeader } from "@/components/page-header/page-header";
import React from "react";

export const metadata = {
	title: "About Us",
	description:
		"Learn more about us. Learn from our experienced educators and take your learning to the next level. Let's get started!",
};

const Page = () => {
	return (
		<>
			<PageHeader title={"About Us"} />
			<Spacer />
			<Welcome />
			<Spacer />
			<Instructors />
			<Spacer />
		</>
	);
};

export default Page;
