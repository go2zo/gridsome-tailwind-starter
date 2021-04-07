<template>
  <Card :link="post.path">
    <h3 v-html="post.title" />
    <p v-html="post.excerpt" />
    <PostMeta :post="post" />
  </Card>
</template>

<script>
import Card from '@/components/Card'
import PostMeta from '@/components/PostMeta'

export default {
  components: {
    Card,
    PostMeta,
  },
  props: {
    post: { type: Object, required: true },
  },
}
</script>
