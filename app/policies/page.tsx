import type { Metadata } from "next";
import PoliciesClient from "./PoliciesClient";

export const metadata: Metadata = {
  title: "Comprehensive Insurance Policies & Protection Solutions | Vinsure",
  description:
    "Explore enterprise-grade, transparent insurance policy solutions tailored for individuals, growing families, and corporate organizations.",
};

export default function Page() {
  return <PoliciesClient />;
}