import { Outlet } from "react-router-dom";
import SecHeader from "../components/layout/SecHeader";
import SecFooter from "../components/layout/SecFooter";

export function SecurityLayout() {
  return (
    <>
      <SecHeader />
      <main>
        <Outlet />
      </main>
      <SecFooter />
    </>
  );
}
