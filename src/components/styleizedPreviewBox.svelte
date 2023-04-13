<script lang="ts">
  import type { Grade } from "../scripts/grade";
  import { colorLerp, lerp } from "../scripts/mathutils";
  import Wave from "./wave.svelte";
  export let assignmentName: string;
  export let imageUrl: string;
  export let imageOffset: number = 0;
  export let hasIcon: boolean = false;
  export let hasGrade: boolean = false;
  let image;

  export let gradeProvider: (() => Grade) | null = null;

  function getGradeColor(): string {
    if (!gradeProvider) {
      return "#C6FFC8";
    }
    let grade = gradeProvider();
    if (grade.points <= 1) {
      return "#FFC6C6";
    }
    return colorLerp("#FFC6C6", "#C6FFC8", grade.points / grade.max);
  }
</script>

<div class="background_box">
  <div class="title_container">
    <div class="title">
      {assignmentName}
    </div>
    <div class="optional_container">
      {#if hasIcon}
        <div class="icon" />
      {/if}
      {#if hasGrade}
        <div class="grade_box" style="background-color: {getGradeColor()};">
          {#if gradeProvider}
            <span class="grade">{gradeProvider().pointsToOneDecimal()}</span>
            <span class="max">{gradeProvider().max.toFixed(1)}</span>
          {/if}
        </div>
      {/if}
    </div>
  </div>
  <div class="image_wave">
    <Wave
    bind:imageUrl={imageUrl}
    yOffset={imageOffset}
    />
  </div>
</div>

<style>
  .background_box {
    background-color: #5b5b5b;
    border-radius: 10px;
    width: 461px;
    height: 120px;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
    filter: drop-shadow(0px 5px 3px #00000088);
  }
  .title_container {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    font-size: 25px;
  }
  .image_wave {
    width: 100%;
    display: flex;
    align-items: flex-start;
  }
  .title {
    padding-left: 10px;
    width: 70%;
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
  .grade_box {
    width: 80px;
    aspect-ratio: 2/1;
    margin-right: 20px;
    border-radius: 5px;
  }
  .grade {
    color: black;
    font-size: 20px;
    display: block;
    height: 10px;
  }
  .max {
    color: #656565;
    font-size: 10px;
  }
</style>
