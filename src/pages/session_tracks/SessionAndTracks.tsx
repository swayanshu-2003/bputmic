import TopBanner from "../../components/banner/TopBanner";
import IICSImg from "../../assets/conferences/iics.webp";
import PECSImg from "../../assets/conferences/pecs.webp";
import SISImg from "../../assets/conferences/sis.webp";
import SMCSImg from "../../assets/conferences/smcs.webp";
import { ArrowRight, NotebookPen } from "lucide-react";

const conferences = [
  {
    img: IICSImg,
    title: "IICS ",
    description:
      "Focusing on advancements in computing, artificial intelligence, and information technology. Researchers will discuss the latest breakthroughs in machine learning, big data, cybersecurity, and computational intelligence, shaping the future of the digital world.",
    link: "https://iics.bputmic.in",
    section_id: "iics",
  },
  {
    img: SMCSImg,
    title: "SMCS ",
    description:
      "A platform for researchers discussing innovations in material science, composites, and structures. Topics will include the development of new-age materials, nanotechnology applications, and advancements in structural engineering.",
    link: "https://smcs.bputmic.in",
    section_id: "smcs",
  },
  {
    img: SISImg,
    title: "SIS ",
    description:
      "Exploring the role of informatics in management, sustainable development, and societal impact. Experts will discuss how technology-driven solutions can enhance governance, public policy, and sustainability efforts worldwide.",
    link: "https://sis.bputmic.in",
    section_id: "sis",
  },
  {
    img: PECSImg,
    title: "PECS ",
    description:
      "Covering interdisciplinary topics from physics, chemistry, mathematics, and computational methods. This track aims to foster collaboration between theoretical and applied sciences to solve real-world environmental and physical challenges.",
    link: "https://pecs.bputmic.in",
    section_id: "pecs",
  },
];

