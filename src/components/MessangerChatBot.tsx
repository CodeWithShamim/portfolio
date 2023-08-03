import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

const MessangerChatBot = () => {
  return (
    <div className="bg-zinc-400">
      <MessengerCustomerChat
        pageId={process.env.FB_PAGE_ID}
        appId={process.env.FB_APP_ID}
        themeColor="#F200F2"
      />
    </div>
  );
};

export default MessangerChatBot;
