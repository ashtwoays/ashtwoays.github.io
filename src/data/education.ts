interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Bachelor of Information Systems",
        startDate: "2017-03-01",
        endDate: "2020-09-18",
        school: "Bina Insani University",
        location: "Bekasi, Indonesia",
        description: "GPA 3.60",
        currentUni: false,
    }
];

export default education;
