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
import { Image } from "@components";
import LoginImage from "@assets/LoginImage.svg";
import { useForm } from "@hooks";
import { ROUTES } from "@constants";
import { AppearAnimation } from "@common/animations";
import {
  AuthContainer,
  FormContainer,
  FormImageContainer,
} from "@common/components/Auth";

const ANIMATION_DELAY_START = 0.1;
const ANIMATION_DELAY_DIFF = 0.05;
const ANIMATION_DELAY_MAX = 0.5;

export const LoginPage = () => {
  const { handleSubmit, email, password, isValid } = useForm({
    email: {
      value: "",
      validators: { minLength: 6, maxLength: 30, email: true },
    },
    password: {
      value: "",
      validators: { minLength: 6, maxLength: 60 },
    },
  });

  const handleFormSubmit = () => {
    console.log(email.value, password.value);
  };

  return (
    <AuthContainer
      flex
      justifyContent="space-between"
      alignItems="center"
      fullWidth
    >
      <FormContainer>
        <Form
          onSubmit={handleSubmit(handleFormSubmit)}
          fullWidth
          maxWidth="500px"
        >
          <Container flex column gap="var(--gap-700)">
            <Container flex column gap="var(--gap-300)">
              <AppearAnimation
                delay={ANIMATION_DELAY_START + ANIMATION_DELAY_DIFF}
                y="300%"
                delayMax={ANIMATION_DELAY_MAX}
              >
                <Heading bold fontSize="1.75em">
                  Welcome back
                </Heading>
              </AppearAnimation>

              <AppearAnimation
                delay={ANIMATION_DELAY_START + ANIMATION_DELAY_DIFF}
                y="450%"
                delayMax={ANIMATION_DELAY_MAX}
              >
                <Text fontSize="1.25em">We are happy to see you again!</Text>
              </AppearAnimation>
            </Container>

            <AppearAnimation
              delay={ANIMATION_DELAY_START + ANIMATION_DELAY_DIFF * 2}
              delayMax={ANIMATION_DELAY_MAX}
            >
              <TextField variant="outlined" labelText="Email" {...email} />
            </AppearAnimation>

            <AppearAnimation
              delay={ANIMATION_DELAY_START + ANIMATION_DELAY_DIFF * 4}
              delayMax={ANIMATION_DELAY_MAX}
            >
              <TextField
                variant="outlined"
                labelText="Password"
                type="password"
                {...password}
              />
            </AppearAnimation>

            <AppearAnimation
              delay={ANIMATION_DELAY_START + ANIMATION_DELAY_DIFF * 5}
              y="550%"
              delayMax={ANIMATION_DELAY_MAX}
            >
              <Button submit fullWidth variant="primary" disabled={!isValid}>
                Create new account
              </Button>
            </AppearAnimation>
            <AppearAnimation
              delay={ANIMATION_DELAY_START + ANIMATION_DELAY_DIFF * 6}
              y="1000%"
              delayMax={ANIMATION_DELAY_MAX}
            >
              <Text fontSize="0.85em" center>
                Do not have an account?{" "}
                <AppLink to={ROUTES.REGISTER} blue>
                  Register.
                </AppLink>
              </Text>
            </AppearAnimation>
          </Container>
        </Form>
      </FormContainer>
      <FormImageContainer>
        <AppearAnimation
          delay={ANIMATION_DELAY_START + ANIMATION_DELAY_DIFF}
          y="20%"
          delayMax={ANIMATION_DELAY_MAX}
        >
          <ParallaxItem center>
            <Image src={LoginImage} maxWidth="70vmin" fullWidth contain />
          </ParallaxItem>
        </AppearAnimation>
      </FormImageContainer>
    </AuthContainer>
  );
};
