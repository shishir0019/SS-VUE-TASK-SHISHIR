<template>

  <!-- header -->
  <header class="container container--fluid bg-white fixed-top">
        <div class="container bg-white">
            <div class="header">
                <div class="header__item">
                    <h2>Stuff Managment System</h2>
                </div>
                <div class="header__item">
                    <router-link to="/application" class="btn btn--outline">Go to Application</router-link>
                </div>
            </div>
        </div>
    </header>

    <!--main body -->
    <main style="padding-top: 100px;">
        <div class="container">
            <article class="content">
                <div class="content__item p-1">
                    <h2 class="text-h1 text-color-primary"><span class="text-color-accent">Manage</span> your <br> stuff properly</h2>
                    <p class="text-md my-4 text-color-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit voluptatibus magni, dolorem quia aperiam quis atque nemo explicabo voluptates natus maiores consectetur maxime eum! Aliquam perspiciatis ipsum dolores quam.</p>
                    <div class="social">
                        <div class="social__item"><img src="https://img.icons8.com/color/344/facebook-new.png" alt=""></div>
                        <div class="social__item"><img src="https://img.icons8.com/fluency/344/instagram-new.png" alt=""></div>
                        <div class="social__item"><img src="https://img.icons8.com/office/344/twitter.png" alt=""></div>
                    </div>
                </div>
                <div class="content__item">
                    <img src="https://i.ibb.co/5h5VtsW/img1.png" alt="">
                </div>
            </article>
            <article class="content content--col text-center my-2" style="max-width: 600px; margin: auto;">
                <h2 class="text-h1">Features</h2>
                <div class="my-2 text-md text-color-gray">
                    The world is moved not only by the mighty shoves of the beroes, 
                    but also by the aggregate of the tiny pushed of each honest worker
                    <div class="text-color-gray">-Helen Keller</div>
                </div>
            </article>
            <article class="content my-2">
                <div class="card-list">
                    <div class="card">
                        <div class="card__item">
                            <div class="logo" style="background-color: #f8c28446;">
                                <img src="https://img.icons8.com/ios-filled/344/themes.png" alt="icon">
                            </div>
                        </div>
                        <h4 class="card__item text-h4">Design</h4>
                        <p class="card__item text-center text-color-gray text-md">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, nam, vitae reiciendis iste vero corporis aspernatur similique ad deserunt atque repellat? Distinctio ab molestias aliquid provident? Aliquam blanditiis provident recusandae?
                        </p>
                    </div>
                    <div class="card">
                        <div class="card__item">
                            <div class="logo" style="background-color: #84f0f846;">
                                <img src="https://img.icons8.com/ios-filled/344/maintenance.png" alt="icon">
                            </div>
                        </div>
                        <h4 class="card__item text-h4">Tools</h4>
                        <p class="card__item text-center text-color-gray text-md">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, nam, vitae reiciendis iste vero corporis aspernatur similique ad deserunt atque repellat? Distinctio ab molestias aliquid provident? Aliquam blanditiis provident recusandae?
                        </p>
                    </div>
                    <div class="card">
                        <div class="card__item">
                            <div class="logo" style="background-color: #97f88446;">
                                <img src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/344/external-ux-design-agile-development-smashingstocks-mixed-smashing-stocks-2.png" alt="icon">
                            </div>
                        </div>
                        <h4 class="card__item text-h4">UX</h4>
                        <p class="card__item text-center text-color-gray text-md">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, nam, vitae reiciendis iste vero corporis aspernatur similique ad deserunt atque repellat? Distinctio ab molestias aliquid provident? Aliquam blanditiis provident recusandae?
                        </p>
                    </div>
                </div>
            </article>
        </div>
        <div class="container">

            <article class="content content--col text-center my-2" style="max-width: 600px; margin: auto;">
                <h2 class="text-h1">Portfolio</h2>
                <div class="my-2 text-md text-color-gray">
                    "When on investor focuses on short-trem investment he or she is 
                    ovserving the variablity of the portfolio, not the return - in short,
                     being fooled by randomness"
                    <div class="text-color-gray">-Nassim Nicholas Tabeb</div>
                </div>
            </article>
            <article class="content content--reverse">
                <div class="content__item items-start p-1">
                    <h2 class="text-h1 text-color-primary">Product</h2>
                    <p class="text-md my-4 text-color-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit voluptatibus magni, dolorem quia aperiam quis atque nemo explicabo voluptates natus maiores consectetur maxime eum! Aliquam perspiciatis ipsum dolores quam.</p>
                    <button class="btn btn--outline">Details</button>
                </div>
                <div class="content__item">
                    <img src="https://i.ibb.co/Ms7xGpW/img2.png" alt="">
                </div>
            </article>
            <article class="content">
                <div class="content__item items-start p-1">
                    <h2 class="text-h1 text-color-primary">Art Design</h2>
                    <p class="text-md my-4 text-color-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit voluptatibus magni, dolorem quia aperiam quis atque nemo explicabo voluptates natus maiores consectetur maxime eum! Aliquam perspiciatis ipsum dolores quam.</p>
                    <button class="btn btn--outline">Details</button>
                </div>
                <div class="content__item">
                    <img src="https://i.ibb.co/Jj3zx7x/img3.png" alt="">
                </div>
            </article>
        </div>
    </main>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(()=> {
  const header = document.querySelector('header');
  document.addEventListener('scroll', (event) => {
      const isTop = window.scrollY === 0;
      if(!isTop) header.classList.add("shadow-lg")
      else header.classList.remove("shadow-lg")
  })
})
</script>

