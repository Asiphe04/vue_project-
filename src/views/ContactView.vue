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