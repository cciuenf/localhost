import React from "react";
import Image from "next/image";

export const TeacherCard = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <Image
          src="https://api.lorem.space/image/movie?w=200&h=280"
          alt="Movie"
          width={200}
          height={280}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};
