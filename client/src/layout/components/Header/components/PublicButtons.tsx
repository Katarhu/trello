import { AppLink, Container } from "@common/components";
import { ROUTES } from "@constants";

export const PublicButtons = () => {
  return (
    <Container flex gap="var(--gap-300)" style={{ marginLeft: "auto" }}>
      <AppLink to={ROUTES.LOGIN} variant="secondary">
        Login
      </AppLink>
      <AppLink to={ROUTES.REGISTER} variant="primary">
        Register
      </AppLink>
    </Container>
  );
};
