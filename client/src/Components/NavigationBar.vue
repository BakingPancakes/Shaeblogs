<script setup lang="ts">
import { THEME } from "@src/constants";

type tabList = {
  tag: string;
  imageURL?: string;
  id: number;
};
const tab_list: tabList[] = [
  {
    tag: "More to come...",
    id: 1,
  },
  {
    tag: "Sips",
    imageURL: "/iced-coffee-icon.png",
    id: 2,
  },
  {
    tag: "Flics",
    imageURL: "/digicam-icon.png",
    id: 3,
  },
];
</script>

<template>
  <div id="navbar-wrapper">
    <div id="tablist">
      <div id="tab" v-for="tab in tab_list" :key="tab.id">
        <img :src="tab.imageURL" style="max-height: 1em" />
        <p>{{ tab.tag }}</p>
      </div>
    </div>
    <p id="title">Shaeblogs</p>
    <p id="socials">@shaelynslife</p>
  </div>
</template>

<style scoped>
#navbar-wrapper {
  flex: 1 1 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  width: 100vw;
  background-color: v-bind("THEME.PRIMARY_1");
}

#tablist {
  display: flex;
  justify-content: space-between;
}

#tab {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 5em;
  min-height: 2.5em;
  margin-left: 1em;
  margin-right: 1em;
  border-radius: 2em;
  border: solid;
  border-color: #f9b6dc;
  box-shadow: 5px 5px #836374;
}

#tab p {
  margin: 0;
}

#title {
  grid-column: 2;
  justify-self: center;
}

#socials {
  grid-column: 3;
  justify-self: right;
  margin-right: 2em;
}
</style>
