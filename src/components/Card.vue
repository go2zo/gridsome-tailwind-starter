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
  &--has-link {
  }

  &__link {
  }

  &__title {
  }

  &__image {
  }

  &__inner {
  }

  &__outer {
  }
}
</style>
