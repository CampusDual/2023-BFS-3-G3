import { MenuRootItem } from "ontimize-web-ngx";

export const MENU_CONFIG: MenuRootItem[] = [
  { id: "home", name: "HOME", icon: "home", route: "/main/home" },
  {
    id: "gyms",
    name: "MY_GYMS",
    route: "/main/gyms",
    icon: "fitness_center",

  },
  {
    id: "gymsuser",
    name: "GYMS",
    route: "/main/gymsuser",
    icon: "directions_run",
    pathMatch: "full"
  },
  {
    id: "reviews",
    name: "REVIEWS",
    route: "/main/reviews",
    icon: "reviews",
    pathMatch: "full"
  },
  {
    id: "accesscard",
    name: "ACCESS_CARD",
    route: "/main/accesscard",
    icon: "qr_code",
    pathMatch: "full"

  },
  {
    id: "servicesgymadmin",
    name: "MY_SERVICES",
    route: "/main/gymservices",
    icon: "edit_document",
    pathMatch: "full"
  },
  {
    id: "logout",
    name: "LOGOUT",
    route: "/login",
    icon: "power_settings_new",
    confirm: "yes",
  },
];
