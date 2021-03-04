import React from "react";
import "./css/Contact.css";
import Button from "@material-ui/core/Button";

function Contact() {
    const [submitMessage, setSubmitMessage] = React.useState("");
    const [submitMessageColor, setMessageColor] = React.useState("white");

    return (
        <div>
            <h3 style={{ color: "white", fontSize: "42px", textAlign: "center", marginTop: "300px" }}>Contact</h3>
            <p id="submit-message" style={{ color: submitMessageColor }}>
                {submitMessage}
            </p>
            <form action="https://josephtams.com/contact/submit.php">
                <label htmlFor="name" style={{ gridArea: "name-label" }}>
                    Name
                </label>
                <input type="text" name="name" id="name-field" style={{ gridArea: "name-field" }}></input>

                <label htmlFor="email" style={{ gridArea: "email-label" }}>
                    Email
                </label>
                <input type="email" name="email" id="email-field" style={{ gridArea: "email-field" }}></input>

                <label htmlFor="message" style={{ gridArea: "message-label" }}>
                    Message
                </label>
                <textarea name="message" id="message-field" placeholder="Enter message here..." style={{ gridArea: "message-field" }}></textarea>

                <button type="submit" style={{ gridArea: "submit" }}>
                    Submit
                </button>

                <Button
                    style={{ gridArea: "submit" }}
                    variant="contained"
                    onClick={() => {
                        var formdata = new FormData();
                        formdata.append("email", document.getElementById("email-field").value);
                        formdata.append("name", document.getElementById("name-field").value);
                        formdata.append("message", document.getElementById("message-field").value);

                        var requestOptions = {
                            method: "POST",
                            body: formdata,
                            redirect: "follow",
                        };

                        fetch("https://josephtams.com/contact.php", requestOptions)
                            .then((response) => response.text())
                            .then((result) => {
                                // console.log(result);
                                if (result === "Done") {
                                    setMessageColor("rgb(25, 209, 19)");
                                    setSubmitMessage("Sent! Thank you for contacting me.");
                                } else {
                                    setSubmitMessage("Error");
                                    setMessageColor("rgb(163, 36, 36)");
                                }
                            })
                            .catch((error) => console.log("error", error));
                    }}>
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default Contact;
