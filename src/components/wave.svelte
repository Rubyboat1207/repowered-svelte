<script>
  import { onMount } from "svelte";

  export let imageUrl = "https://example.com/image.png";
  export let yOffset = 0;

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
  width="396"
  height="64"
  viewBox="0 0 396 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <path
    d="M0 0.5C16.1299 14.3717 36.6991 22 57.9735 22H356.5C378.315 22 396 39.6848 396 61.5C396 62.8807 394.881 64 393.5 64H10C4.47715 64 0 59.5228 0 54V0.5Z"
    fill="url(#pattern0)"
  />
  <path
    d="M0 0.5C16.1299 14.3717 36.6991 22 57.9735 22H356.5C378.315 22 396 39.6848 396 61.5C396 62.8807 394.881 64 393.5 64H10C4.47715 64 0 59.5228 0 54V0.5Z"
    fill="url(#paint0_linear_67_58)"
  />
  <defs>
    <pattern
      id="pattern0"
      patternContentUnits="objectBoundingBox"
      width="1"
      height="1"
    >
      <use
        xlink:href="#image0_67_58"
        transform="matrix(0.000833333 0 0 0.00519685 0 -1.40236)"
      />
    </pattern>
    <linearGradient
      id="paint0_linear_67_58"
      x1="198"
      y1="3.5"
      x2="198"
      y2="72"
      gradientUnits="userSpaceOnUse"
    >
      <stop />
      <stop offset="1" stop-opacity="0" />
    </linearGradient>
    <image
      id="image0_67_58"
      width="1200"
      height="720"
      xlink:href={imageUrl}
      preserveAspectRatio="xMidYMid slice"
      style={`transform: translateY(${yOffset}%);`}
    />
  </defs>
</svg>
