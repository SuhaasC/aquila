"use client";

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the static admin page
    window.location.href = '/admin/index.html';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Aquilastrat Admin</h1>
        <p>Loading Netlify CMS...</p>
      </div>
    </div>
  );
}
