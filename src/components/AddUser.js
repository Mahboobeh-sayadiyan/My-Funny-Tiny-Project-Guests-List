import React, { useRef } from "react";
import styles from "./AddUser.module.css";
import Container from "./UI/Container";
import Button from "./UI/Button";

function AddUser(props) {
  //   const [guest, setguest] = useState("");
  //   const [guestCount, setguestCount] = useState("");
  //   const [phoneNumber, setPhoneNumber] = useState("");

  //   const guestChangeHandler = (e) => {
  //     setguest(e.target.value);
  //   };
  //   const guestCountChangeHandler = (e) => {
  //     setguestCount(e.target.value);
  //   };
  //   const phoneNumberChangeHandler = (e) => {
  //     setPhoneNumber(e.target.value);
  //   };

  const guestRef = useRef(); //initial value is ref
  const guestCountRef = useRef();
  const phoneNumberRef = useRef();

  const addValidationHandler = (e) => {
    e.preventDefault();
    const guest = guestRef.current.value;
    const guestCount = guestCountRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    if (
      guest != null &&
      Number(guestCount) > 0 &&
      !isNaN(guestCount) &&
      !isNaN(phoneNumber)
    ) {
      const newUser = { guest, guestCount, phoneNumber, visible: 1 };
      props.onSaveNewUser(newUser);
    } else {
      let message = "";
      if (guest == null) message = "The guest's name can not be a null value.";
      else if (isNaN(guestCount) || Number(guestCount) <= 0)
        message = "The count of guests should be a positive number.";
      else if (isNaN(phoneNumber)) message = "The phone number is not correct.";
      //signal to show modal
      props.onShowError(message);
    }
    // setguestCount("");
    // setguest("");
    // setPhoneNumber("");
    guestRef.current.value = "";
    guestCountRef.current.value = "";
    phoneNumberRef.current.value = "";
  };
  return (
    <Container>
      <div className={styles.title}>
        <h4>
          This Application helps you to make an invitation list of your guests
        </h4>
      </div>
      <form className={styles.input} onSubmit={addValidationHandler}>
        <label>Guest Name</label>
        <input
          ref={guestRef}
          // value={guest}
          // onChange={guestChangeHandler}
        ></input>
        <label>Count of Guests</label>
        <input
          ref={guestCountRef}
          // value={guestCount}
          // onChange={guestCountChangeHandler}
        ></input>
        <label>Phone Number</label>
        <input
          ref={phoneNumberRef}
          // value={phoneNumber}
          // onChange={phoneNumberChangeHandler}
        ></input>
        <Button type="submit">Add New Guest</Button>
        <Button onClick={props.onRemoveAlluser}>Remove All Guest</Button>
      </form>
    </Container>
  );
}

export default AddUser;
