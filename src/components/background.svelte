<script>
  import { onMount } from "svelte";

  export let imageUrl = "https://example.com/image.png";
  export let yOffset = 0;
  export let className = '';

  const randomThing = Math.floor(Math.random() * 30000)

  onMount(() => {
    // Load the image and update the URL when it's loaded
    const img = new Image();
    img.onload = () => {
      imageUrl = img.src;
    };
    img.src = imageUrl;
  });
</script>

<svg
  width="226"
  height="100"
  viewBox="0 0 345 154"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  class={className}
>
  <path
    d="M0.5 14.5V79H36.3976C37.0064 79 37.5 79.4936 37.5 80.1024V89.3477C37.5 91.6508 35.6422 93.5273 33.3394 93.5612C16.8241 93.8041 3.5 107.262 3.5 123.779C3.5 140.47 17.0692 154 33.7595 154C45.2301 154 55.7404 147.519 60.8702 137.26L63 133L75.0837 138.516C82.2772 141.8 90.0924 143.5 98 143.5C133.622 143.5 162.5 114.622 162.5 79H266C309.354 79 344.5 43.8544 344.5 0.5H14.5C6.76801 0.5 0.5 6.76801 0.5 14.5Z"
    fill="url(#pattern{randomThing})"
  />
  <defs>
    <pattern
      id="pattern{randomThing}"
      patternContentUnits="objectBoundingBox"
      width="1"
      height="1"
    >
      <use
        xlink:href="#image{randomThing + 1}"
        transform="matrix(0.000520833 0 0 0.00116721 0 -0.130293)"
      />
    </pattern>
    <image
      id="image{randomThing + 1}"
      width="1920"
      height="1080"
      xlink:href={imageUrl}
      preserveAspectRatio="xMidYMid slice"
      style={`transform: translateY(${yOffset}%);`}
    />
  </defs>
</svg>
