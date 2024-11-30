import React from "react";
import "./messagesFirstScreen.css";
import emotionsIcon from "./Asessts/Images/emotions-icon.svg";
import uploadIcon from "./Asessts/Images/upload-icon.svg";
import sendIcon from "./Asessts/Images/send-icon.svg";
import messageReceivedAvatar from "./Asessts/Images/message-received-avatar.svg";

function MessagesFirstScreen() {
  return (
    <>
      <main>
        <section className="messages-background">
          <div className="messages__header">
            <h1>Messages</h1>
          </div>
          <div className="chat-container">
            {/* <!-- Main Chat Body --> */}
            <div className="chat-body">
              {/* <!-- Contact List --> */}
              <aside className="contact-list">
                <div className="contact ">
                  <div className="avatar">T</div>
                  <div className="details">
                    <p className="name">Tee</p>
                    <p className="preview">Salut 👋</p>
                  </div>
                  <span className="time">15 Minutes</span>
                </div>
                <div className="contact active">
                  <div className="avatar yellow">J</div>
                  <div className="details">
                    <p className="name">Jeena Ray</p>
                    <p className="preview">Salut</p>
                  </div>
                  <span className="time">12:36 PM</span>
                </div>
                <div className="contact">
                  <div className="avatar green">L</div>
                  <div className="details">
                    <p className="name">Lancer Wyatt</p>
                    <p className="preview">Pourquoi...</p>
                  </div>
                  <span className="time">12:35 PM</span>
                </div>
                <div className="contact">
                  <div className="avatar yellow">N</div>
                  <div className="details">
                    <p className="name">Norman Dis...</p>
                    <p className="preview">Pourquoi...</p>
                  </div>
                  <span className="time">12:34 PM</span>
                </div>
                <div className="contact">
                  <div className="avatar">w</div>
                  <div className="details">
                    <p className="name">Warren Isro</p>
                    <p className="preview">Pourquoi...</p>
                  </div>
                  <span className="time">12:33 PM</span>
                </div>
                <div className="contact">
                  <div className="avatar green">D</div>
                  <div className="details">
                    <p className="name">David Copper</p>
                    <p className="preview">Pourquoi...</p>
                  </div>
                  <span className="time">12:32 PM</span>
                </div>
                <div className="contact">
                  <div className="avatar yellow">A</div>
                  <div className="details">
                    <p className="name">Amber Hailey</p>
                    <p className="preview">Pourquoi...</p>
                  </div>
                  <span className="time">12:31 PM</span>
                </div>
                <div className="contact">
                  <div className="avatar ">S</div>
                  <div className="details">
                    <p className="name">Sara Jones</p>
                    <p className="preview">Pourquoi...</p>
                  </div>
                  <span className="time">12:30 PM</span>
                </div>
                <div className="contact">
                  <div className="avatar yellow">N</div>
                  <div className="details">
                    <p className="name">Norman Dis...</p>
                    <p className="preview">Pourquoi...</p>
                  </div>
                  <span className="time">12:29 PM</span>
                </div>
                <div className="contact">
                  <div className="avatar green">L</div>
                  <div className="details">
                    <p className="name">Lancer Wyatt</p>
                    <p className="preview">Pourquoi...</p>
                  </div>
                  <span className="time">12:36 PM</span>
                </div>
                <div className="contact">
                  <div className="avatar">N</div>
                  <div className="details">
                    <p className="name">Norman Dis...</p>
                    <p className="preview">Pourquoi...</p>
                  </div>
                  <span className="time">12:28 PM</span>
                </div>
                {/* <!-- Add more contacts as needed --> */}
              </aside>

              {/* <!-- Chat Window --> */}
              <main className="chat-window">
                {/* <!-- Chat Header --> */}
                <div className="chat-header">
                  {/* <h2>Jeena Ray</h2> */}
                  <div className="options">
                    <p>.</p>
                    <p>.</p>
                    <p>.</p>
                  </div>
                </div>

                {/* <!-- Chat Messages --> */}
                <div className="messages">
                  <span className="timestamp">Jeudi, 4 janvier - 18:21</span>

                  <div className="message received">
                    <p>Bonjour?</p>
                  </div>
                  <div className="message received-2">
                    <img
                      src={messageReceivedAvatar}
                      className="message-received-avatar"
                    />
                    <p>Besoin de plus de détails pour la maison</p>
                  </div>
                  <div className="message-sent-wrapper">
                    <div className="message sent">
                      <p>Oui s’il vous plaît vous pouvez demander</p>
                    </div>
                    <div className="message sent-2">
                      <p>Je répondrai à tout</p>
                    </div>
                  </div>
                </div>
                <div className="chat-footer">
                  <input
                    type="text"
                    placeholder="Entrer le message..."
                    className="message-input"
                  />

                  <div className="chat-footer-icons">
                    <button className="icon-button">
                      <img src={emotionsIcon} alt="Emotions Icon" />
                    </button>
                    <button className="icon-button">
                      <img src={uploadIcon} alt="Upload Icon" />
                    </button>
                  </div>

                  <button className=" flex justify-center items-center p-3 mb-8 shadow-lg rounded-full ml-3 send">
                    <img src={sendIcon} alt="Send Icon" width={28}  />
                  </button>
                </div>
              </main>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default MessagesFirstScreen;
