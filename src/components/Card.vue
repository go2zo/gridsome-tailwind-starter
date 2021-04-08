<template>
  <div class="card" :class="{ 'card--has-link': link }">
    <g-link v-if="link" class="card__link" :to="link"> Read more </g-link>
    <div v-if="title" class="card__title">
      <span v-html="title" />
    </div>
    <div v-if="image" class="card__image">
      <g-image :src="image" />
    </div>
    <div class="card__inner">
      <slot />
    </div>
    <slot name="outer" />
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.card {
  @apply border border-darker rounded;
  @apply bg relative;
  @apply transition-all duration-300;
  z-index: 1;

  &__title {
    @apply text-center w-full mt-4;

    span {
      @apply inline-block;
      @apply pt-0.5 pb-1 px-3;
      @apply bg-dark;
      @apply text-white font-medium text-base tracking-wide;
      border-radius: 3px;
    }
  }

  &__image {
    @apply rounded-tl rounded-tr rounded-br-none rounded-bl-none;
    @apply overflow-hidden;
    @apply border-b border-primary;
    @apply transition-colors duration-300;

    img {
      @apply m-0 w-full;
    }
  }

  &__inner {
    @apply p-x1 overflow-hidden relative;
  }

  &[class*='container'] &__inner {
    @apply px-0;
  }

  .section--dark & {
    @apply bg-dark border-white opacity-10;
  }

  &__link {
    @apply absolute top-0 left-0 w-full h-full opacity-0 z-1;
    @apply overflow-hidden indent-full whitespace-nowrap; /** Scott Kellum Method */
    // @apply sr-only; /** H5BP */

    &:focus {
      @apply opacity-100 outline;
    }
  }

  a:not(.card__link) {
    @apply relative z-1;
  }

  &--has-link:hover {
    @apply shadow-glow text-current transform -translate-y-1;
  }

  h2,
  h3,
  h4 {
    @apply mb-2;
  }

  p:not(:last-child) {
    @apply mb-5;
  }
}
</style>
