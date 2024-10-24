import { Spacer } from "@/components/common/spacer/spacer";
import Contact from "@/components/contact/contact";
import { PageHeader } from "@/components/page-header/page-header";
import React from "react";

export const metadata = {
	title: "Contact Us",
	description:
		"Get in touch with us for any questions or concerns. We're here to help!",
};
const Page = () => {
	return (
		<>
			<PageHeader title="Contact Us" />
			<Spacer />
			<Contact />
		</>
	);
};

export default Page;
