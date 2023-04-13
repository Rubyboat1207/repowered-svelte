<script lang="ts">
  import Background from "./background.svelte";
  export let teacherName: string;
  export let backgroundUrl: string;
  export let pfpUrl: string;
  export let imageOffset: number = 0;
  export let hasNotif: boolean = false;
  let image;

</script>

<div class="background_box">
  <div class="infobox_container">
    <Background
      bind:imageUrl={backgroundUrl}
      yOffset={imageOffset}
    /> 
  </div>
  <div class="title_container">
    <div class="title">
      {teacherName}
    </div>
    <div class="optional_container">
      {#if hasNotif}
        <div class="icon" />
      {/if}
    </div>
  </div>
</div>

<style>
  .background_box {
    background-color: #5b5b5b;
    border-radius: 10px;
    width: 664px;
    height: 177px;
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
    font-size: 36px;
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
</style>
