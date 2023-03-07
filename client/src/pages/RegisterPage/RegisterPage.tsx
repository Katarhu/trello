import {
  AppLink,
  Button,
  Container,
  Form,
  Heading,
  ParallaxItem,
  Text,
  TextField,
} from "@common/components";
import styled from "styled-components";
import { Image } from "@components";
import LoginImage from "@assets/LoginImage.svg";
import { useForm } from "@hooks";
import { ROUTES } from "@constants";


export const RegisterPage = () => {
  const { handleSubmit, email, username, password, isValid } = useForm({
    email: {
      value: "",
      validators: { minLength: 6, maxLength: 30, email: true },
    },
    username: { value: "", validators: { minLength: 6, maxLength: 30 } },
    password: {
      value: "",
      validators: { minLength: 6, maxLength: 60 },
    },
  });

  const handleFormSubmit = () => {
    console.log(email.value, username.value, password.value);
  };

  return (
    <AuthContainer
      flex
      justifyContent="space-between"
      alignItems="center"
      fullWidth
    >
      <FormImageContainer>
        <ParallaxItem center>
          <Image src={LoginImage} maxWidth="750px" fullWidth />
        </ParallaxItem>
      </FormImageContainer>
      <FormContainer>
        <Form
          onSubmit={handleSubmit(handleFormSubmit)}
          fullWidth
          maxWidth="500px"
        >
          <Container flex column gap="var(--gap-700)">
            <Heading bold fontSize="1.75em">
              Welcome to task manager
            </Heading>
            <Text fontSize="1.25em">Start managing you tasks right off</Text>
            <TextField variant="outlined" labelText="Email" {...email} />
            <TextField variant="outlined" labelText="Username" {...username} />
            <TextField
              variant="outlined"
              labelText="Password"
              type="password"
              {...password}
            />
            <Button submit fullWidth variant="primary" disabled={!isValid}>
              Create new account
            </Button>
            <Text fontSize="0.85em" center>
              Already have an account?{" "}
              <AppLink to={ROUTES.REGISTER} blue>
                Log in
              </AppLink>
            </Text>
          </Container>
        </Form>
      </FormContainer>
    </AuthContainer>
  );
};

const AuthContainer = styled(Container)`
  max-height: calc(100h - var(--headerHeigth) - var(--mainLayoutPadding) * 2);
  overflow: hidden;
`;

const FormImageContainer = styled.div`
  flex-shrink: 5;
  flex-grow: 1;

  padding: 3em;
`;

const FormContainer = styled.div`
  flex-shrink: 10;
  flex-grow: 1;
  display: grid;
  place-items: center;
`;
