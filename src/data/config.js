// ============================================================
//  PORTFOLIO CONFIG — edit this file to update your portfolio
// ============================================================

export const personal = {
  name: "Mohannad Salem",
  navLogo: "mohannad.dev",
  tagline: "Software engineer\nwho ships real ML systems.",
  taglineAccent: "ML systems.", // the word that gets the italic teal
  bio: "CS student at Western University specialising in ML and backend engineering. I've shipped models trained on real transit data, built recommendation engines, and worked inside production engineering teams.",
  status: "open to work",
  location: "Open to relocation or remote work",
  roles: "Actively looking for backend, ML, or software engineering roles.",
};

export const stats = [
  { number: "97%", label: "CNN classification accuracy" },
  { number: "100k+", label: "rows of real-world data processed" },
  { number: "3", label: "engineering internships" },
  { number: "3", label: "ML projects shipped" },
];

export const about = [
  "I'm a Computer Science student at Western University with hands-on experience across backend engineering and machine learning building things that ship.",
  "I've trained production-grade neural networks, built data pipelines on real-world datasets, and worked inside cross-functional engineering teams. Currently looking for full-time and internship roles in backend or ML engineering.",
];

// Nav links — href can be "#section-id" or a full URL
export const navLinks = [
  { label: "work", href: "#projects" },
  { label: "stack", href: "#stack" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

// Contact links shown in the footer CTA
export const contactLinks = [
  { label: "email", href: "mailto:mohannad2611@gmail.com" },
  { label: "github", href: "https://github.com/LeDorime" },
  { label: "linkedin", href: "https://www.linkedin.com/in/mohannad-salem/" },
  { label: "resume", href: "/resume.pdf", target: "_blank" },
];

// Hero CTA buttons
export const heroCTAs = [
  { label: "View my work", href: "#projects", primary: true },
  {
    label: "Download resume",
    href: "/resume.pdf",
    primary: false,
    target: "_blank",
  },
];

// ---- PROJECTS -----------------------------------------------
// icon: any Tabler icon name e.g. "api", "terminal", "lock", "database", "server", "code", "brain"
export const projects = [
  {
    name: "Bi-LSTM Transit Predictor",
    icon: "timeline",
    description:
      "Bidirectional LSTM model predicting real-time bus arrival times across London, ON. Trained on 100k+ rows of live transit and weather data — outperformed baseline heuristics on MAE and RMSE.",
    tags: ["Python", "PyTorch", "Pandas", "NumPy"],
    primaryTag: "PyTorch",
    links: [{ label: "Private repo", href: "https://github.com/LeDorime" }],
  },
  {
    name: "Handwritten Digit Recognition",
    icon: "writing",
    description:
      "CNN achieving 97% classification accuracy on 70,000 MNIST samples. Includes a live inference module — users can test the model on their own handwritten images in real time.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV"],
    primaryTag: "TensorFlow",
    links: [
      {
        label: "GitHub →",
        href: "https://github.com/LeDorime/digit-recognition",
      },
    ],
  },
  {
    name: "Specialist Matching Engine",
    icon: "users",
    description:
      "Recommendation model built at 60Talent to match specialists to job postings based on skill similarity and engagement history. Improved top-10 candidate ranking accuracy.",
    tags: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    primaryTag: "scikit-learn",
    links: [
      {
        label: "LinkedIn →",
        href: "https://www.linkedin.com/in/mohannad-salem/",
      },
    ],
  },
];

// ---- STACK --------------------------------------------------
export const stack = [
  { name: "Python", color: "#85B7EB" },
  { name: "PyTorch", color: "#F0997B" },
  { name: "TensorFlow", color: "#FAC775" },
  { name: "scikit-learn", color: "#5DCAA5" },
  { name: "Pandas", color: "#97C459" },
  { name: "NumPy", color: "#C0977E" },
  { name: "Java", color: "#ED93B1" },
  { name: "JavaScript", color: "#888880" },
  { name: "Git / Linux", color: "#7B9FD4" },
];
