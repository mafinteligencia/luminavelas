import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve("dist");
const routeNames = ["bolos", "encomendar", "sobre", "proposta2026", "dalpizzol"];
const source = resolve(distDir, "index.html");

for (const route of routeNames) {
  const routeDir = resolve(distDir, route);
  await mkdir(routeDir, { recursive: true });
  await copyFile(source, resolve(routeDir, "index.html"));
}
