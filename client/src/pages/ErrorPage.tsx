import { AppLink } from "@common/components";
import { ROUTES } from "@constants";

export const ErrorPage = () => {
  return (
    <div>
      <h3>Error Page</h3>
      <AppLink to={ROUTES.BOARDS}>Go back to something</AppLink>
    </div>
  );
};
