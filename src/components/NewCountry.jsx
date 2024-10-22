import { useState } from "react";
import trigger from "../assets/trigger.svg";

function NewCountry() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      {showDialog ? (
        <form>dialog here</form>
      ) : (
        <img
          src={trigger}
          alt="New Country"
          title="New Country"
          id="trigger"
          onClick={() => setShowDialog(true)}
        />
      )}
    </>
  );
}

export default NewCountry;
