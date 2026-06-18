const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getBanners() {
const response = await fetch(
`${API_URL}/banners`,
{
cache: "no-store",
}
);

if (!response.ok) {
throw new Error("Failed to fetch banners");
}

const result = await response.json();

return result.data
.filter((banner: any) => banner.isActive)
.sort(
(a: any, b: any) =>
a.displayOrder - b.displayOrder
);
}
