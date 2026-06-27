import type { PersonCredit } from "../../types/tmdb";
import { FaMasksTheater, FaClapperboard, FaPencil, FaQuestion } from "react-icons/fa6";

export function getPersonRole(project: PersonCredit) {
    if (project.character) {
        return {
            key: "actor",
            icon: FaMasksTheater
        };
    }

    switch (project.department) {
        case "Directing":
            return {
                key: "director",
                icon: FaClapperboard
            };

        case "Writing":
            return {
                key: "writer",
                icon: FaPencil
            };

        default:
            return {
                key: "unknown",
                icon: FaQuestion
            };
    }
}