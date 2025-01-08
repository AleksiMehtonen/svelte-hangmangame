<script>
  import {
    guessedLetters,
    word,
    lives,
    mistakeCount,
    gameOver,
  } from './store.js';

  const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const consonants = alphabet.filter((letter) => !vowels.includes(letter));

  const handleGuess = (letter) => {
    if ($gameOver || $guessedLetters.includes(letter)) return; // Disable actions if game is over

    guessedLetters.update((letters) => [...letters, letter]);

    if (!$word.includes(letter)) {
      mistakeCount.update((count) => count + 1);
      lives.update((l) => l - 1);
    }
  };
</script>

<div class="input-area">
  {#if !$gameOver}
    <div class="vowels">
      {#each vowels as vowel}
        <button
          on:click={() => handleGuess(vowel)}
          disabled={$guessedLetters.includes(vowel) || $gameOver}
        >
          {vowel}
        </button>
      {/each}
    </div>

    <div class="consonants">
      {#each consonants as consonant}
        <button
          on:click={() => handleGuess(consonant)}
          disabled={$guessedLetters.includes(consonant) || $gameOver}
        >
          {consonant}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .input-area {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .vowels,
  .consonants {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

  .vowels {
    justify-content: center;
  }

  .consonants {
    flex-wrap: wrap;
    justify-content: center;
  }

  button {
    background-color: lightblue;
    border: 2px solid #000;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    width: 40px;
    height: 40px;
  }

  button:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
</style>
