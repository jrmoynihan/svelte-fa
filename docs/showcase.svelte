<script>
import Fa from 'svelte-fa';
import {
  faFlag,
  faHome,
  faCog,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';

let model = {
  size: 5,
  pull: undefined,
  flip: undefined,
  rotate: 0,
};

let pull = ['None', 'Left', 'Right'];
let flip = ['None', 'Horizontal', 'Vertical', 'Both'];
let icons = [
  faFlag,
  faHome,
  faCog,
  faSeedling,
];

function setValue(prop, value) {
  model[prop] = value == 'None' ? undefined : value.toLowerCase();
}
</script>

<div class="jumbotron">
  <div class="row">
    <div class="col-md">
      <h1 class="hue">
        <strong><a href="https://github.com/Cweili/svelte-fa" target="_blank">svelte-fa</a></strong>
      </h1>
      <p>
        <a href="https://www.npmjs.com/package/svelte-fa" target="_blank">
          <img src="https://img.shields.io/npm/v/svelte-fa.svg" alt="npm version">
        </a>
        <a href="https://bundlephobia.com/result?p=svelte-fa" target="_blank">
          <img src="https://img.shields.io/bundlephobia/minzip/svelte-fa.svg" alt="bundle size">
        </a>
        <a href="https://github.com/Cweili/svelte-fa/blob/master/LICENSE" target="_blank">
          <img src="https://img.shields.io/npm/l/svelte-fa.svg" alt="MIT licence">
        </a>
        <a href="https://www.npmjs.com/package/svelte-fa" target="_blank">
          <img src="https://img.shields.io/npm/dt/svelte-fa.svg" alt="npm downloads">
        </a>
        <a href="https://github.com/Cweili/svelte-fa" target="_blank">
          <img src="https://img.shields.io/github/issues/Cweili/svelte-fa.svg" alt="github issues">
        </a>
      </p>
      <p class="lead mb-5">
        Tiny <a
          class="hue"
          href="https://fontawesome.com/"
          target="_blank"
        >FontAwesome</a> component for <a
          class="hue"
          href="https://svelte.dev/"
          target="_blank"
        >Svelte</a>.
      </p>
      <form on:submit|preventDefault>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Icon Sizes</label>
          <div class="col-sm-9 row">
            <div class="col-md-8 py-2">
              <input
                bind:value={model.size}
                type="range"
                class="form-control-range"
                min="1"
                max="10"
                step="0.1"
              >
            </div>
            <div class="col-md-4">
              <div class="form-control text-center">
                { model.size }x
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Pulled Icons</label>
          <div class="col-sm-9">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic example"
            >
              {#each pull as p (p)}
                <button
                  class={`btn btn-${model.pull == (p == 'None' ? undefined : p.toLowerCase()) ? 'primary' : 'secondary'}`}
                  on:click={() => setValue('pull', p)}
                  type="button"
                >
                  { p }
                </button>
              {/each}
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Flip</label>
          <div class="col-sm-9">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic example"
            >
              {#each flip as f (f)}
                <button
                  class={`btn btn-${model.flip == (f == 'None' ? undefined : f.toLowerCase()) ? 'primary' : 'secondary'}`}
                  on:click={() => setValue('flip', f)}
                  type="button"
                >
                  { f }
                </button>
              {/each}
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Rotate</label>
          <div class="col-sm-9 row">
            <div class="col-md-8 py-2">
              <input
                bind:value={model.rotate}
                type="range"
                class="form-control-range"
                min="-360"
                max="360"
                step="1"
              >
            </div>
            <div class="col-md-4">
              <div class="form-control text-center">
                { model.rotate }deg
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="col-md row">
      {#each icons as icon, name}
        <div
          class="col text-center hue"
        >
          <Fa
            icon={icon}
            flip={model.flip}
            pull={model.pull}
            rotate={model.rotate}
            size={`${model.size}x`}
          />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
.hue {
  color: #238ae6;
  animation: hue 30s infinite linear;
}

@keyframes hue {
  from {
    filter: hue-rotate(0deg);
  }

  to {
    filter: hue-rotate(-360deg);
  }
}
</style>
