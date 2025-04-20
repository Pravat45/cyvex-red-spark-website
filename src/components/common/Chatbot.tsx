
import { useState, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: "Hi there! I'm the Cyvex Labs virtual assistant. How can I help you today?",
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        text: message,
        isBot: false,
        timestamp: new Date(),
      },
    ]);
    setMessage("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! One of our representatives will get back to you shortly. If you'd like immediate assistance, please call us at (984) 382-3218.",
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-cyvex text-white p-4 rounded-full shadow-lg hover:bg-cyvex-dark transition-colors z-40"
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 w-[350px] max-h-[500px] bg-white rounded-lg shadow-xl z-50 transition-all duration-300 flex flex-col",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-cyvex text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare size={20} />
            <h3 className="font-medium">Cyvex Labs Chat</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[350px]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={cn(
                "max-w-[80%] p-3 rounded-lg",
                msg.isBot
                  ? "bg-gray-100 text-gray-800 self-start"
                  : "bg-cyvex text-white self-end ml-auto"
              )}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <Button 
              className="bg-cyvex hover:bg-cyvex-dark" 
              onClick={handleSendMessage}
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
