<template>
  <div id="navbar-wrapper" class="shadow-md">
    <p id="title" class="text-white text-4xl ml-10 font-extrabold text-shadow-lg">Shaeblogs</p>
    <RouterLink to="/bio" id="tab-link">Bio</RouterLink>
    <RouterLink to="/newsletter" id="tab-link">Newsletter</RouterLink>
    <RouterLink to="/contact" id="tab-link">Contact</RouterLink>
    <div class="flex flex-row mr-2 content-center">
      <img class="max-w-8" src="/instagram-logo.png" />
      <a class="text-sm" href="https://www.instagram.com/shaelynslife/" target="_blank"
        >@shaelynslife</a
      >
    </div>
  </div>
</template>

<style scoped>
#navbar-wrapper {
  flex: 1 1 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 100vw;
  background-color: var(--color-primary);
}

#tab-link {
  font-size: larger;
}

#title {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--color-tertiary);
}
</style>
