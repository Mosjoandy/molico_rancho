import { useRef, useEffect, useState } from "react";

export function Canvas(props) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  var drawing = false;
  var prevX, prevY;
  var currX, currY;
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    contextRef.current = ctx;

  }, []);

  function start(e) {
    setIsDrawing(true);
  }

  function stop() {
    setIsDrawing(false);
    prevX = prevY = null;
    props.signature({ ...props.formData, formSignature: canvasRef.current.toDataURL() })
  }

  function draw(e) {
    if (!isDrawing) {
      return;
    }
    // Test for touchmove event, this requires another property.
    var clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
    var clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
    let bounds = canvasRef.current.getBoundingClientRect()
    currX = clientX - bounds.x;
    currY = clientY - bounds.y;
    if (!prevX && !prevY) {
      prevX = currX;
      prevY = currY;
    }
    contextRef.current.beginPath();
    contextRef.current.moveTo(prevX, prevY);
    contextRef.current.lineTo(currX, currY);
    contextRef.current.stroke();
    contextRef.current.closePath();

    prevX = currX;
    prevY = currY;
  }

  return (
    <canvas
      className="signature"
      ref={canvasRef}
      onMouseDown={start}
      onMouseMove={draw}
      onMouseUp={stop}
      onMouseLeave={stop}
      onTouchStart={start}
      onTouchMove={draw}
      onTouchEnd={stop}
      width="500px"
      height="100px"
    />
  );
}

export default Canvas;
