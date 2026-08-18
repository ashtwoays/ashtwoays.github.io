/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "IT Development & Support",
        startDate: "2024-12-10",
        company: "PT Anggana Catur Prima (Dua Belibis)",
        location: "Pluit, North Jakarta",
        description: "Responsible for managing and maintaining internal operational systems, leading cross-divisional incident resolutions through root cause analysis, driving third-party integrations, and providing end-to-end user support to ensure smooth daily business operations.",
        goals: [
            "Handled operational system incidents and issues by conducting root cause analysis and leading cross-divisional coordination.",
            "Managed system integration with the Jubelio E-Commerce Enabler platform.",
            "Developed user guides and provided ongoing support to operational teams",
        ],
        currentJob: true,
    },
    {
        title: "IT Development",
        startDate: "2022-03-01",
        endDate: "2024-12-01",
        company: "PT Mega Perintis Tbk",
        location: "Setiabudi, South Jakarta",
        description: "Spearheaded web application maintenance, system integrations, and API gateway implementations to drive system stability and automated operational workflows.",
        goals: [
            "Maintained and enhanced application stability by performing technical issue analysis and bug fixes.",
            "Coordinated with third-party vendors during system integrations to validate data flows and core functionality.",
            "Designed and implemented API Gateways to seamlessly connect systems with TADA (Membership & Loyalty), Jubelio (E-Commerce Enabler), and BCA SNAP API (Payment & Banking Services).",
            "Built an API Traffic & Error Monitoring Dashboard to track performance metrics and expedite incident response.",
            "Engineered a System Scheduler to automate daily report delivery via WhatsApp.",
            "Configured and customized web commerce layouts based on the Shopify platform."
        ],
        currentJob: false,
    },
    {
        title: "IT Internship",
        startDate: "2020-09-01",
        endDate: "2021-02-28",
        company: "PT Pertamina International Shipping",
        location: "Kuningan, South Jakarta",
        description: "Managed IT infrastructure assets and network storage operations while developing internal custom web tools to streamline company reservation processes.",
        goals: [
            "Managed company shared folders and centralized network storage utilizing QNAP NAS.",
            "Archived and maintained accurate records of all corporate IT assets.",
            "Designed and developed a web-based internal reservation system."
        ],
        currentJob: false,
    },
];
export default workExperience;
