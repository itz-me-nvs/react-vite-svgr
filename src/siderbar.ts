
import PostIcon from "./assets/post.svg\?react";


export type SidebarItem = {
  id: string;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string;
};

export const sidebarList: SidebarItem[] = [
  { id: "dashboard", name: "Dashboard", icon: PostIcon, path: "/dashboard" },
  { id: "settings", name: "Settings", icon: PostIcon, path: "/settings" },
];

export default sidebarList