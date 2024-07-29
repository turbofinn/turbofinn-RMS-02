import React, { useRef, useEffect, useState } from 'react';

const Camera = ({ onSnapshotTaken }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const currentStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = currentStream;
        setStream(currentStream);
      } catch (err) {
        console.error("Error accessing the camera: ", err);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  const takeSnapshot = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob((blob) => {
      const file = new File([blob], 'snapshot.png', { type: 'image/png' });
      onSnapshotTaken(file);
    }, 'image/png');
  };

  return (
    <div>
      <video ref={videoRef} autoPlay style={{ width: '100%' }} />
      <button onClick={takeSnapshot}>Take Snapshot</button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default Camera;
