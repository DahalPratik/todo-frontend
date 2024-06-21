import { useContext, useState } from "react";
import {
  TextField,
  Container,
  Paper,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Login = () => {
  const {
    handleLogin,
    handleSignup,
    emailError,
    passwordError,
    email,
    password,
    setEmail,
    setPassword,
    hasAccount,
    setHasAccount,
  } = useContext();

  const [showPassword, setShowPassword] = useState(false);
  const linkStyle = {
    cursor: "pointer",
    color: "green",
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <section className="login" style={{ marginTop: 150 }}>
      <Container maxWidth="sm">
        <Paper variant="outlined" style={{ padding: 20 }}>
          <h1 style={{ textAlign: "center" }}>
            {hasAccount ? "Log in" : "Sign up"}
          </h1>
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          >
            <TextField
              label="Email"
              type="email"
              variant="filled"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="errorMsg">{emailError}</p>
            <TextField
              label="Password"
              variant="filled"
              fullWidth
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <p className="errorMsg">{passwordError}</p>
            {hasAccount ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                  fullWidth
                >
                  Log in
                </Button>
                <p style={{ userSelect: "none" }}>
                  Dont have an account?{" "}
                  <span
                    style={linkStyle}
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Sign up
                  </span>
                </p>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSignup}
                  fullWidth
                >
                  Sign up
                </Button>
                <p style={{ userSelect: "none" }}>
                  Have an account?{" "}
                  <span
                    style={linkStyle}
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    Login
                  </span>
                </p>
              </>
            )}
          </div>
        </Paper>
      </Container>
    </section>
  );
};

export default Login;
