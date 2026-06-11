import '../styles/about.css';

function Headers() {
    return (
        <section className="AboutContainer">
            <div className="AboutContent">
                <h1>About Our CRM System</h1>
                <p className="Subtitle">
                    Streamline your customer relationships with our modern CRM solution
                </p>

                <div className="AboutGrid">
                    <div className="AboutCard">
                        <div className="CardIcon">📊</div>
                        <h3>Analytics</h3>
                        <p>Get insights into customer behavior and business metrics with advanced analytics.</p>
                    </div>

                    <div className="AboutCard">
                        <div className="CardIcon">🤝</div>
                        <h3>Collaboration</h3>
                        <p>Work seamlessly with your team through integrated communication tools.</p>
                    </div>

                    <div className="AboutCard">
                        <div className="CardIcon">⚙️</div>
                        <h3>Automation</h3>
                        <p>Automate repetitive tasks to focus on building meaningful relationships.</p>
                    </div>

                    <div className="AboutCard">
                        <div className="CardIcon">🔐</div>
                        <h3>Security</h3>
                        <p>Your data is protected with enterprise-grade security measures.</p>
                    </div>
                </div>

                <div className="AboutMission">
                    <h2>Our Mission</h2>
                    <p>
                        To empower businesses of all sizes with a modern, intuitive CRM platform 
                        that enables them to build stronger customer relationships and drive sustainable growth.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Headers;
