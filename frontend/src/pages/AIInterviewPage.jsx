import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Mic, Send, ArrowLeft, Award, TrendingUp, Target, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EmployeeNavbar from '../components/EmployeeNavbar';
import Footer from '../components/Footer';
import './AIInterviewPage.css';

export default function AIInterviewPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState(null); // 'chat' or 'voice'
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [points, setPoints] = useState(0);

  const startInterview = (selectedMode) => {
    setMode(selectedMode);
    setStarted(true);
    
    // Initial AI greeting
    setTimeout(() => {
      setMessages([{
        role: 'ai',
        text: 'Hello! Welcome to your AI interview practice session. I\'m here to help you improve your interview skills. Let\'s start with a simple question: Can you tell me about yourself and your background?',
        timestamp: new Date()
      }]);
    }, 500);
  };

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        'That\'s a great answer! Your experience really shows. Now, can you describe a challenging project you worked on?',
        'Excellent! I can see you have strong problem-solving skills. How do you handle working under pressure?',
        'Impressive background! What are your key strengths that make you suitable for this role?',
        'Very good! Can you tell me about a time when you had to work with a difficult team member?'
      ];

      const aiMessage = {
        role: 'ai',
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);

      // End session after 5 exchanges
      if (messages.length >= 8) {
        setTimeout(() => endSession(), 2000);
      }
    }, 1500);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      // Start recording simulation
      setTimeout(() => {
        setIsRecording(false);
        const userMessage = {
          role: 'user',
          text: '[Voice response recorded]',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);

        // AI response
        setTimeout(() => {
          const aiMessage = {
            role: 'ai',
            text: 'Great response! Your tone and confidence are improving. Let\'s continue with the next question...',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, aiMessage]);
        }, 1000);
      }, 3000);
    }
  };

  const endSession = () => {
    setSessionComplete(true);
    
    // Calculate points and feedback
    const earnedPoints = Math.floor(Math.random() * 30) + 70;
    setPoints(earnedPoints);

    setFeedback({
      overallScore: earnedPoints,
      strengths: [
        'Clear and confident communication',
        'Good examples from past experience',
        'Positive attitude and enthusiasm'
      ],
      improvements: [
        'Try to structure answers using STAR method',
        'Provide more quantifiable achievements',
        'Practice maintaining eye contact'
      ],
      recommendations: [
        'Practice behavioral questions more',
        'Research common technical questions',
        'Work on your closing statement'
      ]
    });
  };

  const resetSession = () => {
    setMode(null);
    setStarted(false);
    setMessages([]);
    setSessionComplete(false);
    setFeedback(null);
    setPoints(0);
  };

  return (
    <div className="ai-interview-page">
      {/* Background */}
      <div className="ai-interview-bg">
        <div className="ai-interview-orb-1" />
        <div className="ai-interview-orb-2" />
      </div>

      {/* Particles - النقاط الصفراء */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <EmployeeNavbar />

      <div className="ai-interview-content">
        {/* Mode Selection */}
        {!started && !sessionComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mode-selection"
          >
            <h1 className="ai-interview-title">
              Choose Your Practice Mode
            </h1>
            <p className="ai-interview-subtitle">
              Practice with AI to improve your interview skills and build confidence
            </p>

            <div className="mode-cards">
              <motion.div
                className="mode-card"
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => startInterview('chat')}
              >
                <MessageSquare size={60} />
                <h3>Chat Mode</h3>
                <p>Text-based interview practice with instant feedback</p>
                <ul>
                  <li>✓ Type your answers</li>
                  <li>✓ Take your time</li>
                  <li>✓ Review responses</li>
                </ul>
                <button className="mode-btn">Start Chat Interview</button>
              </motion.div>

              <motion.div
                className="mode-card mode-card-voice"
                whileHover={{ scale: 1.05, y: -10 }}
                onClick={() => startInterview('voice')}
              >
                <Mic size={60} />
                <h3>Voice Mode</h3>
                <p>Speak your answers like a real interview</p>
                <ul>
                  <li>✓ Voice responses</li>
                  <li>✓ Natural conversation</li>
                  <li>✓ Tone analysis</li>
                </ul>
                <button className="mode-btn mode-btn-voice">Start Voice Interview</button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Interview Session */}
        {started && !sessionComplete && (
          <div className="interview-session">
            <div className="interview-header">
              <button onClick={resetSession} className="back-btn">
                <ArrowLeft size={20} /> Back
              </button>
              <div className="mode-indicator">
                {mode === 'chat' ? <MessageSquare size={20} /> : <Mic size={20} />}
                {mode === 'chat' ? 'Chat Mode' : 'Voice Mode'}
              </div>
            </div>

            <div className="messages-container">
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`message ${msg.role}`}
                  >
                    <div className="message-avatar">
                      {msg.role === 'ai' ? '🤖' : '👤'}
                    </div>
                    <div className="message-content">
                      <p>{msg.text}</p>
                      <span className="message-time">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {mode === 'chat' && (
              <div className="input-container">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your answer here..."
                  className="message-input"
                />
                <button onClick={sendMessage} className="send-btn">
                  <Send size={20} />
                </button>
              </div>
            )}

            {mode === 'voice' && (
              <div className="voice-controls">
                <motion.button
                  onClick={toggleRecording}
                  className={`record-btn ${isRecording ? 'recording' : ''}`}
                  animate={isRecording ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  <Mic size={32} />
                  {isRecording ? 'Recording...' : 'Hold to Speak'}
                </motion.button>
              </div>
            )}
          </div>
        )}

        {/* Feedback Section */}
        {sessionComplete && feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="feedback-section"
          >
            <div className="feedback-header">
              <Award size={60} className="award-icon" />
              <h1>Session Complete! 🎉</h1>
              <p>Here's your performance analysis</p>
            </div>

            <div className="score-display">
              <div className="score-circle-large">
                <svg viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    style={{
                      strokeDasharray: `${feedback.overallScore * 3.39}, 339`,
                    }}
                  />
                </svg>
                <div className="score-content">
                  <span className="score-num">{feedback.overallScore}</span>
                  <span className="score-max">/100</span>
                </div>
              </div>
              <div className="points-earned">
                <TrendingUp size={24} />
                <span>+{points} Points Earned!</span>
              </div>
            </div>

            <div className="feedback-grid">
              <div className="feedback-card">
                <div className="feedback-card-header">
                  <CheckCircle size={24} />
                  <h3>Your Strengths</h3>
                </div>
                <ul>
                  {feedback.strengths.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="feedback-card">
                <div className="feedback-card-header">
                  <Target size={24} />
                  <h3>Areas to Improve</h3>
                </div>
                <ul>
                  {feedback.improvements.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="feedback-card full-width">
                <div className="feedback-card-header">
                  <TrendingUp size={24} />
                  <h3>Recommendations</h3>
                </div>
                <ul>
                  {feedback.recommendations.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="feedback-actions">
              <button onClick={resetSession} className="try-again-btn">
                Practice Again
              </button>
              <button onClick={() => navigate('/employee-home')} className="home-btn">
                Back to Home
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  );
}
