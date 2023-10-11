import { MenuRootItem } from "ontimize-web-ngx";

export const MENU_CONFIG: MenuRootItem[] = [
  { id: "home", name: "HOME", icon: "home", route: "/main/home" },
  {
    id: "gyms",
    name: "GYMS",
    route: "/main/gyms",
    icon: "fitness_center",

  },
  {
    id: "logout",
    name: "LOGOUT",
    route: "/login",
    icon: "power_settings_new",
    confirm: "yes",
  },
];
