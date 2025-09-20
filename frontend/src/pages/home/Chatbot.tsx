import React, { useState, useEffect, useRef } from 'react';
import legalklarityLogo from "../../assets/legalklarity-logo.svg"
import { geminiKey } from '../../utils/baseApi';

// Define the shape of a message object
interface Message {
    text: string;
    sender: 'user' | 'bot';
    isTyping?: boolean;
    citations?: { uri: string; title: string }[];
}

const Chatbot: React.FC = () => {
    // State to control chatbot visibility
    const [isOpen, setIsOpen] = useState(false);
    
    // State to hold the conversation messages
    const [messages, setMessages] = useState<Message[]>([
        {
            text: 'Hello! I am Klarity, your AI legal assistant. How can I help you with your legal questions today?',
            sender: 'bot',
        },
    ]);
    const [input, setInput] = useState(''); // State for the user's input field
    const chatContainerRef = useRef<HTMLDivElement>(null); // Ref to the chat container for scrolling

    // Effect to scroll to the bottom whenever a new message is added
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    // Function to handle sending a message
    const sendMessage = async () => {
        const userMessageText = input.trim();
        if (!userMessageText) return;

        // 1. Dynamically add the user's message
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: userMessageText, sender: 'user' },
        ]);
        setInput(''); // Clear the input field

        // 2. Show a "typing" indicator for the bot
        const typingMessage: Message = { text: '', sender: 'bot', isTyping: true };
        setMessages((prevMessages) => [...prevMessages, typingMessage]);

        try {
            // Get API key from environment variables
            if (!geminiKey) {
                console.error('Gemini API key is not set. Please check your .env file.');
                throw new Error('API key is not configured');
            }
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${geminiKey}`;

            const systemPrompt = "Act as an expert in legal topics, with a focus on providing detailed and comprehensive answers. If a query is unrelated to law, start by reading whether the user is a student, a startup owner, or a citizen, and respond accordingly to their further questions. Politely inform the user that you can only assist with legal topics and recommend that they consult another resource for their specific question. If necessary, remind the user that you are not a lawyer and cannot provide legal advice. Provide answers in approximately 75 words.";

            const payload = {
                contents: [{ parts: [{ text: userMessageText }] }],
                tools: [{ "google_search": {} }],
                systemInstruction: { parts: [{ text: systemPrompt }] },
            };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            const candidate = result.candidates?.[0];
            const botResponseText = candidate?.content?.parts?.[0]?.text || 'Sorry, I couldn\'t generate a response. Please try again.';

            // 3. Add citations if available
            const groundingMetadata = candidate?.groundingMetadata;
            let sources: { uri: string; title: string }[] = [];
            if (groundingMetadata && groundingMetadata.groundingAttributions) {
                sources = groundingMetadata.groundingAttributions
                    .map((attribution: any) => ({
                        uri: attribution.web?.uri,
                        title: attribution.web?.title,
                    }))
                    .filter(
                        (source: { uri: any; title: any }) =>
                            source.uri && source.title
                    );
            }

            // Remove the typing message and add the actual bot response with citations
            setMessages((prevMessages) => {
                const newMessages = [...prevMessages];
                newMessages.pop(); // Remove the typing indicator
                newMessages.push({
                    text: botResponseText,
                    sender: 'bot',
                    citations: sources,
                });
                return newMessages;
            });
        } catch (error) {
            console.error('API Error:', error);
            // In case of an error, remove typing and show an error message
            setMessages((prevMessages) => {
                const newMessages = [...prevMessages];
                newMessages.pop();
                newMessages.push({
                    text: 'An error occurred. Please try again.',
                    sender: 'bot',
                });
                return newMessages;
            });
        }
    };

    // Handle Enter key press
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <>
            {/* Floating chat button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-12 h-12 sm:w-14 sm:h-14 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-50 dark:bg-indigo-700 dark:hover:bg-indigo-600"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <img 
                        src={legalklarityLogo} 
                        alt="LegalKlarity Chat"
                        className="w-8 h-8 object-contain"
                    />
                )}
            </button>

            {/* Chat window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-[85vw] h-[70vh] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] max-w-lg min-w-[280px] min-h-[400px] max-h-[600px] z-50">
                    <div className="bg-white rounded-2xl shadow-xl flex flex-col h-full dark:bg-slate-800 dark:shadow-slate-900/50">
                        {/* Header */}
                        <div className="bg-indigo-600 text-white p-3 rounded-t-2xl shadow-md flex items-center justify-between">
                            <div className="flex items-center">
                                <img 
                                    src={legalklarityLogo} 
                                    alt="LegalKlarity Logo"
                                    className="h-8 w-8 mr-2 object-contain"
                                />
                                <h1 className="text-lg font-bold">Klarity</h1>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-indigo-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Disclaimer */}
                        <div className="p-2 bg-indigo-50 text-gray-700 rounded-lg text-xs m-2 border border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-200 dark:border-indigo-800">
                            <p className="font-bold text-indigo-700 dark:text-indigo-300">Disclaimer:</p>
                            <p>
                                The information provided is for general knowledge only and should not
                                be considered legal advice. 
                            </p>
                        </div>

                        {/* Chat Messages */}
                        <div
                            ref={chatContainerRef}
                            className="flex-grow p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3 overflow-y-auto scroll-smooth"
                        >
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${
                                        msg.sender === 'user' ? 'justify-end' : 'justify-start'
                                    }`}
                                >
                                    <div
                                        className={`message-bubble max-w-[80%] p-2 text-sm rounded-2xl relative ${
                                            msg.sender === 'user'
                                                ? 'bg-indigo-100 text-gray-800 rounded-br-sm dark:bg-indigo-900/50 dark:text-white'
                                                : 'bg-gray-100 text-gray-800 rounded-bl-sm dark:bg-slate-700 dark:text-white'
                                        }`}
                                    >
                                        {msg.isTyping ? (
                                            <span className="typing-indicator-container">
                                                <span className="dot-flashing bg-gray-600 dark:bg-slate-400"></span>
                                            </span>
                                        ) : (
                                            <>
                                                <p className="whitespace-pre-line">
                                                    {msg.text.split('**').map((part, index) => {
                                                        // If it's an even index, it's regular text
                                                        // If it's an odd index, it's bold text
                                                        return index % 2 === 0 ? (
                                                            // Regular text: remove extra spaces
                                                            part.replace(/\s+/g, ' ')
                                                        ) : (
                                                            // Bold text: wrap in strong tag and remove extra spaces
                                                            <strong key={index} className="font-bold">
                                                                {part.replace(/\s+/g, ' ')}
                                                            </strong>
                                                        );
                                                    })}
                                                </p>
                                                {msg.citations && msg.citations.length > 0 && (
                                                    <div className="mt-2 text-xs text-gray-500 dark:text-slate-400">
                                                        Sources:{" "}
                                                        {msg.citations.map((source, idx) => (
                                                            <a
                                                                key={idx}
                                                                href={source.uri}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="underline hover:no-underline dark:text-indigo-300"
                                                            >
                                                                [{idx + 1}]
                                                                {new URL(source.uri).hostname}{" "}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-2 bg-gray-50 rounded-b-2xl border-t border-gray-200 dark:bg-slate-700 dark:border-slate-600">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-grow p-2 text-sm rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-white dark:bg-slate-600 dark:border-slate-500 dark:text-white dark:placeholder-slate-300"
                                    placeholder="Ask a legal question..."
                                />
                                <button
                                    onClick={sendMessage}
                                    className="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-all dark:bg-indigo-700 dark:hover:bg-indigo-600"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;