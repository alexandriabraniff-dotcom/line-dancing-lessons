import { usePathname } from "next/navigation";

/* usePathname(), but the homepage is always "/".
   The homepage refreshes on the server every hour (Instagram feed), and Vercel
   renders that refresh as "/index". Without this the hero menu loses its
   active Home link and the fixed header shows over the hero straight away. */
export function usePagePath() {
  const pathname = usePathname();
  return pathname === "/index" ? "/" : pathname;
}
