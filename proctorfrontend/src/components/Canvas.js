import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  console.log(props)
  const canvasRef = useRef(null)
  //let element = document
  //console.log(element)
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#A0A0A0'
    ctx.beginPath()
    
    ctx.font = "20px Arial";
  var txtHeight = 25;
  var offset = 5;
  var w = Math.ceil(ctx.measureText(txt).width);
  var txt = props.name
  var txt = new Array(5 * 2).join(txt + props.name); //change the multipler for more lines
  for (var i = 0; i < Math.ceil(ctx.canvas.height / txtHeight); i++) {
    ctx.fillText(txt, -(i * offset), i * txtHeight);
  }
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} width={1200} height={1200}  {...props}/>
}

export default Canvas