<template>
  <!--<div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>!-->


  <section id="app">
    <div class="app">
      <header class="uk-padding-small ">
        <img class="uk-height-1-1" src="https://www.ironhack.com/assets/landing-pages/uber-initiative/header-logos.png">
      </header>
      <div class="app__content" >
        <nav class="">
          <router-link to="/dashboard" class="active">Dashboard</router-link>
          <router-link to="/interviews" class="active">Interviews</router-link>
        </nav>
        <div class="uk-section-small uk-width-1-1 outlet-section">

          <div class="uk-container">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  flex: 1 0;
  width: 100%;
  height: 100%;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__content {
    display: flex;
    flex: 1 0;
  }
}

nav {
  flex: 0 0 15%;
  padding: 20px 0;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  a {
    display: block;
    margin-bottom: 10px;
    padding: 10px 30px;
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
    font-size: 16px;
    border-left: 3px solid transparent;
    &.router-link-active {
      color: rgba(0, 0, 0, 0.8);
      border-left-color: #32c3ff;
      background: rgba(0, 0, 0, 0.03);
    }
    &:hover{
      text-decoration: none;
    }
  }
}
header {
  background: #fff;
  border-bottom: 2px solid #e8e8e8;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 10px 0 5px 10px
}
.outlet-section{
  overflow: scroll;
}
.filters{
  border-bottom: 1px solid #e8e8e8;
}
.users-count .uk-badge{
  top: -15px;
  right: 0;
}
.uk-pagination>*{
  padding: 0;
  margin: 10px;
}
.page-active{
  padding: 0 8px;
  background: #00B7FF;
  border-radius: 5%;

}
.page-active a{
  color: white;
}
.navigate{
  cursor: pointer;
}
</style>
