<template>
  <div id="layout-wrapper">
    <div id="scroll-container">
      <RouterView />
      <footer class="p-8">Shaeblogs &copy; 2026</footer>
    </div>
  </div>
</template>

<style>
#layout-wrapper {
  height: 100%;
  flex: 1 1 auto;
  /** clip all content that exceeds bounds */
  overflow: hidden;
}

#scroll-container {
  height: 100%;
  /** designate this as scroll container */
  overflow: auto;

  /** prevent overscrolling for both x and y */
  /* overscroll-behavior: none; */
}

footer {
  text-align: center;
}
</style>
