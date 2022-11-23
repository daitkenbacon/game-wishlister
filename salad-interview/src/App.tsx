import type { FunctionComponent } from "react";

import WishlistPage from "./pages/wishlist-page/WishlistPage";

export interface AppProps {}

export const App: FunctionComponent<AppProps> = () => (
  <section className="section">
    <div className="app-container">
      <WishlistPage />
    </div>
  </section>
);
