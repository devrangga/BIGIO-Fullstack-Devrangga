import { Story } from "../(content)/story-management/_components/columns";

type SideBar = {
  icon: string;
  label: string;
  href: string[];
};

export const sideBar: SideBar[] = [
  {
    icon: "ri-dashboard-fill",
    label: "Dashboard",
    href: ["/dashboard"],
  },
  {
    icon: "ri-book-shelf-fill",
    label: "Story Management",
    href: ["/story-management", "/story-management/add-stories"],
  },
];

export type Chapter = {
  id: string;
  title: string;
  lastUpdated: string;
  story: string;
};

export type Story = {
  id: string;
  title: string;
  writers: string;
  category: "Financial" | "Technology" | "Health";
  keyword: string[];
  status: "Draft" | "Publish";
  chapter?: Chapter[];
};

export const story: Story[] = [
  {
    id: crypto.randomUUID() as string,
    title: "The Moon that Can't be Seen",
    writers: "Rara",
    category: "Financial",
    keyword: ["School", "Fiction"],
    status: "Draft",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,
    title: "Fish Swimming In The Sky",
    writers: "Rara",
    category: "Technology",
    keyword: ["School", "Fiction"],
    status: "Publish",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,
    title: "Given",
    writers: "Rara",
    category: "Health",
    keyword: ["School", "Fiction"],
    status: "Draft",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,
    title: "Echoes of Silence",
    writers: "Alex",
    category: "Financial",
    keyword: ["Finance", "Fiction"],
    status: "Draft",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,
    title: "The Digital Frontier",
    writers: "Mira",
    category: "Technology",
    keyword: ["Innovation", "AI"],
    status: "Publish",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,
    title: "Healthy Living",
    writers: "Sam",
    category: "Health",
    keyword: ["Wellness", "Lifestyle"],
    status: "Draft",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,
    title: "Banking the Unbanked",
    writers: "John",
    category: "Financial",
    keyword: ["Inclusion", "Economy"],
    status: "Publish",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,
    title: "The Future of Coding",
    writers: "Zara",
    category: "Technology",
    keyword: ["Programming", "Fiction"],
    status: "Draft",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,
    title: "Mind and Body",
    writers: "Eve",
    category: "Health",
    keyword: ["Yoga", "Meditation"],
    status: "Publish",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "Stock Market Insights",
    writers: "Oliver",
    category: "Financial",
    keyword: ["Investing", "Finance"],
    status: "Draft",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "Virtual Reality",
    writers: "Liam",
    category: "Technology",
    keyword: ["VR", "Gaming"],
    status: "Publish",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "Nutrition and You",
    writers: "Sophia",
    category: "Health",
    keyword: ["Diet", "Wellness"],
    status: "Draft",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "Investing in the Future",
    writers: "James",
    category: "Financial",
    keyword: ["Finance", "Stocks"],
    status: "Publish",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "The AI Revolution",
    writers: "Noah",
    category: "Technology",
    keyword: ["AI", "Innovation"],
    status: "Draft",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "Mental Health Matters",
    writers: "Emma",
    category: "Health",
    keyword: ["Psychology", "Wellness"],
    status: "Publish",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "Personal Finance 101",
    writers: "Ava",
    category: "Financial",
    keyword: ["Budgeting", "Finance"],
    status: "Draft",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "The Internet of Things",
    writers: "Ethan",
    category: "Technology",
    keyword: ["IoT", "Smart Devices"],
    status: "Publish",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "Holistic Health",
    writers: "Mia",
    category: "Health",
    keyword: ["Alternative Medicine", "Wellness"],
    status: "Draft",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "Cryptocurrency Explained",
    writers: "Lucas",
    category: "Financial",
    keyword: ["Crypto", "Blockchain"],
    status: "Publish",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "Tech Trends 2024",
    writers: "Isabella",
    category: "Technology",
    keyword: ["Future", "Innovation"],
    status: "Draft",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "Fitness and Wellbeing",
    writers: "David",
    category: "Health",
    keyword: ["Exercise", "Lifestyle"],
    status: "Publish",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "Financial Independence",
    writers: "Emily",
    category: "Financial",
    keyword: ["Wealth", "Saving"],
    status: "Draft",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
  {
    id: crypto.randomUUID() as string,

    title: "AI in Healthcare",
    writers: "Charlotte",
    category: "Technology",
    keyword: ["AI", "Medicine"],
    status: "Publish",
    chapter: [
      {
        title: "Testing Doang Cuy OAKWOKA",
        lastUpdated: "18 January 2024",
        story:
          "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      },
    ],
  },
];
