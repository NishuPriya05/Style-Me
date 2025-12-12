const rawBackendUrl =
  import.meta.env.VITE_BACKEND_URL || "https://style-me-backend.vercel.app";
const normalizedBackendUrl = String(rawBackendUrl).replace(/\/+$/, "").trim();

const conf = {
  backendUrl: normalizedBackendUrl,
};
export default conf;
