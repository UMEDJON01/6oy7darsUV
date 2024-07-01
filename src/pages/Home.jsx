function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="../video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-5xl text-white mb-4">Welcome</h1>
        <p className="text-xl text-white">Your content here</p>
      </div>
    </div>
  );
}

export default Home;
