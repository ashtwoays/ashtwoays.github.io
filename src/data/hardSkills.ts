interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "JavaScript",
    description: "Core language for building dynamic user interfaces and scalable web applications across the full stack.",
    icon: "javascript"
  },
  {
    name: "PHP",
    description: "Primary backend language used to build robust enterprise web applications and complex internal systems.",
    icon: "PHP"
  },
  {
    name: "Go",
    description: "Utilized for high-performance backend microservices, quick execution concurrency, and efficient API development.",
    icon: "go"
  },
  {
    name: "Laravel",
    description: "Go-to PHP framework for rapid, full-stack development, admin panels, and enterprise-grade backend APIs.",
    icon: "Laravel"
  },
  {
    name: "Node JS",
    description: "Event-driven runtime used for building scalable server-side tools, automation services, and REST APIs.",
    icon: "Node.js"
  },
  {
    name: "Express JS",
    description: "Minimalist Node.js framework applied for crafting lightweight backend microservices and API gateways.",
    icon: "Express"
  },
  {
    name: "MySQL",
    description: "Essential for relational database management, data modeling, complex queries, and reporting workflows.",
    icon: "MySQL"
  },
  {
    name: "REST API",
    description: "Standard architecture relied on for seamless third-party platform integrations, webhook management, and web services.",
    icon: "Azios"
  },
  {
    name: "RabbitMQ",
    description: "Message broker leveraged for managing asynchronous queues, background jobs, and system decoupling.",
    icon: "RabbitMQ"
  },
  {
    name: "Git",
    description: "Version control tool used daily for code management, collaborative workflows, and deployment pipelines.",
    icon: "Git"
  },
  {
    name: "UiPath",
    description: "RPA tool used to automate repetitive enterprise workflows, business processes, and bot executions.",
    icon: "uipath"
  },
  {
    name: "n8n",
    description: "Workflow automation tool for integrating APIs, automating complex backend processes, and connecting services.",
    icon: "n8n"
  }
]

export default hardSkills;
