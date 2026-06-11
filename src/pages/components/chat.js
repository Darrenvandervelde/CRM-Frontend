import { useState } from 'react';
import './styles/chat.css';

function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, {
                id: Date.now(),
                text: inputValue,
                sender: 'user'
            }]);
            setInputValue('');
            
            // Simulate bot response
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    text: 'Thanks for your message! How can we help you?',
                    sender: 'bot'
                }]);
            }, 500);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <section>
            <button
                className="ChatBtn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle chat"
                title={isOpen ? 'Close chat' : 'Open chat'}
            >
                <i className="fi fi-br-menu-burger"></i>
            </button>

            <div className={`ChatContainer ${isOpen ? "open" : ""}`}>
                <div className="ChatHeader">
                    <img src='./assets/CompanyLogo.png' alt='Company Logo' />
                    <h3>Support Chat</h3>
                    <button 
                        className="CloseBtn"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close chat"
                    >
                        ✕
                    </button>
                </div>

                <div className="ChatMessages">
                    {messages.length === 0 ? (
                        <div className="ChatWelcome">
                            <p>👋 Welcome! How can we assist you?</p>
                        </div>
                    ) : (
                        messages.map(msg => (
                            <div 
                                key={msg.id}
                                className={msg.sender === 'bot' ? 'BotMessage' : 'UserMessage'}
                            >
                                {msg.text}
                            </div>
                        ))
                    )}
                </div>

                <div className="ChatInputArea">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />

                    <button 
                        className="SendBtn"
                        onClick={handleSendMessage}
                        aria-label="Send message"
                    >
                        <i className="fi fi-br-paper-plane"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Chat;
