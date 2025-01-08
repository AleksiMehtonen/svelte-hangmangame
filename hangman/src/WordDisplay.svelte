<script>
  import { word, guessedLetters } from './store.js';

  $: displayWord = $word
    .split('')
    .map((letter) => ($guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');
</script>

<div class="word-display">
  <p>{displayWord}</p>
</div>

<style>
  .word-display {
    font-size: 2.5em;
    font-weight: bold;
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 20px;
    color: darkblue;
  }
</style>
