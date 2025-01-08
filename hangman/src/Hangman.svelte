<script>
  import { mistakeCount } from './store.js';
</script>

<div class="hangman-image">
  <!-- svelte-ignore a11y_img_redundant_alt -->
  <img
    src={`/images/Placeholder${$mistakeCount}.png`}
    alt="Hangman Image"
    style="max-width: 100%; max-height: 300px; display: block; margin: 0 auto;"
  />
</div>

<style>
  .hangman-image {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>
