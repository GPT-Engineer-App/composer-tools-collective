import { Home, Music, Waveform } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Composition",
    to: "/composition",
    icon: <Music className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual component when created
  },
  {
    title: "Audio Analysis",
    to: "/analysis",
    icon: <Waveform className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual component when created
  },
];
