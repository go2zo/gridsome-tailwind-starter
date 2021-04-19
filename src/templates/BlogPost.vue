<template>
  <Layout>
    <Section container="md" dots>
      <div class="text-center post-header mb-x2">
        <h1 v-html="$page.post.title" />
      </div>
      <div class="post-content post mb-x2">
        <div v-html="$page.post.content" />
      </div>
    </Section>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  post: blogPost(id: $id) {
    title
    date(format: "D. MMMM YYYY")
    timeToRead
    content
    excerpt
  }
}
</page-query>
