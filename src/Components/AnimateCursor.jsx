import AnimatedCursor from "react-animated-cursor"

const AnimateCursor = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={7}
        outerSize={35}
        color='0,0,0'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </div>
  )
}

export default AnimateCursor