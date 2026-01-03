import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Auto-open after delay to be "active"
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpened) {
        setIsOpen(true);
        setHasOpened(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [hasOpened]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleWhatsAppChat = () => {
    // Open WhatsApp with a pre-filled message
    window.open("https://wa.me/918220333477?text=Hi%2C%20I'm%20interested%20in%20fresh%20microgreens%21", "_blank");
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300 z-50 animate-bounce hover:animate-none"
          aria-label="Open support chat"
        >
          <MessageCircle className="h-8 w-8 text-white" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        </Button>
      )}

      {/* "Crisp" Chat Widget */}
      {isOpen && (
        <div ref={widgetRef} className="fixed bottom-6 right-6 w-[350px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 ring-1 ring-black/5">

          {/* Header */}
          <div className="bg-[#075E54] p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />
            <div className="flex justify-between items-start relative z-10">
              <div>
                <h3 className="font-bold text-xl mb-1">Mikrogreenz Global Support</h3>
                <p className="text-white/80 text-sm">Typically replies instantly</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 bg-slate-50 min-h-[200px] flex flex-col gap-4">
            <div className="bg-white p-4 rounded-xl rounded-tl-none shadow-sm border border-slate-100 text-slate-700 text-sm leading-relaxed">
              Hi there! 👋 <br /><br />
              Welcome to Mikrogreenz Global. Looking for fresh, nutrient-rich greens? We're here to help you grow healthy! 🌿
            </div>
            <p className="text-xs text-center text-slate-400 mt-auto">Powered by Freshness</p>
          </div>

          {/* Footer CTA */}
          <div className="p-4 bg-white border-t border-slate-100">
            <Button
              onClick={handleWhatsAppChat}
              className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>

        </div>
      )}
    </>
  );
};

export default ChatBot;
