import classes from './BackgroundVideo.module.css'

const videoSource = 'https://user-images.githubusercontent.com/122247155/267494885-d35ecedb-8f66-4801-8585-8bd9e7072120.mp4'


const BackgroundVideo = () => {

  return (
    <div className={classes.container}>
      <video autoPlay="autoplay" loop="loop" muted className="background-video">
        <source src={videoSource} type="video/mp4" />

      </video>
    </div>
  )
}

export default BackgroundVideo