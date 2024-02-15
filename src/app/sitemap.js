export default function sitemap() {
  return [
    {
      url: "https://wroclawglownyapartment.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://wroclawglownyapartment.com/thingstosee",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
