<script>
  // @ts-nocheck

  import { onMount } from 'svelte';
  import WordDisplay from './WordDisplay.svelte';
  import InputArea from './InputArea.svelte';
  import Game from './Hangman.svelte';
  import {
    word,
    guessedLetters,
    lives,
    mistakeCount,
    gameOver,
    win,
  } from './store.js';

  onMount(async () => {
    const response = await fetch(
      'https://random-word-api.herokuapp.com/word?number=1&length=6'
    );
    const data = await response.json();
    word.set(data[0].toUpperCase());
  });

  $: {
    if ($word) {
      const isGameOver =
        $lives <= 0 ||
        $word.split('').every((letter) => $guessedLetters.includes(letter));

      gameOver.set(isGameOver);

      if (isGameOver) {
        win.set(
          $word.split('').every((letter) => $guessedLetters.includes(letter))
        );
      }
    }
  }
</script>

<main>
  <div class="title">
    <h1>Hangman</h1>
  </div>
  {#if $gameOver}
    <div class="game-over">
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img
        src={`/images/Placeholder${$mistakeCount}.png`}
        alt="Hangman Image"
        style="max-width: 100%; max-height: 300px; display: block; margin: 0 auto;"
      />
      <p>{$win ? 'You Win!' : 'Game Over!'}</p>
      <button on:click={location.reload()}>Restart</button>
    </div>
  {:else}
    <div class="peli">
      <Game />
      <WordDisplay />
      <InputArea />
    </div>
  {/if}
</main>

<style>
  .title {
    color: blue;
    font-size: 2em;
    text-align: center;
    background-color: black;
    text-transform: uppercase;
  }

  main {
    background-color: grey;
  }

  .game-over {
    text-align: center;
    font-size: 2em;
    color: darkred;
  }

  .game-over button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }

  .game-over button:hover {
    background-color: #45a049;
  }
</style>
