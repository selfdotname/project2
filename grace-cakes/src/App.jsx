import { useState } from "react";
import "./App.css";

function App() {
  const [fullnamme, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  /**@param {SubmitEvent} e */
  const submitContactForm = (e) => {
    e.preventDefault();
    if (!fullnamme || !email || !message) {
      alert("All fields are required to send us a message");
      return;
    }
    alert("Message sent, you will hear from us");
  };
  return (
    <>
      <section>
        <div className="intro-section-position-wrapper">
          <div className="intro-section">
            <div>
              <img src="little-girl-holding-cake-smiling.jpg" />
            </div>
            <h1>Grace's Cakes</h1>
            <h3>Sweet moments, beautifully baked.</h3>
          </div>
        </div>
      </section>
      <section>
        <div className="services-section">
          <h2>Services</h2>
          <div className="services-list">
            <ul>
              <li>
                <img src="birthday-cake.jpg" />
                <h3>Birthday cakes</h3>
                <p>
                  Celebrate special moments with our custom-made birthday cakes.
                  Whether it's for kids or adults, we bake with love, decorate
                  with care, and deliver a taste that brings smiles.
                </p>
              </li>
              <li>
                <img src="marriage-cake.jpg" />
                <h3>Marriage cakes</h3>
                <p>
                  Make your big day unforgettable with our elegant and delicious
                  marriage cakes. Designed to match your theme and baked to
                  perfection, each tier tells a sweet love story.
                </p>
              </li>
              <li>
                <img src="anniversary-cake.jpg" />
                <h3>Anniversary cakes</h3>
                <p>
                  Celebrate your years of love with a beautifully crafted
                  anniversary cake. Elegant, romantic, and made to sweeten your
                  special day.
                </p>
              </li>
              <li>
                <img src="valentine-cake.jpg" />
                <h3>Valentine cakes</h3>
                <p>
                  Say “I love you” with a heart-melting Valentine cake. Rich
                  flavors, charming designs—perfect for your special someone.
                </p>
              </li>
              <li>
                <img src="graduation.jpg" />
                <h3>Graduation cakes</h3>
                <p>
                  Mark the milestone with a graduation cake that stands out.
                  Celebrate hard work, success, and new beginnings with every
                  slice.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="quote-section">
          <h2>What our customers have to say</h2>
          <div className="quote-list">
            <ul>
              <li>
                <div className="quote">
                  <i className="fa-solid fa-quote-left"></i>
                  <span>
                    Grace Cakes made my daughter's birthday unforgettable. The
                    design was perfect, and the taste? Heavenly!
                  </span>
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <div className="quote-author">
                  <img src="profile1.jpeg" alt="" />
                  <span>- Lina Chen</span>
                </div>
              </li>
              <li>
                <div className="quote">
                  <i className="fa-solid fa-quote-left"></i>
                  <span>
                    Honestly didn't expect much, but the cake blew everyone
                    away. Moist, tasty, and picture-perfect.{" "}
                  </span>
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <div className="quote-author">
                  <img src="profile2.jpeg" alt="" />
                  <span>- Jake Thompson</span>
                </div>
              </li>
              <li>
                <div className="quote">
                  <i className="fa-solid fa-quote-left"></i>
                  <span>
                    Absolutely delicious! The design and taste blew everyone
                    away. I'll definitely order again.
                  </span>
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <div className="quote-author">
                  <img src="profile3.jpeg" alt="" />
                  <span>- Emily Carter</span>
                </div>
              </li>
              <li>
                <div className="quote">
                  <i className="fa-solid fa-quote-left"></i>
                  <span>
                    Grace Cakes never disappoints. The flavours are exquisite,
                    and the cakes always look stunning!
                  </span>
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <div className="quote-author">
                  <img src="profile4.jpeg" alt="" />
                  <span>- Olivia Taylor</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="social-links-section">
          <h2>Get in touch</h2>
          <div className="social-links-list">
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com" target="_blank">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="contact-us-section">
          <h2>Send us a message</h2>
          <div className="contact-us-form">
            <form onSubmit={submitContactForm}>
              <div className="field">
                <label>Fullname</label>
                <input
                  type="text"
                  value={fullnamme}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2025 Grace cakes. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
