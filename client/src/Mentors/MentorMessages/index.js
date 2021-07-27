/** @format */

import React, { useEffect, useState } from "react";
import "./mentorMessage.css";
import Axios from "axios";
import { useAuth } from "../../utils/auth";
import RecentMessage from "../../components/RecentMessage";
import { useParams } from "react-router-dom";
import selectChatGif from "../../assets/images/selectChat.gif";
import { Link } from "react-router-dom";
import ScrollableFeed from "react-scrollable-feed";

const MentorMessgaes = () => {
  const { user } = useAuth();
  let { id = null } = useParams();
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setselectedConversation] = useState(null);
  const [messages, setmessages] = useState([]);
  const [text, setText] = useState(null);

  useEffect(() => {
    if (id === "new" || id === " " || id === "" || id === null) {
      return;
    }
    setInterval(() => {
      Axios({
        method: "get",
        url: `/api/mentors/get_messages/${id}`,
      }).then((res) => {
        if (res.data.success) {
          setselectedConversation(res.data.data);
          setmessages(res.data.messages);
        }
      });
    }, 1000);
  }, [id]);

  useEffect(() => {
    if (user) {
      Axios({
        method: "get",
        url: `/api/mentors/get_converstaions/${user.uid}`,
      }).then((res) => {
        if (res.data.success) {
          setConversations(res.data.data);
        }
      });
    }
  }, [user]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (text === " " || text === null || text === "") {
      return;
    }

    Axios({
      method: "post",
      url: `/api/mentors/send_messages/${id}`,
      data: {
        message: text,
      },
    }).then((res) => {
      if (res.data.success) {
        setText("");
      }
    });
  };

  return (
    <div className='container mt-50 mb-100'>
      <div className='row'>
        <div className='col-4  no-margin p-25 shadow-b border-l'>
          <h5>Messgaes from Startups </h5>
        </div>
        {selectedConversation ? (
          <div className='col  no-margin p-25 shadow-b border-l'>
            {" "}
            <p>
              {selectedConversation.startup.name}{" "}
              <sup className='ml-10 highligh'>
                <Link
                  to={`/startup/profile/${selectedConversation.startup.handle}`}>
                  @{selectedConversation.startup.handle}
                </Link>
              </sup>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className='row' style={{ height: "550px" }}>
        <div className='col-4 border no-margin no-padding '>
          <div className='left-chat-container'>
            {/* first  */}
            {conversations.length > 0
              ? conversations.map((convo) => <RecentMessage data={convo} />)
              : ""}
          </div>
        </div>
        <div className='col border no-margin  no-padding'>
          <div className='right-chat-container'>
            {/* first  */}

            {messages.length > 0 ? (
              <ScrollableFeed className='messages_container'>
                {" "}
                {messages.map((messages) => (
                  <div className='message'>
                    <div className={user.uid === messages.from ? "mine" : ""}>
                      <p className='no-margin'>{messages.messages}</p>
                      <span>{messages.from}</span>
                    </div>
                  </div>
                ))}
              </ScrollableFeed>
            ) : (
              ""
            )}

            {selectedConversation ? (
              <div class='chat_box'>
                <form onSubmit={handleSendMessage}>
                  <div class='attachment-frames'></div>
                  <div id='message_form_container'>
                    <div id='message_form'>
                      <div class='form-group textarea'>
                        <textarea
                          data-enable-grammarly='false'
                          id='message_input'
                          class='form-control autofit'
                          placeholder='Write a message...'
                          name='message'
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          style={{ height: "60px" }}></textarea>
                        <label class='attachment' for='file'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='30px'
                            height='30px'
                            fill='currentColor'
                            class='bi bi-paperclip'
                            viewBox='0 0 16 16'>
                            <path d='M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z' />
                          </svg>
                        </label>
                        <input
                          multiple=''
                          type='file'
                          name='file_to_upload'
                          id='file'
                          accept='.zip,.pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.png,.jpg,.jpeg'
                          style={{ display: "none" }}
                        />
                      </div>
                      <div class='form-group submit_button'>
                        <button
                          type='submit'
                          id='chat_send_button'
                          disabled=''
                          class='btn disableNot btn-semilarge'
                          title='Use Ctrl+Enter to send'>
                          send
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            ) : (
              <div className='text-center'>
                <img
                  src={selectChatGif}
                  className='img_100'
                  alt='nochatselect'
                />
                <p>please select chat</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorMessgaes;