<style lang="scss">
// dev
.t {
    border: 1px solid red;
}

* {
    // border: 1px solid red;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
}

// var
$primary-color: #6202EE;
$accent-color: #EC7833;
$shadow-color: #eaeaea;

$breakpoint-mobile: 600px;
$breakpoint-tab: 768px;

// util

.font {
    &-bold { font-weight: bolder; }
    &-medium { font-weight: 500; }
    &-thin { font-weight: 400; }
}

.text {
    &-color { 
        &-light { color: #fff }
        &-dark { color: #333 }
        &-gray { color: #999 }
        &-primary { color: $primary-color }
        &-accent { color: $accent-color }
    }
    &-h1 { font-size: 2.5rem;}
    &-h2 { font-size: 2rem;}
    &-h3 { font-size: 1.5rem;}
    &-h4 { font-size: 1.2rem;}
    &-lg { font-size: 1.5rem;}
    &-md { font-size: 1.2rem;}
    &-sm { font-size: .9rem;}
    &-left { text-align: left; }
    &-center { text-align: center; }
    &-right { text-align: right; }
}

.bg {
    &-white { background-color: #ffffff;}
    &-red { background-color: #ff0000;}
    &-primary { background-color: $primary-color}
    &-accent { background-color: $accent-color}
}

.m {
    &x {
        &-1 { margin: 0 10px; }
        &-2 { margin: 0 20px; }
        &-3 { margin: 0 30px; }
        &-4 { margin: 0 40px; }
        &-5 { margin: 0 50px; }
        &-6 { margin: 0 60px; }
        &-7 { margin: 0 70px; }
    }
    &y {
        &-1 { margin: 10px 0; }
        &-2 { margin: 20px 0; }
        &-3 { margin: 30px 0; }
        &-4 { margin: 40px 0; }
        &-5 { margin: 50px 0; }
        &-6 { margin: 60px 0; }
        &-7 { margin: 70px 0; }
    }
    &-1 { margin: 10px; }
    &-2 { margin: 20px; }
    &-3 { margin: 30px; }
    &-4 { margin: 40px; }
    &-5 { margin: 50px; }
    &-6 { margin: 60px; }
    &-7 { margin: 70px; }
    &-center { margin: 0 auto; }
}
.p {
    &x {
        &-1 { padding: 0 10px; }
        &-2 { padding: 0 20px; }
        &-3 { padding: 0 30px; }
        &-4 { padding: 0 40px; }
        &-5 { padding: 0 50px; }
        &-6 { padding: 0 60px; }
        &-7 { padding: 0 70px; }
    }
    &y {
        &-1 { padding: 10px 0; }
        &-2 { padding: 20px 0; }
        &-3 { padding: 30px 0; }
        &-4 { padding: 40px 0; }
        &-5 { padding: 50px 0; }
        &-6 { padding: 60px 0; }
        &-7 { padding: 70px 0; }
    }
    &-1 { padding: 10px; }
    &-2 { padding: 20px; }
    &-3 { padding: 30px; }
    &-4 { padding: 40px; }
    &-5 { padding: 50px; }
    &-6 { padding: 60px; }
    &-7 { padding: 70px; }
}

.h {
    &-px { height: 1px; }
    &-1 { height: 10px; }
    &-2 { height: 20px; }
    &-4 { height: 40px; }
    &-6 { height: 60px; }
    &-8 { height: 80px; }
    &-full { height: 100%; }
}
.w {
    &-px { width: 1px; }
    &-1 { width: 10px; }
    &-2 { width: 20px; }
    &-4 { width: 40px; }
    &-6 { width: 60px; }
    &-8 { width: 80px; }
    &-full { width: 100%; }
}

.shadow {
    &-sm { box-shadow: 0 0 0 3px $shadow-color; }
    &-md { box-shadow: 0 0 2px 5px $shadow-color; }
    &-lg { box-shadow: 0 0 5px 5px $shadow-color; }
    &-xl { box-shadow: 0 0 8px 10px $shadow-color; }
}
.flex {
    display: flex;
    &-col { flex-direction: column; }
    &-col-reverse { flex-direction: column-reverse; }
    &-row { flex-direction: row; }
    &-row-reverse { flex-direction: row-reverse; }
}

.justify {
    &-center { justify-content: center; }
    &-start { justify-content: start; }
    &-end { justify-content: end; }
    &-between { justify-content: space-between; }
    &-around { justify-content: space-around; }
}

.gap {
    &-1 { column-gap: 10px; }
    &-2 { column-gap: 20px; }
    &-3 { column-gap: 30px; }
    &-4 { column-gap: 40px; }
    &-5 { column-gap: 50px; }
    &-y {
        &-1 { row-gap: 10px; }
        &-2 { row-gap: 20px; }
        &-3 { row-gap: 30px; }
        &-4 { row-gap: 40px; }
        &-5 { row-gap: 50px; }
    }
    &-x {
        &-1 { column-gap: 10px; }
        &-2 { column-gap: 20px; }
        &-3 { column-gap: 30px; }
        &-4 { column-gap: 40px; }
        &-5 { column-gap: 50px; }
    }
}

.items {
    &-center { align-items: center; }
    &-start { align-items: flex-start; }
    &-end { align-items: flex-end; }
}

.fixed {
    &-top { position: fixed; left: 0; right: 0; top: 0; }
    &-left { position: fixed; left: 0; bottom: 0; top: 0; }
    &-right { position: fixed; bottom: 0; right: 0; top: 0; }
    &-bottom { position: fixed; left: 0; right: 0; bottom: 0; }
}

// layouts
.container {
    max-width: 1140px;
    width: 90%;
    margin: 0 auto;
    &--fluid{
        max-width: 100%;
        width: 100%;
    }
}

.content {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    &--reverse {
        flex-direction: row-reverse;
    }
    &__item {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        img {
            max-width: 500px;
            width: 100%;
        }
    }
    &--col {
        flex-direction: column;
    }
}

.social {
    display: flex;
    gap: 20px;
    align-items: center;
    &__item {
        img{
            width: 25px;
            height: 25px;
        }
    }
}

.card-list {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 50px;
    .card {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 50px 30px;
        border-radius: 20px;
        &__item {
            display: flex;
            justify-content: center;
            align-items: center;
            .logo {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                padding: 15px;
                img {
                    width: 40px;
                    height: 40px;
                }
            }
        }
        &:hover{
            box-shadow: 0 0 5px 5px $shadow-color;
        }
    }
}

// components

.btn {
    color: #fff;
    background-color: $primary-color;
    padding: 12px 30px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    border: 2px solid transparent;
    &:hover{
        background-color: $accent-color;
    }
    &--outline {
        border: 2px solid $primary-color;
        background-color: transparent;
        color: $primary-color;
        &:hover{
            background-color: $primary-color;
            color: #fff;
            border-color: $primary-color;
        }
    }
    &--fab {
        background-color: #fff;
        box-shadow: 0 0 5px 2px $shadow-color;
        color: #333;
        padding: 10px;
    }
}


// others

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
    &__item { 
        .logo img{
            width: 180px;
        }
     }
    &__item a {
        display: flex;
        text-decoration: none;
        color: $primary-color;
        font-weight: bold;
        &:hover{
            color: $accent-color;
        }
    }
    .nav {
        display: flex;
        &__item a{
            padding: 5px 10px;
        }
    }
}

.icon {
    display: flex;
    &__item {
        img{
            width: 50px;
            height: 50px;
        }
    }
}

@media (max-width: $breakpoint-tab) {
    .tab {
        &-flex { display: flex; }
        &-block { display: block; }
        &-hidden { display: none; }
    }
    .container {
        max-width: 100%;
        width: 100%;
    }
    .header {
        padding: 20px;
        &__item { 
            .logo img{
                width: 120px;
            }
         }
        .nav {
            display: none;
        }
    }

    .content {
        padding: 20px;
        flex-direction: column;
        &--col {
            flex-direction: column;
        }
    }

    .card-list {
        grid-template-columns: auto auto;
    }
}

@media (max-width: $breakpoint-mobile) {
    .container {
        max-width: 100%;
        width: 100%;
    }

    .header {
        padding: 10px;
    }

    .card-list {
        grid-template-columns: auto;
    }
}

</style>