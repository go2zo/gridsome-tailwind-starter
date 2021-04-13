<template>
  <footer class="z-10 p-5 -mt-px text-xs text-center border bg border-primary">
    <span>© {{ new Date().getFullYear() }} {{ $static.metadata.author.name }}. </span>
    <span>Powered by <a href="//gridsome.org" rel="noopener noreferrer" target="_blank"> gridsome </a></span>
  </footer>
</template>

<static-query>
query {
  metadata {
    author {
      name
    }
  }
}
</static-query>
