<template>
     <form action="https://formspree.io/f/mnqyeawg" method="POST">
      <div
        class="container text-center justify-content-center align-items-center"
      >
        <div class="row text-center justify-content-center align-items-center">
          <h2>Contact Us</h2>
          <label
            >Name:
            <br />
            <input
              type="text"
              name="name"
              required="required"
              placeholder="eg. Asiphe"
            />
          </label>
          <label>
            Your email:
            <br />
            <input
              type="email"
              name="email"
              required="required"
              placeholder="yourname@example.com"
            />
          </label>
          <label>
            Your message:
            <br />
            <textarea
              name="message"
              required="required"
              placeholder="Enter a message"
            ></textarea>
          </label>

          <button class="btn-add-to-cart btn" type="submit">Send</button>
        </div>
      </div>
    </form>
 </template>
 <style>
/* Style inputs with type="text", select elements and textareas */
label,h2{
  color: white;
}
input[type="text"],[type="email"],
select,
textarea {
  width : 500px !important;
  padding: 12px; /* Some padding */
  border: 1px solid #0cd1c7; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}
/* Media Query */
@media screen and (max-width: 767px) {
  input[type="text"],[type="email"],
  select,
  textarea {
  width: 100% !important;
  }
}

/* Style the submit button with a specific background color etc */
input[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
input[type="submit"]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;

  padding: 20px;
}
</style>