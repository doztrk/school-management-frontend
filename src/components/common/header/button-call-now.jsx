import { config } from "@/helpers/config";
import React from "react";

export const ButtonCallNow = () => {
	return (
		<div>
			<a href={config.contact.info.phone1.link} className="btn btn-outline-primary">
				CALL NOW
			</a>
		</div>
	);
};
