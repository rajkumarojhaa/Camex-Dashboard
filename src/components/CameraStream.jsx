import React, { useEffect, useRef, useState } from 'react';

const CameraStream = ({ wsUrl }) => {
  const imgRef = useRef(null);
  const wsRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('[DEBUG] Connecting to:', wsUrl);
    if (!wsUrl) return;

    let ws;

    try {
      ws = new WebSocket(wsUrl);
      ws.binaryType = 'arraybuffer';
      wsRef.current = ws;
    } catch (e) {
      console.error(`[WS] Failed to construct WebSocket for ${wsUrl}`, e);
      setError('Could not initialize stream.');
      return;
    }


    ws.onopen = () => {
      console.log(`[WS] Connected to ${wsUrl}`);
      setError(null);
    };

    ws.onclose = (e) => {
      console.log(`[WS] Disconnected from ${wsUrl}`);
      console.log('Close code:', e.code, 'Reason:', e.reason, 'WasClean:', e.wasClean);
      setError('Connection closed.');
    };
    

    ws.onerror = (err) => {
      console.error(`[WS] Error on ${wsUrl}`, err);
      setError('WebSocket connection error.');
    };

    ws.onmessage = (event) => {
      const blob = new Blob([event.data], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);
      if (imgRef.current) {
        imgRef.current.src = imageUrl;
      }
      setTimeout(() => URL.revokeObjectURL(imageUrl), 100);
    };

    return () => {
      console.log(`[WS] Cleaning up connection to ${wsUrl}`);
      ws.close();
    };
  }, [wsUrl]);

  return error ? (
    <div style={{ color: 'red', padding: '1rem', textAlign: 'center' }}>
      🔴 Stream error: {error}
    </div>
  ) : (
    <img
      ref={imgRef}
      alt="Live stream"
      style={{
        width: '100%',
        height: 'auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        objectFit: 'cover',
      }}
    />
  );
};

export default CameraStream;
