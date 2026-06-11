import { useState } from 'react';
import './styles/chat.css';

function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <section>
            <div className={`ChatContainer ${isOpen ? 'open' : ''}`}>
                Chat Content
            </div>

            <button
                className="ChatBtn"
                onClick={() => setIsOpen(!isOpen)}
            >
                <i className="fi fi-br-menu-burger"></i>
            </button>

            <div className={`ChatContainer ${isOpen ? "open" : ""}`}>
                <div className="ChatHeader">
                    <img src='./assets/CompanyLogo.png'/>
                    <h3>Chat</h3>
                </div>

                <div className="ChatMessages">
                    {/*<div className="BotMessage">
                        Hello! How can I help you today?
                    </div>

                    <div className="UserMessage">
                        Show me my projects.
                    </div>*/}
                </div>

                <div className="ChatInputArea">
                    <input
                        type="text"
                        placeholder="Type a message..."
                    />

                    <button className="SendBtn">
                        <i className="fi fi-br-paper-plane"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Chat;