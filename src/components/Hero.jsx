import { useEffect, useRef, useState } from 'react'
import Nav from './Nav'

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [animationStarted, setAnimationStarted] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [audioPlayedOnce, setAudioPlayedOnce] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setVideoLoaded(true)
        setTimeout(() => setAnimationStarted(true), 500) // Delay the start of text animations
      })
    }
  }, [])

  const handleUnmute = async () => {
    if (!videoRef.current) return
    try {
      // Unmute and attempt to play; browsers require user interaction to play with sound
      videoRef.current.muted = false
      setIsMuted(false)
      setAudioPlayedOnce(true)
      await videoRef.current.play()
    } catch (err) {
      // If play fails, keep muted and log (user can try again)
      console.warn('Playback with sound failed:', err)
    }
  }

  // If audio has been played once, mute again at the end of the first playback.
  useEffect(() => {
    if (!videoRef.current || !audioPlayedOnce) return
    const vid = videoRef.current

    const onTimeUpdate = () => {
      if (!vid.duration) return
      // When we reach the end (small epsilon), mute and stop listening
      if (vid.currentTime >= vid.duration - 0.25) {
        vid.muted = true
        setIsMuted(true)
        vid.removeEventListener('timeupdate', onTimeUpdate)
      }
    }

    vid.addEventListener('timeupdate', onTimeUpdate)
    return () => vid.removeEventListener('timeupdate', onTimeUpdate)
  }, [audioPlayedOnce])

  const getAnimationClass = (delay) => {
    return `transition-all duration-1000 ease-out ${
      animationStarted
        ? 'translate-y-0 opacity-100'
        : 'translate-y-6 opacity-0'
    } ${delay}`
  }

  return (
    <div className="relative h-screen w-full pt-10 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://video.wixstatic.com/video/0af55b_dd539a6613f2475b9956aa7598766620/1080p/mp4/file.mp4" type="video/mp4" />
      </video>
      {/* Unmute button - shows when video has loaded and is muted */}
      {videoLoaded && isMuted && (
        <button
          onClick={handleUnmute}
          aria-label="Unmute background video"
          className="absolute bottom-6 right-6 z-20 bg-[#171717]/40 hover:bg-[#171717]/50 text-white p-3 rounded-full backdrop-blur"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 5a1 1 0 00-1 1v8a1 1 0 001 1h.586l3.707 3.707A1 1 0 0014 18V2a1 1 0 00-1.707-.707L9.586 5H9z" />
            <path d="M15.536 4.464a6 6 0 010 8.485" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#171717]/40" />
      
      {/* Navigation */}
      <Nav />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 md:px-8 pt-24 sm:pt-16">
          <h1 className={`text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] leading-none tracking-tighter font-medium font-grand max-w-full ${getAnimationClass('delay-300')}`}>
KOPPER FLAME <span className="text-[#FF5E1A]">STUDIO</span>
          </h1>
        </div>
        
        <div className="max-w-[2000px] mx-auto w-full px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-6">
          <span className={`text-white text-base sm:text-lg ${getAnimationClass('delay-500')}`}>
          India/Mumbai
          </span>
          <p className={`text-white max-w-md text-base sm:text-lg ${getAnimationClass('delay-700')}`}>
          A collaborative marketing partner dedicated to revitalizing businesses by strengthening their marketability.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero

