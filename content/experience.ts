export type RoleWeight = "recent" | "established" | "early";

export type Role = {
  id: string;
  employer: string;
  location: string | null;
  start: string;
  end: string;
  title: string;
  progression: string;
  weight: RoleWeight;
  domain: string | null;
  architectureScope: string | null;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  omittedNote: string | null;
};

export const experienceIntro =
  "Recent roles carry the architecture scope. Earlier roles are listed with the title, employer, and dates printed on the résumé. Responsibilities that were not on the résumé are omitted rather than filled in.";

export const roles: Role[] = [
  {
    id: "tekizma",
    employer: "Tekizma Inc.",
    location: null,
    start: "Sep 2024",
    end: "Present",
    title: "Director of Technology | Data and Application Engineering & Solution Architecture",
    progression: "Director of Technology",
    weight: "recent",
    domain: "Enterprise data, cloud, and AI platforms, including application modernization.",
    architectureScope:
      "Technology strategy and solution architecture across data platforms, cloud services, microservices, APIs, and AI/ML, with governance for scalability, security, data quality, observability, maintainability, and operational resilience.",
    responsibilities: [
      "Define technology strategy, solution architecture, and technical roadmaps for enterprise data, cloud, and AI platforms, aligning architecture decisions with business outcomes and engineering priorities.",
      "Lead architecture and solution design across data platforms, cloud services, microservices, APIs, and AI/ML capabilities, ensuring scalable, secure, maintainable, and resilient solutions.",
      "Establish architecture governance, engineering standards, and design patterns covering scalability, security, data quality, observability, maintainability, and operational resilience.",
      "Architect Azure Databricks data platforms covering data ingestion, transformation, modeling, orchestration, validation, and reusable data products for analytics and downstream applications.",
      "Design and optimize data engineering pipelines using PySpark, SQL, dbt, and Databricks, with emphasis on data quality, performance, reliability, and reusable data assets.",
      "Design reconciliation architecture and data flows, defining source-to-target mappings, validation rules, data quality controls, exception handling, and scalable processing patterns.",
      "Design cloud architectures in AWS, covering compute, storage, networking, security, monitoring, availability, scalability, and cost optimization.",
      "Lead legacy application modernization and cloud migration, migrating a Spring/JSP-based enterprise application to a modern Spring Boot, Angular, REST API, Hibernate, and MySQL architecture on AWS.",
      "Drive decomposition of legacy application components into modern application and API layers, improving scalability, maintainability, deployment automation, and integration capabilities.",
      "Integrate AI/ML capabilities with enterprise data platforms for intelligent data processing, natural-language data interaction, automated documentation, and AI-assisted engineering workflows.",
      "Lead architecture reviews, technical decisions, dependency and risk management, and stakeholder communication from requirements and solution design through implementation and production release.",
      "Provide technical leadership and mentoring across data engineering, application development, QA, and cross-functional engineering teams, driving engineering excellence and Agile delivery.",
    ],
    technologies: [
      "Databricks",
      "PySpark",
      "dbt",
      "SQL",
      "AWS",
      "Spring Boot",
      "Angular",
      "REST APIs",
      "Hibernate",
      "MySQL",
      "Microservices",
      "AI/ML",
      "Data Engineering",
    ],
    achievements: [
      "Enhanced reconciliation accuracy by 50% through the design and deployment of automated validation and exception-handling frameworks.",
      "Reduced development effort by 40% through reusable dbt/Databricks frameworks and AI-assisted engineering.",
    ],
    omittedNote: null,
  },
  {
    id: "asd",
    employer: "Advanced Software Design, Inc.",
    location: null,
    start: "Sep 2013",
    end: "Aug 2024",
    title: "Solutions Architect / Application Designer",
    progression: "Solutions Architect",
    weight: "recent",
    domain:
      "Multi-tier enterprise applications. The stated public-program achievement is the official Health Plan Marketplace for New York State of Health.",
    architectureScope:
      "Application and integration architecture: service boundaries, API contracts, AWS application platforms, and incremental modernization of legacy components.",
    responsibilities: [
      "Architected scalable multi-tier enterprise applications using Spring Boot, Angular, microservices, REST APIs, and AWS, applying cloud-native and distributed application patterns.",
      "Designed application and integration architectures for complex enterprise workflows, defining service boundaries, API contracts, integration patterns, and technology components.",
      "Designed secure, resilient, and high-performance REST APIs and microservices, addressing authentication, authorization, scalability, maintainability, and operational readiness.",
      "Designed AWS-based application solutions covering compute, storage, databases, security, deployment, and availability, aligning cloud services with application requirements.",
      "Led application modernization initiatives, evaluating legacy application components and defining target-state architectures and incremental modernization strategies.",
      "Established application design patterns and reusable technical components to improve consistency, maintainability, scalability, and development efficiency across enterprise applications.",
      "Translated complex business requirements into technical designs, architecture specifications, integration solutions, and implementation roadmaps.",
      "Collaborated with development, QA, business analysis, and delivery teams to resolve complex technical issues, architectural dependencies, and integration challenges throughout the application lifecycle.",
      "Contributed to technical estimation, solution planning, release readiness, and production issue resolution, ensuring successful delivery of enterprise applications.",
    ],
    technologies: [
      "Spring Boot",
      "Angular",
      "REST APIs",
      "Microservices",
      "AWS",
      "Hibernate",
      "Oracle",
      "DB2",
      "DynamoDB",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
    ],
    achievements: [
      "Orchestrated the official Health Plan Marketplace for New York State of Health, processing 5 million enrollments for 2020.",
    ],
    omittedNote: null,
  },
  {
    id: "marlabs",
    employer: "Marlabs Software Pvt. Ltd.",
    location: "Piscataway, NJ",
    start: "Sep 2010",
    end: "Sep 2013",
    title: "Technical Manager | Solutions Architecture & Mobile Platforms",
    progression: "Technical Manager",
    weight: "established",
    domain:
      "Cross-platform mobile architecture and enterprise integration, including eFleetPro for construction-equipment manufacturers, dealers, and rental fleets.",
    architectureScope:
      "Mobile solution architecture for iOS, Android, and PhoneGap, plus mobile-to-enterprise integration with ERP, punch-out, and payment gateways. Led the Mobile Center of Excellence.",
    responsibilities: [
      "Defined cross-platform mobile solution architecture for iOS, Android, and PhoneGap applications, covering security, authentication, REST APIs, logging, and platform standards.",
      "Translated business and technical requirements into mobile solution architecture, application designs, wireframes, SDLC plans, and delivery roadmaps for client and internal products.",
      "Architected eFleetPro enterprise integration solutions connecting construction-equipment manufacturers, dealers, and rental fleets with ERP systems, punch-out integrations, and payment gateways.",
      "Designed mobile-to-enterprise integration patterns for secure communication between mobile applications, backend services, ERP platforms, and external systems.",
      "Led the Mobile Center of Excellence, defining reusable architecture patterns, platform standards, and technical practices for cross-platform application development.",
      "Managed solution design, development planning, team formation, hiring, and delivery across client and internal mobile initiatives.",
      "Presented cross-platform architecture capabilities and technology solutions to customers and leadership, supporting solution positioning, client engagement, and revenue growth.",
    ],
    technologies: [
      "iOS",
      "Android",
      "PhoneGap",
      "REST APIs",
      "Java",
      "Mobile Architecture",
      "Enterprise Integration",
      "ERP Integration",
      "Payment Gateway Integration",
      "Security & Authentication",
    ],
    achievements: [],
    omittedNote: null,
  },
  {
    id: "mapview",
    employer: "Mapview Geographical Solutions",
    location: null,
    start: "Sep 2009",
    end: "Aug 2010",
    title: "Tech Lead",
    progression: "Tech Lead",
    weight: "early",
    domain: null,
    architectureScope: null,
    responsibilities: [],
    technologies: [],
    achievements: [],
    omittedNote:
      "Omitted: the résumé lists title, employer, and dates only. Domain, responsibilities, and technologies are not filled in.",
  },
  {
    id: "star4ce",
    employer: "Star4ce Technologies, Inc.",
    location: null,
    start: "Nov 2007",
    end: "Jun 2009",
    title: "Tech Lead / Senior J2EE",
    progression: "Tech Lead / Senior J2EE",
    weight: "early",
    domain: null,
    architectureScope: null,
    responsibilities: [],
    technologies: [],
    achievements: [],
    omittedNote:
      "Omitted: the résumé lists title, employer, and dates only. J2EE is named in the title and is not expanded into an invented stack.",
  },
  {
    id: "amtex",
    employer: "Amtex Systems, Inc.",
    location: null,
    start: "Apr 2007",
    end: "Oct 2007",
    title: "Team Lead",
    progression: "Team Lead",
    weight: "early",
    domain: null,
    architectureScope: null,
    responsibilities: [],
    technologies: [],
    achievements: [],
    omittedNote:
      "Omitted: the résumé lists title, employer, and dates only.",
  },
  {
    id: "3i-infotech",
    employer: "3i-Infotech",
    location: null,
    start: "Apr 2004",
    end: "Feb 2007",
    title: "Team Lead",
    progression: "Team Lead",
    weight: "early",
    domain: null,
    architectureScope: null,
    responsibilities: [],
    technologies: [],
    achievements: [],
    omittedNote:
      "Omitted: the résumé lists title, employer, and dates only.",
  },
  {
    id: "asic",
    employer: "Asic Infotech Pvt. Ltd.",
    location: null,
    start: "May 2003",
    end: "Feb 2004",
    title: "Java Developer",
    progression: "Java Developer",
    weight: "early",
    domain: null,
    architectureScope: null,
    responsibilities: [],
    technologies: [],
    achievements: [],
    omittedNote:
      "Omitted: the résumé lists title, employer, and dates only. Java is named in the title and is not expanded into an invented stack.",
  },
];

export const progression = roles;
