import {
  Brain,
  Zap,
  Shield,
  Globe,
  Sparkles,
  TrendingUp,
  Star,
} from "lucide-react";

export const features = [
  {
    icon: Brain,
    title: "AI Content Generator",
    description:
      "Create blog posts, marketing copy, and technical documentation with advanced AI models.",
    demo: "Generate engaging content in seconds",
  },
  {
    icon: Zap,
    title: "Smart Analytics",
    description:
      "Real-time data insights powered by machine learning for better decision making.",
    demo: "Analyze patterns and predict trends",
  },
  {
    icon: Shield,
    title: "AI Security Scanner",
    description:
      "Automated vulnerability detection and security monitoring for your apps.",
    demo: "Scan and protect digital assets",
  },
  {
    icon: Globe,
    title: "Language AI",
    description: "Real-time translation and localization for global expansion.",
    demo: "Translate to 100+ languages instantly",
  },
  {
    icon: Sparkles,
    title: "Image AI Studio",
    description:
      "Generate, edit, and enhance images with state-of-the-art models.",
    demo: "Create stunning visuals effortlessly",
  },
  {
    icon: TrendingUp,
    title: "Predictive Insights",
    description:
      "Forecast market trends and outcomes with AI-powered predictions.",
    demo: "Predict future outcomes accurately",
  },
] as const;

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVision Inc",
    avatar: "/avatars/Sarah.png",
    content:
      "AI Tools Hub transformed our workflow efficiency by 300%. Integration was seamless and results were immediate.",
    rating: 5 as const,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, StartupLab",
    avatar: "/avatars/marcus.png",
    content:
      "Game-changing platform! We automated 80% of our content creation and scaled globally.",
    rating: 5 as const,
  },
  {
    name: "Emily Watson",
    role: "Head of Innovation, GlobalCorp",
    avatar: "/avatars/emily.png",
    content:
      "AI-powered analytics gave us insights we never knew existed. ROI up 250% in 3 months.",
    rating: 5 as const,
  },
] as const;
