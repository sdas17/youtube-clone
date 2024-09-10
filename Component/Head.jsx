
const Head = () => {
  return (
    <div className=" grid grid-flow-col">
        <div className="flex">
            <img alt="menu" 
            className="h-12 m-2 p-2"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII=">
            </img>
            <img alt="youtube-logo"             className="h-12 m-2 p-2"
 src="data:image/png;base64,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"></img>
        </div>
      

        <div>
         <input type="search" ></input>
         <button>Search</button>
        </div>
        {/* profile icon */}
        <div>
        <img             className="h-12 m-2 p-2"
src="https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png" alt="profilelog"></img>
        </div>

    </div>
  )
}

export default Head