import { Mic } from "lucide-react";
import { useState } from "react";

function ChatWindow({ onClick }) {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! Welcome to Atithi Assist. How may I help you?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim() !== "") {
      setMessages([...messages, { type: "user", text: userInput }]);
      setUserInput("");
      // Simulate bot response after user input (example)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", text: "Thanks for your message!" },
        ]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat Window */}
      <div
        className="fixed bottom-[12%] right-[6%] z-10 flex h-[80%] w-[90%] flex-col rounded-[2rem] bg-white shadow-lg sm:h-[34rem] sm:w-[26rem] lg:h-[40rem] lg:w-[30rem]"
        style={{ borderBottomRightRadius: "0" }}
      >
        {/* Chat Header */}
        <div className="flex h-14 items-center justify-between rounded-t-[2rem] bg-[#1A1A1A] px-4 py-2 text-white">
          <div className="flex items-center space-x-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0C19.6819 0 22.6667 2.98477 22.6667 6.66667H9.33331C9.33331 2.98477 12.3181 0 16 0Z"
                fill="#fff"
              />
              <path
                d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16Z"
                fill="#fff"
              />
              <path
                d="M6.66667 9.33331C2.98477 9.33331 0 12.3181 0 16C0 19.6819 2.98477 22.6667 6.66667 22.6667V9.33331Z"
                fill="#fff"
              />
              <path
                d="M32 16C32 19.6819 29.0152 22.6667 25.3333 22.6667V9.33331C29.0152 9.33331 32 12.3181 32 16Z"
                fill="#fff"
              />
              <path
                d="M9.33331 25.3333C9.33331 29.0152 12.3181 32 16 32C19.6819 32 22.6667 29.0152 22.6667 25.3333H9.33331Z"
                fill="#fff"
              />
              <path
                d="M25.3333 2.66669C27.5425 2.66669 29.3333 4.45755 29.3333 6.66669H25.3333V2.66669Z"
                fill="#fff"
              />
              <path
                d="M25.3333 29.3333C27.5425 29.3333 29.3333 27.5425 29.3333 25.3333H25.3333V29.3333Z"
                fill="#fff"
              />
              <path
                d="M2.66669 6.66669C2.66669 4.45755 4.45755 2.66669 6.66669 2.66669V6.66669H2.66669Z"
                fill="#fff"
              />
              <path
                d="M2.66669 25.3333C2.66669 27.5425 4.45755 29.3333 6.66669 29.3333V25.3333H2.66669Z"
                fill="#fff"
              />
            </svg>
            <span className="text-lg font-semibold">Atithi Assist Chatbot</span>
          </div>
          <button
            className="text-gray-400 hover:text-gray-200 focus:outline-none"
            onClick={onClick}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-grow overflow-y-auto p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.type === "bot" ? "flex" : "flex justify-end"}
              >
                <div
                  className={`max-w-xs rounded-xl p-3 ${
                    message.type === "bot"
                      ? "rounded-tl-none bg-gray-200"
                      : "rounded-tr-none bg-[#F3CE5E]"
                  }`}
                >
                  <p className="text-sm text-gray-900">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Input */}
        <div className="flex items-center rounded-b-[2rem] border-t border-gray-300 bg-gray-100 px-4 py-3">
          <input
            type="text"
            placeholder="Type a message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full rounded-full border border-gray-300 bg-white px-4 py-2 focus:border-[#F3CE5E] focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="ml-3 rounded-full bg-[#F3CE5E] p-2 text-black hover:bg-[#d3b44c] focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </button>

          {/* Mic Button */}
          <button className="ml-3 rounded-full bg-[#F3CE5E] p-2 text-black hover:bg-[#d3b44c] focus:outline-none">
            <Mic />
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      <div
        className="fixed left-0 top-0 z-[5] h-full w-full bg-overlay-black backdrop-blur-sm"
        onClick={onClick}
      ></div>
    </>
  );
}

export default ChatWindow;
