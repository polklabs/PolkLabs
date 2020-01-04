export interface AboutModel {
    welcomeTitle: string;
    welcomeSubtitle: string;
    name: string;
    photo: string;
    title: string;
    bio: string;
    summary: string;
    currentFocus: string;
    resume: string;
    experience: {
        logo: string;
        company: string;
        title: string;
        summary: string;
        items: {
            type: string;
            title: string;
            items: string[];
        }[];
        dates: string;
        location: string;
    }[];
    skills: {
        title: string;
        items: {
            text: string;
            logo: string;
        }[];
    }[];
    awards: {
        title: string;
        location: string;
        date: string;
        summary: string;
    }[];
    education: {
        school: string;
        location: string;
        bullets: string[];
    }[];
}
