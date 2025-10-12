import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const routes = ["/", "/o-mnie", "/oferta", "/promocje", "/realizacje", "/blog"];

const stream = new SitemapStream({
  hostname: "https://www.carboncare.pl", // Replace with your domain
});

const links = routes.map((route) => ({
  url: route,
  changefreq: "weekly",
  priority: 0.8,
}));
links.forEach((link) => stream.write(link));
stream.end();

streamToPromise(stream)
  .then(async (sitemap) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const outputPath = path.resolve(__dirname, "dist", "sitemap.xml");
    fs.writeFileSync(outputPath, sitemap.toString());
    console.log("sitemap.xml generated successfully!");
  })
  .catch((err) => {
    console.error("Error generating sitemap:", err);
  });
