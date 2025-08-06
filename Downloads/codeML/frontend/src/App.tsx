import React from 'react';
import './App.css';
import { clearDemoData, hasDemoData, resetApplication } from './utils/clearDemoData';

function App() {
  const handleClearData = () => {
    const success = clearDemoData();
    if (success) {
      alert('Demo data cleared successfully!');
    } else {
      alert('Failed to clear demo data.');
    }
  };

  const handleCheckData = () => {
    const hasData = hasDemoData();
    alert(hasData ? 'Demo data exists' : 'No demo data found');
  };

  const handleResetApp = () => {
    if (window.confirm('Are you sure you want to reset the entire application?')) {
      resetApplication();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>DataCode</h1>
        <p>A comprehensive LeetCode-style platform for ML/AI learning and practice</p>
      </header>
      
      <main className="App-main">
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>✅ Coding Challenges: ML fundamentals, Deep Learning, Gen AI/LLMs/MLOps</li>
            <li>✅ Research Integration: State-of-the-art papers and talks</li>
            <li>✅ Cloud Services: Integration with various platforms</li>
            <li>✅ Learning Ecosystem: Complete educational content</li>
          </ul>
        </section>

        <section className="demo-controls">
          <h2>Demo Controls</h2>
          <div className="button-group">
            <button onClick={handleCheckData} className="btn btn-info">
              Check Demo Data
            </button>
            <button onClick={handleClearData} className="btn btn-warning">
              Clear Demo Data
            </button>
            <button onClick={handleResetApp} className="btn btn-danger">
              Reset Application
            </button>
          </div>
        </section>

        <section className="coming-soon">
          <h2>Coming Soon</h2>
          <p>🚀 Full ML/AI challenge platform</p>
          <p>📚 Research paper integration</p>
          <p>☁️ Cloud deployment options</p>
          <p>🎯 Personalized learning paths</p>
        </section>
      </main>

      <footer className="App-footer">
        <p>Built with ❤️ by Bhargav Chirumamilla</p>
        <p>
          <a href="https://github.com/Chirumamilla1522/DataCode" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App; 