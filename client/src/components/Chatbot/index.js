/** @format */

import React, { useState } from "react";
import "./chatbot.css";
import Message from "../Message";
import ScrollableFeed from "react-scrollable-feed";
import typingGif from "../../assets/images/typing.gif";
import Axios from "axios";
const ChatBot = () => {
  const [chatToggle, setchatToggle] = useState(false);
  const [string, setString] = useState("");
  const [loddingMessage, setloddingMessage] = useState(false);
  const [chatList, setchatList] = useState([
    {
      message: "wellcome to startupAce how may i help you sir ?",
      data: [],
    },
  ]);
  const handleResponse = () => {
    const userMessgae = {
      id: "user",
      message: string,
      data: [],
    };

    setchatList((prevState) => [...prevState, userMessgae]);
    setString("");
    setloddingMessage(true);
    callBot(string);
  };

  const callBot = (text) => {
    Axios({
      method: "post",
      url: "/api/chatbot/chat",
      data: { string: text },
    }).then((res) => {
      console.log(res.data);
      if (res.data) {
        setloddingMessage(false);
        const botreply = {
          id: "bot",
          message: res.data.reply.messgae,
          data: res.data.reply.data,
        };
        setchatList((prevState) => [...prevState, botreply]);
      }
    });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div id='Smallchat'>
          <div
            className={`Layout Layout-open  Layout-right  ${
              chatToggle ? "Layout-expand" : "hide"
            }`}>
            <div className='Messenger_messenger'>
              <div className='Messenger_header'>
                <h4 className='Messenger_prompt'>How can we help you?</h4>
                <span
                  className='chat_close_icon'
                  type='button'
                  onClick={(e) => {
                    setchatToggle(false);
                  }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='25'
                    height='25  '
                    fill='currentColor'
                    class='bi bi-x-circle'
                    viewBox='0 0 16 16'>
                    <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                    <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                  </svg>
                </span>
              </div>
              <div className='Messenger_content'>
                <div className='Messages'>
                  <div className='Messages_list'>
                    <ScrollableFeed>
                      {chatList.length > 0
                        ? chatList.map((message) => (
                            <Message message={message} />
                          ))
                        : ""}
                      {loddingMessage ? (
                        <div className='chatbot_message'>
                          <span>
                            <img
                              src={typingGif}
                              alt='typing'
                              height='18px'
                              width='45px'
                            />
                          </span>{" "}
                        </div>
                      ) : (
                        ""
                      )}
                    </ScrollableFeed>
                  </div>
                </div>
                <div className='Input Input-blank'>
                  <textarea
                    className='Input_field'
                    placeholder='Send a message...'
                    value={string}
                    onChange={(e) => {
                      setString(e.target.value);
                    }}></textarea>
                  <button className='Input_button Input_button-emoji'>
                    <div className='Icon'>
                      <svg
                        width='18px'
                        height='18px'
                        viewBox='1332 47 56 56'
                        version='1.1'>
                        <g
                          id='emoji'
                          stroke='none'
                          stroke-width='1'
                          fill='none'
                          fill-rule='evenodd'
                          transform='translate(1332.000000, 47.000000)'>
                          <path
                            d='M28,56 C12.536027,56 0,43.463973 0,28 C0,12.536027 12.536027,0 28,0 C43.463973,0 56,12.536027 56,28 C56,43.463973 43.463973,56 28,56 Z M28,50 C40.1502645,50 50,40.1502645 50,28 C50,15.8497355 40.1502645,6 28,6 C15.8497355,6 6,15.8497355 6,28 C6,40.1502645 15.8497355,50 28,50 Z'
                            id='Oval-8'
                            fill='#96AAB4'
                            fill-rule='nonzero'></path>
                          <path
                            d='M28,47 C18.0588745,47 10,38.9411255 10,29 C10,27.5224898 11.5469487,26.5550499 12.8754068,27.2017612 C13.0116063,27.2662365 13.0926181,27.3037345 13.1866998,27.3464814 C13.4611235,27.4711684 13.7819537,27.6111958 14.1451774,27.7627577 C15.1908595,28.199088 16.3591406,28.6365764 17.6173846,29.0449298 C21.1841638,30.2025005 24.7379224,30.8945075 28,30.8945075 C31.2620776,30.8945075 34.8158362,30.2025005 38.3826154,29.0449298 C39.6408594,28.6365764 40.8091405,28.199088 41.8548226,27.7627577 C42.2180463,27.6111958 42.5388765,27.4711684 42.8133002,27.3464814 C42.9073819,27.3037345 42.9883937,27.2662365 43.0558366,27.2344634 C44.4530513,26.5550499 46,27.5224898 46,29 C46,38.9411255 37.9411255,47 28,47 Z M28,43 C34.6510529,43 40.2188483,38.3620234 41.6456177,32.1438387 C40.9980758,32.3847069 40.320642,32.6213409 39.6173846,32.8495777 C35.6841638,34.1260741 31.7379224,34.8945075 28,34.8945075 C24.2620776,34.8945075 20.3158362,34.1260741 16.3826154,32.8495777 C15.679358,32.6213409 15.0019242,32.3847069 14.3543823,32.1438387 C15.7811517,38.3620234 21.3489471,43 28,43 Z'
                            id='Oval-8'
                            fill='#96AAB4'
                            fill-rule='nonzero'></path>
                          <path
                            d='M19,15 L19,20 C19,21.1045695 19.8954305,22 21,22 C22.1045695,22 23,21.1045695 23,20 L23,15 C23,13.8954305 22.1045695,13 21,13 C19.8954305,13 19,13.8954305 19,15 Z'
                            id='Line'
                            fill='#96AAB4'
                            fill-rule='nonzero'></path>
                          <path
                            d='M32,15 L32,20 C32,21.1045695 32.8954305,22 34,22 C35.1045695,22 36,21.1045695 36,20 L36,15 C36,13.8954305 35.1045695,13 34,13 C32.8954305,13 32,13.8954305 32,15 Z'
                            id='Line-Copy-2'
                            fill='#96AAB4'
                            fill-rule='nonzero'></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                  <button
                    className='Input_button Input_button-send'
                    onClick={handleResponse}>
                    <div className='Icon'>
                      <svg
                        width='18px'
                        height='18px'
                        viewBox='1496 193 57 54'
                        version='1.1'>
                        <g
                          id='Group-9-Copy-3'
                          stroke='none'
                          stroke-width='1'
                          fill='none'
                          fill-rule='evenodd'
                          transform='translate(1523.000000, 220.000000) rotate(-270.000000) translate(-1523.000000, -220.000000) translate(1499.000000, 193.000000)'>
                          <path
                            d='M5.42994667,44.5306122 L16.5955554,44.5306122 L21.049938,20.423658 C21.6518463,17.1661523 26.3121212,17.1441362 26.9447801,20.3958097 L31.6405465,44.5306122 L42.5313185,44.5306122 L23.9806326,7.0871633 L5.42994667,44.5306122 Z M22.0420732,48.0757124 C21.779222,49.4982538 20.5386331,50.5306122 19.0920112,50.5306122 L1.59009899,50.5306122 C-1.20169244,50.5306122 -2.87079654,47.7697069 -1.64625638,45.2980459 L20.8461928,-0.101616237 C22.1967178,-2.8275701 25.7710778,-2.81438868 27.1150723,-0.101616237 L49.6075215,45.2980459 C50.8414042,47.7885641 49.1422456,50.5306122 46.3613062,50.5306122 L29.1679835,50.5306122 C27.7320366,50.5306122 26.4974445,49.5130766 26.2232033,48.1035608 L24.0760553,37.0678766 L22.0420732,48.0757124 Z'
                            id='sendicon'
                            fill='#96AAB4'
                            fill-rule='nonzero'></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`chat_on ${chatToggle ? "hide" : ""}`}
            type='button'
            onClick={(e) => {
              setchatToggle(true);
            }}>
            {" "}
            <span className={`chat_on_icon  `}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                fill='currentColor'
                class='bi bi-chat-dots'
                viewBox='0 0 16 16'>
                <path d='M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
                <path d='m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z' />
              </svg>
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
