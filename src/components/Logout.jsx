import { ExitIcon } from "@radix-ui/react-icons";
import { Button, Tooltip, Container } from "@radix-ui/themes";

function Logout(props) {
  return (
    <Container>
        <Tooltip content="Logout">
        <Button
            onClick={props.onLogout}
            style={{ position: "fixed", bottom: 20, left: 20, zIndex: 100 }}
            variant="ghost"
        >
            <ExitIcon />
        </Button>
        </Tooltip>
        <Container style={{ position: "fixed", bottom: 16, left: 42, zIndex: 100 }}>
            <small>- {props.username}</small>
        </Container>
    </Container>
  );
}

export default Logout;