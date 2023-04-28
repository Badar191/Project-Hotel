import React from 'react';
import './App.css';
// import './Contact';
// import Contact from './Contact';

function App() {
  return (
    <div>
      <div id='Home'>
        <header>
          <h1 class="l-heading">Welcome to <span class="text-primary">Hotel HBT</span></h1>
          <nav>
            <a href="#">Rooms</a>
            <a href="#">Facilities</a>
          </nav>
        </header>
        <main>
          <h2>Book Your Stay</h2>
          <form action="#">
            <label for="checkin">Check-in Date:</label>
            <input type="date" id="checkin" name="checkin" />
            <label for="checkout">Check-out Date:</label>
            <input type="date" id="checkout" name="checkout" />
            <label for="guests">Guests:</label>
            <select id="guests" name="guests">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <input type="submit" value="Check Availability"></input>


          </form>
          <hr></hr>
          <h2><span class="text-primary">About</span> Us</h2>
          <p>Welcome to Hotel HBT, a luxurious hotel located in the heart of the city. Our hotel offers comfortable rooms, world-class facilities, and excellent service to make your stay a memorable one. </p>
          <hr></hr>
          <div id='contact'>
          <h2><span class="text-primary">Contact</span> Us</h2>
                <p>Please fill out the form below to contact us</p>
                <form action="#">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" />
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" />
                        <label for="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                    <button type="submit" class="btn">Submit</button>
                </form>
          </div>
        </main>
        <footer>
          <p>Copyright © 2023 Hotel HBT</p>
        </footer>
      </div>

    </div>

  );
}

export default App;