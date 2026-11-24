export const clerkConfigurado = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.startsWith("pk_"),
);

export const PAPEL_ADMIN = "admin";

function emailsAdmin() {
  return (process.env.NEXT_PUBLIC_EMAILS_ADMIN || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

export const ehAdmin = (usuario) =>
  usuario?.publicMetadata?.role === PAPEL_ADMIN;
