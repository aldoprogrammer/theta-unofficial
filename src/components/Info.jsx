export function Info() {
    return (
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 container mx-auto px-8 py-10 lg:py-28">
        <div>
          <div className="text-8xl">Video Uploading site</div>
          <div className="p-8">
            A new way to watch contents and upload and videos are sensored for
            users{" "}
          </div>
        </div>
        <img
          className="h-96 w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1605106325682-3482f7c1c9c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoYXBlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="No image"
        />
      </div>
    );
  }
  
  export default Info;
  