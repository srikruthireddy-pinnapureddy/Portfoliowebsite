import React, { useEffect, useRef } from 'react';

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let animationFrame = 0;

    const resizeCanvas = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);

      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * ratio;
      canvas.height = height * ratio;

      canvas.style.width = '100vw';
      canvas.style.height = '100vh';

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    resizeCanvas();

    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
    }> = [];

    const nodeCount = window.innerWidth < 640 ? 22 : 38;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.fillStyle = 'rgba(2, 8, 23, 0.12)';
      ctx.fillRect(0, 0, width, height);

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;

        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        // Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.65)';
        ctx.fill();

        // Connections
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);

            const opacity = Math.max(0, 0.3 - distance / 500);

            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      if (!reducedMotion) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        background: '#020817',
      }}
    />
  );
}