import React from "react";
import { SectionTitle } from "../common/section-title/section-title";
import { Container } from "react-bootstrap";
import { UpcomingEventsCarousel } from "./upcoming-events-carousel";
import events from "../../helpers/data/events.json";

export const UpcomingEvents = () => {
	const upcomingEvents = events.filter(
		(item) => new Date(item.date) > new Date()
	);
	return (
		<Container>
			<SectionTitle>Upcoming Events</SectionTitle>
			<UpcomingEventsCarousel upcomingEvents={upcomingEvents} />
		</Container>
	);
};
