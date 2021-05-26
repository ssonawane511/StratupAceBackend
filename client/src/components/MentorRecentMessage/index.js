/** @format */

import React from "react";

const MentorRecentMessage = ({ data }) => {
  return (
    <div class='chat_list_item'>
      <div class='side_bar'></div>
      <span class='chat_element_container'>
        <a href={`/startup/chat/${data.id}`} class='chat_element'>
          <div class='name_header'>
            <div class='partner_name'>
              <div class='name'>{data.mentor.name}</div>{" "}
              <div class='time_container'>
                <div class='time'>23/01/2021</div>
              </div>
            </div>
          </div>
          <div class='profile_name'>
            {data.mentor.expertise.map((expertise) => (
              <div className='chip'>{expertise}</div>
            ))}
          </div>
          <div class='message'>
            <div class='message_inner '>
              {data.isLastMessgae ? (
                data.lastMessage.message
              ) : (
                <span>Start Conversation</span>
              )}
            </div>
          </div>
        </a>
      </span>
    </div>
  );
};

export default MentorRecentMessage;
