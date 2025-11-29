"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";
import Image from "next/image";
import { getAllServices } from "@/lib/services";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
  isService?: boolean;
  serviceTitle?: string;
}

export function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! 👋 Welcome to Techpotli Digital. I'm here to help you choose the perfect service for your business. Please select a service from the options below:",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const services = getAllServices();

  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isMinimized]);

  const handleServiceClick = (service: { title: string; slug: string }) => {
    setSelectedService(service.slug);
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: service.title,
      sender: "user",
      timestamp: new Date(),
      isService: true,
      serviceTitle: service.title,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Add bot response after a short delay
    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Thank you for choosing Techpotli! 🙏\n\nYou've selected: *${service.title}*\n\nNow you will be redirected to WhatsApp with our team to discuss your requirements in detail.`,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);

      // Redirect to WhatsApp after 2 seconds
      setTimeout(() => {
        const whatsappMessage = encodeURIComponent(
          `Hello! I'm interested in *${service.title}* service from Techpotli Digital.\n\nCould you please provide more information about this service and discuss how it can help my business?`
        );
        window.open(`https://wa.me/919810659666?text=${whatsappMessage}`, "_blank");
      }, 2000);
    }, 1500);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    // Reset chat when closed
    setTimeout(() => {
      setMessages([
        {
          id: "1",
          text: "Hello! 👋 Welcome to Techpotli Digital. I'm here to help you choose the perfect service for your business. Please select a service from the options below:",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setSelectedService(null);
    }, 300);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-teal-500/50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col bg-white shadow-2xl transition-all duration-300 ${
            isMinimized
              ? "h-16 w-[calc(100vw-2rem)] sm:w-80 rounded-t-2xl"
              : "h-[600px] w-[calc(100vw-2rem)] max-w-[420px] rounded-2xl sm:h-[650px]"
          }`}
          style={{
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 px-4 py-3 rounded-t-2xl">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="relative h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                <Image
                  src="/New_Techpotli_Logo_(2)[2].png"
                  alt="Techpotli Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm truncate">
                  Techpotli Digital
                </h3>
                <p className="text-teal-100 text-xs">
                  {isMinimized ? "Click to expand" : "Online • Usually replies instantly"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:text-teal-100 transition-colors p-1"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${isMinimized ? "rotate-180" : ""}`}
                />
              </button>
              <button
                onClick={handleClose}
                className="text-white hover:text-teal-100 transition-colors p-1"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          {!isMinimized && (
            <div className="flex-1 overflow-y-auto bg-[#e5ddd5] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgMTAgMTAgTSAxMCAwIEwgMTAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q1ZGRkNSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      message.sender === "user"
                        ? "bg-[#dcf8c6] text-gray-800"
                        : "bg-white text-gray-800 shadow-sm"
                    }`}
                    style={{
                      borderRadius:
                        message.sender === "user"
                          ? "7.5px 0 7.5px 7.5px"
                          : "0 7.5px 7.5px 7.5px",
                    }}
                  >
                    <p className="text-sm whitespace-pre-wrap break-words">
                      {message.text}
                    </p>
                    <span className="text-[10px] text-gray-500 mt-1 block text-right">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </div>
              ))}

              {/* Service Options */}
              {!selectedService && (
                <div className="space-y-2 mt-4 px-2">
                  <p className="text-xs text-gray-600 mb-3 font-medium">
                    Select a service:
                  </p>
                  <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                    {services.map((service) => (
                      <button
                        key={service.slug}
                        onClick={() => handleServiceClick(service)}
                        className="w-full text-left bg-white hover:bg-teal-50 border border-teal-200 rounded-lg px-4 py-3 transition-all duration-200 shadow-sm hover:shadow-md group active:scale-[0.98]"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-medium text-gray-800 group-hover:text-teal-600 flex-1">
                            {service.title}
                          </span>
                          <Send className="h-4 w-4 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                          {service.tagline}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg px-3 py-2 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      )}
    </>
  );
}

