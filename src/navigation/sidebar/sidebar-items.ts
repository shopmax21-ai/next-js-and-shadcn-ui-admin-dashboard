import {
  Banknote,
  Calendar,
  ChartBar,
  Fingerprint,
  Forklift,
  Gauge,
  GraduationCap,
  Kanban,
  LayoutDashboard,
  ListTodo,
  Lock,
  type LucideIcon,
  Mail,
  MessageSquare,
  ReceiptText,
  ShoppingBag,
  SquareArrowUpRight,
  Users,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Дашборды",
    items: [
      {
        title: "По умолчанию",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        title: "CRM",
        url: "/dashboard/crm",
        icon: ChartBar,
      },
      {
        title: "Финансы",
        url: "/dashboard/finance",
        icon: Banknote,
      },
      {
        title: "Аналитика",
        url: "/dashboard/analytics",
        icon: Gauge,
      },
      {
        title: "Продуктивность",
        url: "/dashboard/productivity",
        icon: ListTodo,
      },
      {
        title: "Электронная торговля",
        url: "/dashboard/ecommerce",
        icon: ShoppingBag,
      },
      {
        title: "Академия",
        url: "/dashboard/academy",
        icon: GraduationCap,
        isNew: true,
      },
      {
        title: "Логистика",
        url: "/dashboard/logistics",
        icon: Forklift,
      },
    ],
  },
  {
    id: 2,
    label: "Страницы",
    items: [
      {
        title: "Почта",
        url: "/dashboard/mail",
        icon: Mail,
      },
      {
        title: "Чат",
        url: "/dashboard/coming-soon",
        icon: MessageSquare,
        comingSoon: true,
      },
      {
        title: "Календарь",
        url: "/dashboard/coming-soon",
        icon: Calendar,
        comingSoon: true,
      },
      {
        title: "Канбан",
        url: "/dashboard/coming-soon",
        icon: Kanban,
        comingSoon: true,
      },
      {
        title: "Счета",
        url: "/dashboard/coming-soon",
        icon: ReceiptText,
        comingSoon: true,
      },
      {
        title: "Пользователи",
        url: "/dashboard/users",
        icon: Users,
      },
      {
        title: "Роли",
        url: "/dashboard/roles",
        icon: Lock,
      },
      {
        title: "Аутентификация",
        url: "/auth",
        icon: Fingerprint,
        subItems: [
          { title: "Вход v1", url: "/auth/v1/login", newTab: true },
          { title: "Вход v2", url: "/auth/v2/login", newTab: true },
          { title: "Регистрация v1", url: "/auth/v1/register", newTab: true },
          { title: "Регистрация v2", url: "/auth/v2/register", newTab: true },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Устаревшие",
    items: [
      {
        title: "Dashboards",
        url: "/dashboard/default-v1",
        subItems: [
          { title: "По умолчанию V1", url: "/dashboard/default-v1" },
          { title: "CRM V1", url: "/dashboard/crm-v1" },
          { title: "Финансы V1", url: "/dashboard/finance-v1" },
          { title: "Аналитика V1", url: "/dashboard/analytics-v1" },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Разное",
    items: [
      {
        title: "Прочее",
        url: "/dashboard/coming-soon",
        icon: SquareArrowUpRight,
        comingSoon: true,
      },
    ],
  },
];
