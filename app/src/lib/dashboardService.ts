import api from "./axios";

export interface DashboardResponse {
  success: boolean;

  stats: {
    blogs: number;
    banners: number;
    contacts: number;
    activeBanners: number;
    pendingContacts: number;
  };

  analytics: {
    month: string;
    blogs: number;
    banners: number;
    contacts: number;
  }[];

  activities: {
    type: "blog" | "banner" | "contact";
    title: string;
    action: string;
    createdAt: string;
  }[];
}

export const getDashboard = async () => {
  const { data } =
    await api.get<DashboardResponse>(
      "/dashboard"
    );

  return data;
};