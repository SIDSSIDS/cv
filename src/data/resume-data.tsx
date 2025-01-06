import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, TelegramIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Aleksandr Kolychev",
  initials: "AK",
  location: "Tokyo, Japan",
  locationLink: "https://www.google.com/maps/place/Tokyo",
  about:
    "Senior Java Developer",
  summary: (
    <>
      Qualified Java Software Engineer with 12+ years of experience in creating back-end solutions.
      <ul className="list-inside list-disc" >
        <li>
          Created a cloud-based micro-service platform for ToTheMoonMobile telecommunication startup. Performed seamless user migration from the prototype system.
        </li>
        <li>
          Built a new backend for a complex analytical system, which significantly reduced reports preparation time (involving TBs of data) from hours to almost real-time (&lt;30s).
        </li>
        <li>
          As a freelance project, carried out the full development cycle of a full-stack solution for a hotel self-check-in kiosk, including a back-end server, external systems integration, and a web back-office for the hotel&apos;s staff.
	</li>
        <li>
          Took a predominant part in the technical design and the implementation of core services for a distributed face/voice recognition platform.
        </li>
      </ul>  
    </>
  ),
  avatarUrl: "avatar.jpg",
  personalWebsiteUrl: "https://cv.kolychev.dev",
  contact: {
    email: "aleksandr@kolychev.dev",
    tel: "+79522258307",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/SIDSSIDS",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexander-kolychev",
        icon: LinkedInIcon,
      },
      {
        name: "Telegram",
        url: "https://t.me/aleksandr_kolychev",
        icon: TelegramIcon,
      },
    ],
  },
  education: [
    {
      school: "St. Petersburg State Polytechnical University",
      degree: "Master's Degree. Disciplines: IT, math, AI, quality management",
      start: "2005",
      end: "2011",
    },
  ],
  work: [
    {
      company: "PayPay Corp.",
      link: "https://paypay.ne.jp",
      type: "Hybrid",
      location: "Tokyo",
      badges: [
	  "Java 8,21",
	  "Kotlin",
	  "AWS",
	  "Kafka",
	  "MySQL",
	  "Redis",
	  "Cassandra",
	  "Maven",
	  "Gradle",
      ],
      title: "Senior Java Developer",
      start: "Jul 2023",
      end: null,
      description: (
        <>
	  Top 1 mobile payment app in Japan with more than 60M users. The app is designed in the superapp manner and contains lots of miniapps covering wide range of user needs. I worked on building high performing and scalable platform for payment linked coupon promotion platform for the organized and un-organized merchants.<br />
	  <b>Highlights</b>
          <ul className="list-inside list-disc">
            <li>
              Maintained and developed high-loaded micro-services with 4K daily peak RPS and 1K MPS
            </li>
            <li>
              Implemented Clean Architecture approach that improved code readability, maintainability and testability. Also it reduced the number of bugs and decreased the feature delivery time.
            </li>
            <li>
              Took major part in code + infrastructure migration project: seamless migration of outsourced micro-services to the company&apos;s infrastructure complying with internal code standards/libraries/dev and CI/CD flows. The migration also implied complete code refactoring with respect to the clean code architecture.
            </li>
            <li>
              Improved team&apos;s knowledge by keeping knowledge-sharing sessions.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Vigo.one",
      link: "https://vigo.one/",
      type: "Remote",
      location: "Cyprus",
      badges: [
        "Java 11",
	"Multi-threading",
	"Hazelcast",
        "Micronaut",
        "Clickhouse",
        "Kafka",
	"Maven",
      ],
      title: "Senior Java Developer",
      start: "Nov 2021",
      end: "Jun 2023",
      description: (
        <>
	  The company collects information about network and session(game, video, VoIP) quality from mobile devices, aggregates it and provides analytical products for mobile operators to monitor their network state, searching places with bad coverage, planning network modernization and expansion.<br/>
	  <b>Highlights</b>
          <ul className="list-inside list-disc">
            <li>
       		Designed and implemented a backend system for a new product, which unite the functionality of existing ones.
	      <ul>
		<li>
		    - Proposed and proved the necessity to migrate the storage layer from Cassandra to Clickhouse to achieve the required performance and functionality. Developed a new data model
		</li>
		<li>
		    - Designed and implemented a complex API which allows building custom analytical reports using complicated filtering, grouping, ordering
		</li>
	      </ul>
            </li>
            <li>
	        Embed Micronaut as a DI framework (no DI framework had been used before), which made the system more testable and less coupled.
            </li>
          </ul>
	  <b>Responsibilities</b>
          <ul className="list-inside list-disc">
            <li>
	        Build a backend for a new product
            </li>
            <li>
		Conduct technical interviews for candidates
            </li>
            <li>
		Code review
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "ToTheMoonMobile",
      link: "https://tothemoonmobile.com",
      type: "Remote",
      location: "UK",
      badges: [
        "Java 11",
        "AWS Lambda",
        "AWS DynamoDB",
	"AWS SNS",
	"AWS SQS",
	"AWS CloudFormation",
	"AWS GatewayAPI",
	"AWS StepFunctions",
        "SpringBoot",
        "Postgres",
        "Docker",
      ],
      title: "Senior Java Developer",
      start: "Jul 2020",
      end: "Oct 2021",
      description: (
        <>
	  Virtual telecom operator in UK. <br/>
	  <b>Highlights</b>
          <ul className="list-inside list-disc">
            <li>
		Created cloud-based micro-service platform from scratch using AWS cloud with no experience in the latter.
            </li>
            <li>
		Seamlessly migrated existing users from the prototype solution to the platform
            </li>
          </ul>
	  <b>Responsibilities</b>
          <ul className="list-inside list-disc">
            <li>
	        Make almost all technical decisions concerning the cloud platform, including:
		  <ul>
		    <li>
		    - architecture design
		    </li>
		    <li>
		    - development, testing and deployment processes
		    </li>
		    <li>
		    - set up logging and monitoring
		    </li>
		  </ul>
            </li>
	    <li>
		Maintain production, stage and testing environments
	    </li>
	    <li>
		Mentor other developers
	    </li>
	    <li>
		Tier 2, 3 customer support
	    </li>
          </ul>
        </>
      ),
    },
    {
      company: "SpeechPro",
      link: "https://speechpro.com",
      type: "Hybrid",
      location: "Saint-Petersburg",
      badges: [
	  "Java 8",
	  "RabbitMQ",
	  "Postgres",
	  "Oracle",
	  "Redis",
	  "Tomcat",
	  "Docker"
      ],
      title: "Senior Java Developer",
      start: "Apr 2016",
      end: "Jul 2020",
      description: (
        <>
	  Took a major part in creating a distributed voice\face recognition platform. The platform was a middle layer between business applications and different face\voice SDK, developed by R&D department.<br/>
	  <b>Highlights</b>
          <ul className="list-inside list-disc">
            <li>
		Creation of the most complicated platform services
		  <ul>
		    <li>
		    - Configuration Service - a separate configuration server with a web interface, which controls the configuration of the whole platform and allows to monitor and configure services on-the-fly
		    </li>
		    <li>
		    - Load Balancer - an internal service, which controls face/voice models cache distribution among processing engines and performs query routing. The service lets big identification queries (1 x 100M faces) complete with minimum overhead
		    </li>
		  </ul>
            </li>
            <li>
		Implementation of custom deployment tools for the team, which allowed developers to test their code on test environments much faster (deployment time decreased from an hour to a couple of minutes)
            </li>
          </ul>
	  <b>Responsibilities</b>
          <ul className="list-inside list-disc">
            <li>
		Technical design/review/implementation of new services and features
            </li>
            <li>
		Integration with new SDK&apos;s and systems
            </li>
            <li>
		Search and optimize system&apos;s bottle-necks
            </li>
            <li>
		Advise DevOps team on automated build and deployment
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Freelance project",
      link: "",
      type: "Remote",
      location: "",
      badges: ["Java 8", "Postgres", "SpringBoot", "Docker"],
      title: "",
      start: "Sep 2019",
      end: "May 2020",
      description: (
        <>
	  Created a full-stack solution for a hotel self-check-in kiosk. The system consisted of
          <ul className="list-inside list-disc">
            <li>
		back-end server, integrated with the kiosk and the hotel reservation system
            </li>
            <li>
		web back-office for the hotel&apos;s receptionists
            </li>
          </ul>
	  Carried out the full development cycle, from business requirements analysis until the system deployment.
        </>
      ),
    },
    {
      company: "LMA-ISIDA Group",
      link: "",
      type: "On-site",
      location: "Saint-Petersburg",
      badges: [],
      title: "Lead Java Developer",
      start: "Oct 2011",
      end: "Mar 2016",
      description: ""
    },
  ],
  skills: [
    "Java",
    "Spring",
    "Micronaut",
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Clickhouse",
    "Kafka",
    "Redis",
    "AWS",
    "Linux",
    "Docker",
    "k8s",
    "Maven/Gradle",
    "Git",
    "bash",
    "Micro-services",
    "System Architecture",
  ],
  projects: [
    {
      title: "Cyberpunk neon theme",
      techStack: ["IntelliJ IDEA plugin", "xml", "gradle"],
      description:
        "CyberPunk Neon theme plugin for JetBrains IntelliJ IDEA with 4.6 rating and >= 20k downloads",
      link: {
        label: "jetbrains-cyberpunk-neon-theme",
        href: "https://plugins.jetbrains.com/plugin/21120-cyberpunk-neon-theme",
      },
    },
    {
      title: "AI Ext (active dev)",
      techStack: [
        "Java",
	"ChatGPT",
        "PostgreSQL",
        "Twitch",
      ],
      description:
        "AI-powered extentions for Twitch streams",
      link: {
        label: "ai-ext.com",
        href: "https://ai-ext.com",
      },
    },
    {
      title: "App for IRL streaming",
      techStack: [
        "Java",
	"Google TTS",
	"ChatGPT",
	"Android",
        "PostgreSQL",
        "Websocket",
      ],
      description:
        "Android helper app for IRL streaming with build-in chat reader",
      link: {
        label: "",
        href: "",
      },
    },
  ],
} as const;
