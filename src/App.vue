<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'kanban' }">Kanban</router-link> |
    </div>
    <router-view/>
  </div>
</template>
