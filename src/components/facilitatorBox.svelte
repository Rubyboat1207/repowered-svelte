<script lang="ts">
  import Background from "./background.svelte";
  export let teacherName: string;
  export let className: string;
  export let backgroundUrl: string;
  export let pfpUrl: string;
  export let imageOffset: number = 0;
  export let hasNotif: boolean = false;
  export let period: number = 0;
  let image;

</script>

<div class="background_box">
  <div class="infobox_container">
    <Background
      bind:imageUrl={backgroundUrl}
      yOffset={imageOffset}
    /> 
    <img alt="Image of {teacherName}" src={pfpUrl} class="teacherPFP">
    <span class="period">{period}</span>
  </div>
  <div class="title_container">
    <div class="title">
      {className}
      <div class="teacher-title">
        {teacherName}
      </div>
    </div>
  </div>
</div>

<style>
  .background_box {
    background-color: #5b5b5b;
    border-radius: 10px;
    width: 500px;
    aspect-ratio: 67 / 17;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: row;
    filter: drop-shadow(0px 5px 3px #00000088);
  }
  .infobox_container {
    width: 50%;
    height: 100%;
  }
  .title_container {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    width: 50%;
    height: 100%;
    display: flex;

    font-size: 25px;
  }
  .title {
    padding-left: 10px;
    width: 100%;
    margin-top: 10px;
    font-size: 35px;
  }
  .optional_container {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 70%;
  }
  .icon {
    width: 40px;
    aspect-ratio: 1/1;
    background-color: #d9d9d9;
    margin-right: 20px;
    border-radius: 5px;
  }
  .teacher-title {
    font-size: 12px;
  }
  .teacherPFP {
    position: absolute;
    top: 20px;
    left: 30px;
    width: 62px;
    border-radius: 500px;
    border: solid white 4px;
    aspect-ratio: 1/1;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .period {
    position: absolute;
    top: 67px;
    left: 15px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 26px;
    color: white;
    filter: drop-shadow(0px 2px 1px #000000aa);
  }
</style>
