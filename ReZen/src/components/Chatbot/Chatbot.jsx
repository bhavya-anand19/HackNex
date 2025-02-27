import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Card from "./Card";
import MessageBubble from "./MessageBubble";
import { Send } from "lucide-react";
import chatbotIcon from "../../assets/chatbot_icon.png";
import "../../index.css";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");
    setLoading(true);

    // Show a "Thinking..." message
    setMessages((prev) => [...prev, { text: "Thinking...", sender: "bot" }]);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a helpful AI assistant." },
              ...messages.map((msg) => ({
                role: msg.sender === "bot" ? "assistant" : "user",
                content: msg.text,
              })),
              { role: "user", content: input },
            ],
          }),
        }
      );

      const data = await response.json();
      const aiResponse =
        data.choices[0]?.message?.content || "I couldn't understand that.";

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { text: aiResponse, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { text: "Error processing request.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-opacity-40 backdrop-blur-lg">
      <Card className="w-full max-w-lg flex flex-col bg-gray-800 shadow-xl rounded-2xl border-[#f0703a] p-4">
        <div className="bg-[#f0703a] text-white text-2xl font-bold mb-2 p-6 rounded-t-xl text-center">
          Talk to our AI Assistant
        </div>
        <div className="flex-grow overflow-y-auto px-4 py-8 space-y-3 no-scrollbar">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end ${
                msg.sender === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              {msg.sender === "bot" && (
                <img src={chatbotIcon} alt="Bot" className="w-12 h-12 mr-2" />
              )}
              <MessageBubble
                text={msg.text}
                sender={msg.sender}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg max-w-xs"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center px-3 py-5 border-t border-gray-600 bg-gray-700 bg-opacity-50 rounded-b-xl">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow bg-gray-800 text-white rounded-lg px-4 py-2 border-none focus:ring-2 focus:ring-[#f0703a]"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            disabled={loading}
          />
          <Button
            onClick={sendMessage}
            className="ml-2 bg-[#f0703a] hover:bg-[#d65924] p-3 rounded-lg"
            disabled={loading}
          >
            {loading ? "..." : <Send size={20} />}
          </Button>
        </div>
      </Card>
    </div>
  );
}
