import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const ZoomImageSection = ({image}) => {
  const sectionRef = useRef(null)
  const mediaRef = useRef(null)
  const [mediaAspectRatio, setMediaAspectRatio] = useState(1)
  const isInView = useInView(sectionRef, { amount: 0.1, once: false })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"]
  })
  
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 0.99])

  const isVideo = image && (image.includes('.mp4') || image.includes('.webm') || image.includes('.ogg'))

  useEffect(() => {
    if (isVideo) {
      // For videos, we'll set a default aspect ratio or calculate it when loaded
      const video = document.createElement('video')
      video.src = image
      video.onloadedmetadata = () => {
        setMediaAspectRatio(video.videoWidth / video.videoHeight)
      }
      // Set a default aspect ratio for videos (16:9)
      setMediaAspectRatio(16/9)
    } else {
      const img = new Image()
      img.src = image
      img.onload = () => {
        setMediaAspectRatio(img.width / img.height)
      }
    }
  }, [image, isVideo])

  return (
    <section 
      ref={sectionRef}
      className="max-h-screen relative overflow-hidden py-4 px-2"
    >
      <div className="w-full h-full overflow-hidden">
        <motion.div
          ref={mediaRef}
          className="w-full h-full"
          initial={{ scale: 1 }}
          style={{ 
            scale: isInView ? scale : 1.19,
            height: `calc(100vw / ${mediaAspectRatio})`,
            maxHeight: '100vh',
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-full w-screen ">
            {isVideo ? (
              <video
                src={image}
                alt="Media content"
                className="w-full h-full object-contain"
                controls={false}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={image}
                alt="Watercolor landscape painting showing a serene beach scene"
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ZoomImageSection

