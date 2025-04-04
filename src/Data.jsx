const blogCategories = [
  { id: "literature", name: { en: "Literature", hi: "साहित्य" } },
  { id: "culture", name: { en: "Culture", hi: "संस्कृति" } },
  { id: "events", name: { en: "Events", hi: "कार्यक्रम" } },
  { id: "poetry", name: { en: "Poetry", hi: "कविता" } },
];

const events = [
  {
    id: 1,
    title: "Kavya Sandhya 2024",
    date: "2024-03-15",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80",
    description: {
      en: "Annual poetry recitation event featuring renowned Hindi poets",
      hi: "प्रसिद्ध हिंदी कवियों की वार्षिक कविता पाठ कार्यक्रम",
    },
  },
  {
    id: 2,
    title: "Hindi Diwas",
    date: "2023-09-14",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80",
    description: {
      en: "Celebration of Hindi language with cultural performances",
      hi: "सांस्कृतिक प्रदर्शन के साथ हिंदी भाषा का उत्सव",
    },
  },
];

const members = [
  {
    id: 1,
    name: "Aditya Sharma",
    role: { en: "President", hi: "अध्यक्ष" },
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: { en: "Vice President", hi: "उपाध्यक्ष" },
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
];

const blogPosts = [
  {
    id: 1,
    title: {
      en: "The Evolution of Hindi Literature",
      hi: "हिंदी साहित्य का विकास",
    },
    content: {
      en: "Hindi literature has a rich history spanning over a millennium...",
      hi: "हिंदी साहित्य का एक समृद्ध इतिहास है जो एक सहस्राब्दी से अधिक का है...",
    },
    date: "2024-02-20",
    author: "Dr. Rajesh Kumar",
    image:
      "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80",
    category: "literature",
    readTime: 8,
  },
  {
    id: 2,
    title: {
      en: "Modern Hindi Poetry Trends",
      hi: "आधुनिक हिंदी कविता की प्रवृत्तियां",
    },
    content: {
      en: "Contemporary Hindi poetry is experiencing a renaissance...",
      hi: "समकालीन हिंदी कविता युवा कवियों के नए दृष्टिकोण और आधुनिक विषयों के साथ पुनर्जागरण का अनुभव कर रही है...",
    },
    date: "2024-03-01",
    author: "Kavita Sharma",
    image:
      "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&q=80",
    category: "poetry",
    readTime: 5,
  },
  {
    id: 3,
    title: { en: "Hindi in the Digital Age", hi: "डिजिटल युग में हिंदी" },
    content: {
      en: "The digital revolution has transformed how we consume Hindi content...",
      hi: "डिजिटल क्रांति ने हिंदी सामग्री के उपभोग के तरीके को बदल दिया है...",
    },
    date: "2024-03-10",
    author: "Amit Verma",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80",
    category: "culture",
    readTime: 6,
  },
  {
    id: 4,
    title: {
      en: "Kavya Sandhya 2024: Event Highlights",
      hi: "काव्य संध्या 2024: कार्यक्रम की झलकियां",
    },
    content: {
      en: "This year's Kavya Sandhya brought together some of the finest Hindi poets...",
      hi: "इस वर्ष की काव्य संध्या में कुछ बेहतरीन हिंदी कवियों को एक साथ लाया गया...",
    },
    date: "2024-03-15",
    author: "Priya Verma",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80",
    category: "events",
    readTime: 4,
  },
];

export { blogCategories, events, members, blogPosts };
