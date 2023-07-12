import { mentorResDto } from "@/Types/Mentor/MentorProfileDto";

export const mockMentorProfiles: mentorResDto[] = [
  {
    id: 1,
    shortDescription: "Experienced software engineer",
    description:
      "I have 10 years of experience in software engineering and have worked with various technologies.",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "software" },
      { id: 2, name: "engineering" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 1,
      nickname: "Mock Mentor 1",
      profileImage: "https://i.pravatar.cc/150?img=1",
    },
  },
  {
    id: 2,
    shortDescription: "Data scientist and AI researcher",
    description:
      "My expertise lies in data science and artificial intelligence research.",
    isHide: false,
    createdAt: "2023-02-01T00:00:00.000Z",
    updatedAt: "2023-02-01T00:00:00.000Z",
    hashtags: [
      { id: 3, name: "data" },
      { id: 4, name: "AI" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 2,
      nickname: "Mock Mentor 2",
      profileImage: "https://i.pravatar.cc/150?img=2",
    },
  },
  {
    id: 3,
    shortDescription:
      "My expertise lies in data science and artificial intelligence research.",
    description:
      "My expertise lies in data science and artificial intelligence research.",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
      { id: 3, name: "data" },
      { id: 4, name: "AI" },
    ],
    categories: [{ id: 3, name: "STUDY" }],
    user: {
      id: 3,
      nickname: "Mock Mentor 3",
      profileImage: "https://i.pravatar.cc/150?img=3",
    },
  },
  {
    id: 4,
    shortDescription: "Mock Mentor 4",
    description: "Description of mock mentor 4",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 4,
      nickname: "Mock Mentor 4",
      profileImage: "https://i.pravatar.cc/150?img=4",
    },
  },
  {
    id: 5,
    shortDescription: "Mock Mentor 5",
    description: "Description of mock mentor 5",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 5,
      nickname: "Mock Mentor 5",
      profileImage: "https://i.pravatar.cc/150?img=5",
    },
  },
  {
    id: 6,
    shortDescription: "Mock Mentor 6",
    description: "Description of mock mentor 6",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 6,
      nickname: "Mock Mentor 6",
      profileImage: "https://i.pravatar.cc/150?img=6",
    },
  },
  {
    id: 7,
    shortDescription: "Mock Mentor 7",
    description: "Description of mock mentor 7",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 7,
      nickname: "Mock Mentor 7",
      profileImage: "https://i.pravatar.cc/150?img=7",
    },
  },
  {
    id: 8,
    shortDescription: "Mock Mentor 8",
    description: "Description of mock mentor 8",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 8,
      nickname: "Mock Mentor 8",
      profileImage: "https://i.pravatar.cc/150?img=8",
    },
  },
  {
    id: 9,
    shortDescription: "Mock Mentor 9",
    description: "Description of mock mentor 9",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 9,
      nickname: "Mock Mentor 9",
      profileImage: "https://i.pravatar.cc/150?img=9",
    },
  },
  {
    id: 10,
    shortDescription: "Mock Mentor 10",
    description: "Description of mock mentor 10",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 10,
      nickname: "Mock Mentor 10",
      profileImage: "https://i.pravatar.cc/150?img=10",
    },
  },
  {
    id: 11,
    shortDescription: "Mock Mentor 11",
    description: "Description of mock mentor 11",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 11,
      nickname: "Mock Mentor 11",
      profileImage: "https://i.pravatar.cc/150?img=11",
    },
  },
  {
    id: 12,
    shortDescription: "Mock Mentor 12",
    description: "Description of mock mentor 12",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 12,
      nickname: "Mock Mentor 12",
      profileImage: "https://i.pravatar.cc/150?img=12",
    },
  },
  {
    id: 13,
    shortDescription: "Mock Mentor 13",
    description: "Description of mock mentor 13",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 13,
      nickname: "Mock Mentor 13",
      profileImage: "https://i.pravatar.cc/150?img=13",
    },
  },
  {
    id: 14,
    shortDescription: "Mock Mentor 14",
    description: "Description of mock mentor 14",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 14,
      nickname: "Mock Mentor 14",
      profileImage: "https://i.pravatar.cc/150?img=14",
    },
  },
  {
    id: 15,
    shortDescription: "Mock Mentor 15",
    description: "Description of mock mentor 15",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 15,
      nickname: "Mock Mentor 15",
      profileImage: "https://i.pravatar.cc/150?img=15",
    },
  },
  {
    id: 16,
    shortDescription: "Mock Mentor 16",
    description: "Description of mock mentor 16",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 16,
      nickname: "Mock Mentor 16",
      profileImage: "https://i.pravatar.cc/150?img=16",
    },
  },
  {
    id: 17,
    shortDescription: "Mock Mentor 17",
    description: "Description of mock mentor 17",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 17,
      nickname: "Mock Mentor 17",
      profileImage: "https://i.pravatar.cc/150?img=17",
    },
  },
  {
    id: 18,
    shortDescription: "Mock Mentor 18",
    description: "Description of mock mentor 18",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 18,
      nickname: "Mock Mentor 18",
      profileImage: "https://i.pravatar.cc/150?img=18",
    },
  },
  {
    id: 19,
    shortDescription: "Mock Mentor 19",
    description: "Description of mock mentor 19",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 19,
      nickname: "Mock Mentor 19",
      profileImage: "https://i.pravatar.cc/150?img=19",
    },
  },
  {
    id: 20,
    shortDescription: "Mock Mentor 20",
    description: "Description of mock mentor 20",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 20,
      nickname: "Mock Mentor 20",
      profileImage: "https://i.pravatar.cc/150?img=20",
    },
  },
  {
    id: 21,
    shortDescription: "Mock Mentor 21",
    description: "Description of mock mentor 21",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 21,
      nickname: "Mock Mentor 21",
      profileImage: "https://i.pravatar.cc/150?img=21",
    },
  },
  {
    id: 22,
    shortDescription: "Mock Mentor 22",
    description: "Description of mock mentor 22",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 22,
      nickname: "Mock Mentor 22",
      profileImage: "https://i.pravatar.cc/150?img=22",
    },
  },
  {
    id: 23,
    shortDescription: "Mock Mentor 23",
    description: "Description of mock mentor 23",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 23,
      nickname: "Mock Mentor 23",
      profileImage: "https://i.pravatar.cc/150?img=23",
    },
  },
  {
    id: 24,
    shortDescription: "Mock Mentor 24",
    description: "Description of mock mentor 24",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 24,
      nickname: "Mock Mentor 24",
      profileImage: "https://i.pravatar.cc/150?img=24",
    },
  },
  {
    id: 25,
    shortDescription: "Mock Mentor 25",
    description: "Description of mock mentor 25",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 25,
      nickname: "Mock Mentor 25",
      profileImage: "https://i.pravatar.cc/150?img=25",
    },
  },
  {
    id: 26,
    shortDescription: "Mock Mentor 26",
    description: "Description of mock mentor 26",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 26,
      nickname: "Mock Mentor 26",
      profileImage: "https://i.pravatar.cc/150?img=26",
    },
  },
  {
    id: 27,
    shortDescription: "Mock Mentor 27",
    description: "Description of mock mentor 27",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 27,
      nickname: "Mock Mentor 27",
      profileImage: "https://i.pravatar.cc/150?img=27",
    },
  },
  {
    id: 28,
    shortDescription: "Mock Mentor 28",
    description: "Description of mock mentor 28",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 2, name: "HOBBY" }],
    user: {
      id: 28,
      nickname: "Mock Mentor 28",
      profileImage: "https://i.pravatar.cc/150?img=28",
    },
  },
  {
    id: 29,
    shortDescription: "Mock Mentor 29",
    description: "Description of mock mentor 29",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 1, name: "hashtag1" },
      { id: 2, name: "hashtag2" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 29,
      nickname: "Mock Mentor 29",
      profileImage: "https://i.pravatar.cc/150?img=29",
    },
  },
  {
    id: 30,
    shortDescription: "Mock Mentor 30",
    description: "Description of mock mentor 30",
    isHide: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    hashtags: [
      { id: 14, name: "hashtag14" },
      { id: 15, name: "hashtag15" },
    ],
    categories: [{ id: 1, name: "DEVELOP" }],
    user: {
      id: 30,
      nickname: "Mock Mentor 30",
      profileImage: "https://i.pravatar.cc/150?img=30",
    },
  },
];
