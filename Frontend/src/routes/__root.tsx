import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "#/components/theme-provider";
import { BackgroundGradient } from "#/components/BackgroundGradient";
import { Header } from "#/components/Header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="rhey-dev-theme">
      <BackgroundGradient />
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <TanStackRouterDevtools position="bottom-right" />
    </ThemeProvider>
  );
}
