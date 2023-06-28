<template>
  <h1 class="text-center">About the store</h1>
  <div class="heo-section container d-flex">
      <div class="col-6 m-2" id="bg-image">
        <img src="https://i.postimg.cc/Xqkdv3gx/store.jpg" alt="">
      </div>
      <div class="content" id="sec-hero">
        <p>
          Established with a vision and love for the beautiful game, Footy Goods
          Store came to life, staking its claim. Founded to cater to football
          enthusiasts' needs, It offers a haven for players of all ages and
          creeds. At its core, the purpose is to fuel the passion, Providing a
          wide range of products in a fashion. From jerseys to cleats, every
          team's colors on display, Footy Goods Store ensures fans have their
          say. The shelves are adorned with club emblems and names, A vast
          selection of merchandise, igniting flames. Scarves, hats, and
          accessories in vibrant hues, Celebrate your team and wear your loyalty
          true.
        </p>
        <p class="paragraph-founder">
          But it's not just about fandom, there's more in store, Footy Goods
          offers gear for players to explore. Balls, boots, and training
          equipment galore, Helping players excel and improve even more. From
          the grassroots level to the professional field, Footy Goods supports
          the football community's yield. Fueling dreams and aspirations with
          each sale, They strive to empower players, without fail. So step into
          Footy Goods Store, where passion thrives, A hub for football
          enthusiasts' lives. A place where the love for the game is met, With
          quality products, fulfilling every footballer's bet.
        </p>
      </div>
    </div>
    <hr class="my-4" />
    <h1 class="text-center">Our Founders</h1>
    <div class="team-section container d-flex justify-content-center">
      <div class="d-flex">
        <div class="col-6">
          <div class="info-me container text-center">
            <img
              src="https://i.postimg.cc/sxyrZn1f/ap.jpg"
              alt=""
              class="top-picks-img"
            />
            <h3>ASIPHE NDIMLANA</h3>
            <p class="paragraph-founder text-start">
              Asiphe grew up in Butterworth, Eastern Cape wherby he later on
              moved to Cape Town to find employment. After 2 years of not
              finding employment, he then went to Argentina whereby he mest Leo.
              They both had an idea of starting a football business as they both
              liked football
            </p>
          </div>
        </div>
        <div class="col-6">
          <div class="info-me container text-center">
            <img
              src="https://i.postimg.cc/W4FTRFQV/MESSI.png"
              alt=""
              class="top-picks-img"
            />
            <h3>LEO MESSI</h3>
            <p class="paragraph-founder text-start">
              Leo grew up in Rosario, Argentina wherby he was studying business
              and was playing football part-time . His family was owning a
              business, so thats where the passion for starting a fooball came
              from. So Asiphe and him met in the football stadiym where they
              shared their opinions.
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-4" />
      <!-- PARTNERS -->
      <h2 class="text-center">Official Partners</h2>
    <div class="partners d-flex justify-content-center flex-wrap">
      <!-- Carousel -->
      <div
        id="demo"
        class="carousel slide"
        data-bs-ride="carousel"
        data-interval="3000"
      >
        <!-- The slideshow/carousel -->
        <div class="carousel-inner">
          <div class="carousel-item carousel-item-first active">
            <img src="https://i.postimg.cc/B6wtBcLs/adidas-logo-removebg-preview.png" class="partner-img" alt="">
            <img src="https://i.postimg.cc/LX9dG8wV/epl-logo-removebg-preview.png" class="partner-img" alt="">
          </div>
          <div class="carousel-item carousel-item-second">
            <img src="https://i.postimg.cc/9QPCkKzC/absa-removebg-preview.png" class="partner-img" alt="">
            <img src="https://i.postimg.cc/tTq0BKQG/lotto-logo-removebg-preview.png" class="partner-img" alt="">
          </div>
        </div>

        <!-- Left and right controls/icons -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
    <!-- END OF PARTNERS -->
</template>
<style>
#bg-image {
  border-radius: 5% ;}
  h1,h2,h3{
    color: white;
  }
  .top-picks-img {
  height: 186px;
  width: 100%;
  padding: 5px;
  border-radius: 5% !important;
  /* object-fit: contain !important; */
}
.partner-img {
  width: 110px !important;
  padding: 10px !important;
  /* object-fit: cover; */
}
</style>
