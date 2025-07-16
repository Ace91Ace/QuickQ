import React, { useEffect, useState } from 'react';

function App() {
  const [queue, setQueue] = useState([]);

  // Fetch queue list from backend (we'll add this endpoint soon)
  useEffect(() => {
    const fetchQueue = () => {
      fetch('https://smartqueue-backend-17gx.onrender.com/queue/list')
        .then(res => res.json())
        .then(setQueue)
        .catch(() => setQueue([]));
    };
    fetchQueue();
    const interval = setInterval(fetchQueue, 2000); // Poll every 2 seconds
    return () => clearInterval(interval);
  }, []);

  function handleAction(action, token) {
    fetch(`https://smartqueue-backend-17gx.onrender.com/queue/${action}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })
      .then(() => {
        // Refresh queue after action
        fetch('https://smartqueue-backend-17gx.onrender.com/queue/list')
          .then(res => res.json())
          .then(setQueue);
      });
  }

  // Split tokens
  const activeTokens = queue.filter(entry => entry.status !== "served");
  const servedTokens = queue.filter(entry => entry.status === "served");

  return (
    <div style={{ padding: 32 }}>
      <h1>SmartQueue Admin Dashboard</h1>
      {/* Active Tokens Table */}
      <h2>Active Queue</h2>
      <table border="1" cellPadding="8" style={{ width: '100%', marginTop: 24 }}>
        <thead>
          <tr>
            <th>Token</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {activeTokens.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No active tokens</td>
            </tr>
          ) : (
            activeTokens.map((entry) => (
              <tr key={entry.token}>
                <td>{entry.token}</td>
                <td>{entry.name}</td>
                <td>{entry.status}</td>
                <td>
                  {entry.status === "waiting" && (
                    <>
                      <button onClick={() => handleAction('serve', entry.token)}>Serve</button>
                      <button onClick={() => handleAction('skip', entry.token)}>Skip</button>
                    </>
                  )}
                  {entry.status === "skipped" && (
                    <button onClick={() => handleAction('resume', entry.token)}>Resume</button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Served Tokens Table */}
      <h2 style={{ marginTop: 40 }}>Served Tokens (Log)</h2>
      <table border="1" cellPadding="8" style={{ width: '100%', marginTop: 8 }}>
        <thead>
          <tr>
            <th>Token</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {servedTokens.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>No served tokens</td>
            </tr>
          ) : (
            servedTokens.map((entry) => (
              <tr key={entry.token}>
                <td>{entry.token}</td>
                <td>{entry.name}</td>
                <td>{entry.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