const Registration = () => {
  return (
    <div className="min-h-screen ">
      <TopBanner text={"Session & Tracks"} />
      <div className="max-w-full w-full flex px-3 md:px-24 gap-2 flex-col items-start my-16">
        <div className="flex flex-wrap gap-4 justify-center items-center w-full">
          {conferences.map((conf, index) => (
            <a
              key={index}
              href={`#${conf?.section_id}`}
              className="w-full sm:w-72 max-w-[90vw] sm:max-w-none relative group block overflow-hidden border-4 border-white transition-transform transform hover:scale-105"
            >
              <div className="relative w-full aspect-square">
                <img
                  src={conf.img}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={conf.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity flex-col gap-3 p-4 text-center">
                  <span className="text-white text-lg font-semibold">
                    {conf.title}
                  </span>
                  <p className="text-white text-sm">{conf?.description}</p>
                  <button className="flex items-center px-3 py-1 bg-transparent font-semibold border-primary-red border-2 rounded-sm text-primary-red hover:bg-primary-red hover:text-white hover:border-none">
                    View More
                    <ArrowRight className="ml-2" size={17} />
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-[#112363] mt-6 mb-3">
          Multi-International Conference Theme, Scopes, and Interests
        </h3>
        <p className="text-justify text-zinc-700 ">
          BPUT Multi International Conference on Emerging Trends in Evolving
          Technology (BMIC-ETET 2025) focuses on harnessing the power of
          advanced computing technologies and intelligent systems to drive
          sustainable development. By integrating artificial intelligence,
          machine learning (ML), and data analytics, this interdisciplinary
          field aims to create innovative solutions that address environmental
          challenges, optimize resource usage, and promote green technologies.
          The goal is to develop intelligent systems that not only enhance
          efficiency and productivity but also contribute to the creation of
          sustainable urban environments, smart energy management, and resilient
          ecosystems, ultimately supporting the transition towards a more
          sustainable and equitable society. Purpose: The BPUT Multi
          International Conference (BMIC-ETET 2025) on Emerging Trends in
          Evolving Technology conference aims to bring together experts,
          researchers, practitioners, and policymakers from various fields to
          explore and discuss the integration of computing technologies and
          intelligent systems in promoting sustainability. The conference serves
          as a platform to share innovative ideas, present research findings,
          and foster collaborations that contribute to sustainable development
          goals.
        </p>
        <p className="text-justify text-zinc-700 ">
          The scope of this conference is focused and includes Intelligent
          Information and Computing Systems; Smart Materials, Composites, and
          Structures; Society, Informatics, and Sustainability; Physical,
          Environmental, and Computational Sciences and the topics for the
          proposed conference include, but are not limited to the following:
        </p>
        <div className="w-full mt-6">
          {topics?.map((conf, i) => (
            <div key={i} id={conf?.section_id}>
              <h1 className="text-indigo-800 px-4 py-1.5 bg-indigo-50 w-fit text-2xl font-semibold mt-4">
                {conf?.conf_name}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-1 ml-4 mt-3">
                {conf?.categories?.map((category, index) => (
                  <div className="col-span-1 rounded-xl p-2" key={index}>
                    <h3 className="text-xl italic font-semibold text-[#112363] mb-3">
                      {category?.type}
                    </h3>
                    <div className="flex flex-col items-start gap-2">
                      {category?.topics.map((topic, id) => (
                        <p
                          key={id}
                          className="ml-6 flex gap-2 items-center text-zinc-700"
                        >
                          <span className="font-semibold text-primary-red">
                            <NotebookPen size={15} />
                          </span>
                          <span>{topic}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Registration;

const topics = [
  {
    section_id: "iics",
    conf_name: "Intelligent Information Computing Systems",

    categories: [
      {
        type: "Circuits",
        topics: [
          "Analog circuit design",
          "Reliability and Fault Tolerance",
          "Computer Aided Design and Verification",
          "Digital and mixed-signal circuit design",
          "Post-CMOS Technologies",
          "System Design and Security",
          "VLSI for Applied and Future Computers",
          "Linear and Nonlinear Circuits and Systems",
          "Photonic and Optoelectronic Circuits",
          "Energy Harvesting / Scavenging",
          "Circuits and Systems",
          "Neural Network",
          "Bioelectrical Engineering",
          "Bio-mechatronics",
          "Biomedical Optics",
        ],
      },
      {
        type: "Control Systems",
        topics: [
          "Signal and Image Processing",
          "Control Systems",
          "Analytical and Industrial Instrumentation",
          "MEMS, IoT",
          "QoS Management in IoT Networks",
          "Smart Grids and Microgrids",
          "Healthcare Modeling and Simulation",
          "Sensors and Instrumentation",
          "Non-Linear Control Systems",
          "Brain-Computer Interfaces",
          "Biomedical Modeling and Simulation",
          "Power Electronics and Drives",
          "HVAC, HVDC, and FACTs",
          "Renewable Energy Sources",
          "Solar Power Systems",
          "Distributed Generation",
          "Optimal Control Systems",
          "Adaptive Control Systems",
          "Robotics",
        ],
      },
      {
        type: "Computing & Intelligent Systems",
        topics: [
          "Data Mining",
          "Big Data / Data Analytics",
          "Neural Networks",
          "Deep Learning",
          "Biometrics",
          "DNA Computing",
          "Computational Biology",
          "Computer Aided and Automated Diagnosis",
          "Pattern Analysis for Biomedical Applications",
          "Mobile Computing",
          "Fault Tolerant Computing System",
          "AI, ML, Block-chain technologies",
          "Explainable AI",
          "Statistical Inference",
          "Bioinformatics",
          "Biology-inspired Computational Methods",
          "Medical and Biological Databases",
          "Biomedical Signal Processing",
          "Medical Informatics",
          "HPC, HCI",
        ],
      },
      {
        type: "Communication Systems",
        topics: [
          "Wireless Sensor Networks",
          "Mobile/Ad-hoc Networks",
          "Vehicular Communication Networks",
          "4G/5G/Next-generation Network Evolutions",
          "Mobile and Wireless Communication",
          "Optical, RF and Microwave Communications",
          "Industrial Networking and Communication Protocols",
          "Sensing and Sensor Networks",
          "Test and Reliability",
          "Healthcare Communication Networks and Environments",
          "Clinical Engineering and Health Technology Assessment",
          "Health Informatics, e-Health and Telemedicine",
          "mHealth",
          "Industrial Data Networks",
          "Cloud and IoT Networks",
        ],
      },
    ],
  },
  {
    section_id: "smcs",
    conf_name: "Smart Materials, Composites & Structures",
    categories: [
      {
        type: "High Performance Computing and Networks Parallel and Distributed Computing",
        topics: [
          "Cluster Computing",
          "Supercomputing",
          "Cloud Computing",
          "Autonomic Computing",
          "P2P Computing",
          "Mobile Computing",
          "Grid and Semantic Grid Computing",
          "Workflow Design and Practice",
          "Computer and Network Architecture",
          "Smart and Sustainable Cities",
        ],
      },
      {
        type: "Information Systems and Technologies",
        topics: [
          "Information Retrieval",
          "Scientific Databases",
          "Security Engineering",
          "Risk Analysis",
          "Reliability Engineering",
          "Software Engineering",
          "Data Mining",
          "Artificial Intelligence",
          "Machine Learning",
          "Learning Technologies",
          "Web Based Computing",
          "Web 2.0",
          "Blockchain",
        ],
      },
      {
        type: "Geometric Modelling, Graphics and Visualization",
        topics: [
          "Scientific Visualization",
          "Computer Graphics",
          "Geometric Modelling",
          "Pattern Recognition",
          "Image Processing",
          "CAD/CAM",
          "Web3D, Virtual and Augmented Reality",
        ],
      },
      {
        type: "Miscellaneous",
        topics: [
          "Foundations of intelligent and high performance computing paradigm",
          "Artificial Intelligence and machine learning",
          "Fuzzy control and intelligent systems",
          "Fuzzy decision making and decision support systems",
          "Pattern Recognition and Image Processing",
          "Big Data Analytics and Big Data Processing on the Cloud",
          "Big Data Search, Mining, and Visualization",
          "Distributed and cloud Computing",
          "Design tools for cloud computing",
          "Mobile cloud networking",
          "Energy efficiency and clouds",
          "Economic and business models for cloud computing",
          "Parallel, Multi-core and Grid Computing",
          "Intelligent Object Identification",
          "IoT- Sensors and its applications in manufacturing services",
          "Wireless Body Area Network (WBAN) in IoT Health-care",
          "Software Defined Network (SDN)",
          "IoT –based Big Data Analytics",
          "Socio-economic impact on IoT ecosystems",
          "IoT Developments: Sustainability Development Goals (SDGs)",
          "IoT and Smart Technology in Education and e-learning",
          "Information Security",
          "Data security and Data privacy",
          "Communication protocol security",
          "Security-related Algorithmic Complexity",
        ],
      },
    ],
  },

  {
    section_id: "sis",
    conf_name: "Society, Informatics & Sustainability",
    categories: [
      {
        type: "Business",
        topics: [
          "Product Development",
          "Productivity",
          "Branding",
          "Business Administration",
          "Business Law",
          "Project Management",
          "Public-Private Partnerships",
          "Risk Management",
          "Sales & Marketing",
          "Corporate Communications",
          "Business Leadership",
          "Business Models",
          "Business Negotiation",
          "Business Planning",
          "Business Processes",
          "Business Writing",
          "Change Management",
          "Competitive Strategy",
          "Corporate Governance",
          "Ethics in Business",
          "Customer Service",
          "Developing Employees",
          "Emerging Markets",
          "Family Businesses",
          "Market Structure",
          "Pricing",
          "Mergers & Acquisitions",
          "Negotiations",
          "Organizational Structure",
          "In Sourcing /Outsourcing",
          "Performance Measurement",
          "Strategic Planning",
          "Supply Chain",
          "Venture Capital",
        ],
      },
      {
        type: "Management",
        topics: [
          "Advertising Management",
          "Arts Management",
          "Business Management",
          "Change Management",
          "Communications Management",
          "Critical Management",
          "Disaster Management",
          "Environment Management",
          "Events Management",
          "Expense Management",
          "Financial Management",
          "Food Management",
          "Tourism Management",
          "Hotel & Lodging Management",
          "Human Resource Management",
          "Information Technology Management",
          "Insurance Management",
          "Investment Management",
          "Leisure Management",
          "Marketing Management",
          "Operations Management",
          "Project Management",
          "Public Sector Management",
          "Quality Management and Assurance",
          "Risk Management",
          "Strategic Management",
          "Supply Chain Management",
          "Tax Management",
          "Time Management",
        ],
      },
      {
        type: "Accounting & Banking",
        topics: [
          "Accounting",
          "Accounting Analysis",
          "Accounting Ethics",
          "Bankruptcy",
          "Budget Deficit",
          "Capital Markets",
          "Commercial Lending",
          "Corporate Accounting",
          "Cost Accounting",
          "Country Risk",
          "Credit Risk",
          "Crypto Currencies",
          "Debt Issues",
          "Defense Spending",
          "Development Banks",
          "European Currency Unit",
          "Federal Reserve System",
          "General Ledger",
          "Government Bailouts",
          "Government-Sponsored Enterprises",
          "Hedge Funds",
          "Home Equity",
          "Income Tax",
          "Interest Free Banking",
          "Investment Banking",
          "Islamic Banking",
          "Monetary Policy",
          "Money Supply",
          "Mutual Funds",
          "Price Controls",
          "Public Accounting",
          "Savings and Loan Bailout",
          "Securities and Exchange",
          "Stock Market",
          "Stock Prices",
          "Venture Capital",
          "Wall Street",
        ],
      },
      {
        type: "Finance",
        topics: [
          "Applied Finance",
          "Behavioral Finance",
          "Capital Markets",
          "Corporate Finance",
          "Corporate Governance",
          "Corporate Social Responsibility",
          "Derivatives and Structured Products",
          "Empirical Finance",
          "Entrepreneurial Finance",
          "Ethical Investing",
          "Finance & Investment",
          "Financial Accounting",
          "Financial Auditing",
          "Financial Crisis",
          "Financial Engineering",
          "Financial Frauds",
          "Financial Inclusion",
          "Financial Instruments",
          "Financial Intermediation",
          "Financial Markets",
          "Financial Regulations",
          "Financial Risk Management",
          "Financial Services",
          "Global Financial Crisis",
          "Hedge Funds",
          "Insurance",
          "International Finance",
          "Internet Finance",
          "Managerial Finance",
          "Microfinance",
          "Personal Finance",
          "Project Finance",
          "Public Finance",
          "Quantitative Finance",
          "SME Finance",
          "Sovereign Wealth Funds",
          "Venture Capital Financing",
        ],
      },
      {
        type: "Economics",
        topics: [
          "Aggregate Demand & Supply",
          "Applied Economics",
          "Budget Deficits & Public Debt",
          "Comparative Economics",
          "Compound Interest",
          "Consumer Credit",
          "Credit",
          "Econometrics",
          "Economic Development",
          "Economic Growth",
          "Economic Institutions",
          "Economic Systems",
          "Employment and Unemployment",
          "Energy Economics",
          "Fiscal Policy",
          "Fundamental Economics",
          "GDP",
          "Global Economy",
          "Human Capital",
          "Income Distribution",
          "Inflation",
          "Insurance",
          "International Economics",
          "Macroeconomics",
          "Microeconomics",
          "Money Management/Budgeting",
          "National & Regional Economies",
          "Political Economy",
        ],
      },
      {
        type: "E-commerce",
        topics: [
          "Artificial Intelligence & Retail",
          "B2B Ecommerce",
          "Big Data Analysis",
          "Blockchain Security",
          "Cloud Service Innovations",
          "Communication and Network Technology",
          "Cross-Border Ecommerce",
          "Data Privacy",
          "Ecommerce Fundamentals",
          "Ecommerce Laws",
          "Ecommerce Platforms",
          "Ecommerce Software",
          "Ecommerce Strategy",
          "Electronic Contract",
          "Electronic Invoice",
          "Enterprise Information",
          "Fraud & Risk Management",
          "Information Security & Trusted Computing",
          "Internet Economy",
          "Internet-Of-Things",
          "Management Information Systems",
          "Mobile Commerce",
          "Monitoring Services for Ecommerce",
          "Multimedia & Image Processing",
          "Omnichannel Organization",
          "Online Payments",
          "Smart Connected Products",
          "Smart Logistics",
          "Taxes & Ecommerce",
          "Webshop Hosting",
        ],
      },
      {
        type: "Marketing",
        topics: [
          "Affiliate Marketing",
          "Brand Equity",
          "Community Management",
          "Content Marketing",
          "Customer Relationship Management (CRM)",
          "Digital Branding",
          "Display Advertising",
          "Email Marketing",
          "Influencer Marketing",
          "International Marketing",
          "Online Marketing",
          "Search Engine Advertising",
          "Search Engine Optimization",
          "Social Media & Services",
          "Telemarketing",
          "Viral Marketing",
        ],
      },
    ],
  },
  {
    section_id: "pecs",
    conf_name: "Physical, Environmental, and Computational Sciences",
    categories: [
      {
        type: "",
        topics: [
          "Computational Biology ",
          "Computational Combustion",
          "Computational Chemistry",
          "Computational Fluid Dynamics",
          "Computational Physics",
          "Computational Geometry",
          "Computational Mathematics",
          "Computational Mechanics",
          "Computational Electro-magnetics",
          "Numerical Methods and Algorithms",
          "Cultural Heritage",
          "Socio-ecological systems",
        ],
      },
    ],
  },
];
