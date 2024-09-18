import { Mic } from "lucide-react";
import { useState } from "react";

function ChatWindow({ onClick }) {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi. Welcome to Atithi Assist. How may i help you?" },
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
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v1m0 10v1m7-7h1M4 12H3m12.828-7.828l.707.707M6.343 17.657l-.707-.707M16.95 16.95l.707.707M6.343 6.343l-.707-.707"
              ></path>
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
        className="bg-overlay-black fixed left-0 top-0 z-[5] h-full w-full backdrop-blur-sm"
        onClick={onClick}
      ></div>
    </>
  );
}

export default ChatWindow;
