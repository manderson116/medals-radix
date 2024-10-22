import { useState } from "react";
import trigger from "../assets/trigger.svg";
import "./NewCountry.css";

function NewCountry(props) {
  const [showDialog, setShowDialog] = useState(false);
  const [newCountryName, setNewCountryName] = useState("");

  function hideDialog() {
    setNewCountryName("");
    setShowDialog(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onAdd(newCountryName);
    hideDialog();
  }
  function handleKeyUp(e) {
    e.keyCode === 27 && hideDialog();
  }

  return (
    <>
      {showDialog ? (
        <form onSubmit={(e) => handleSubmit(e)} onKeyUp={(e) => handleKeyUp(e)}>
          <div id="overlay" onClick={hideDialog}></div>
          <div id="dialog">
            <h3>Enter new country name</h3>
            <input
              type="text"
              name="NewCountryName"
              placeholder="enter name"
              autoFocus
              autoComplete="off"
              value={newCountryName}
              onChange={(e) => setNewCountryName(e.target.value)}
            />
            <div id="buttons">
              <button
                type="submit"
                id="save"
                disabled={newCountryName.trim().length === 0}
              >
                save
              </button>
              <button id="cancel" type="button" onClick={hideDialog}>
                cancel
              </button>
            </div>
          </div>
        </form>
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
