<template>
  <section id="about">
    <div class="grid justify-center">
      <div class="outer">
        <div class="inner">
          <div class="image-background">
            <img
              class="rounded w-80 h-80 float-left block"
              src="../../assets/myFace.jpg"
              alt="Justin's beautiful, lovely face."
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex m-52">
      <p class="text-center text-jd-darkblue font-body">
        I have loved learning how things work since I was a child and that
        passion has not stopped since. I am always reading up on the newest
        technology trends and putting them to use whenever I can.
      </p>
    </div>
  </section>
</template>

<style scoped>
.outer {
  position: relative;
}
div:before,
div:after {
  content: "";
  position: absolute;
  margin: -10px;
  height: 10%;
  width: 10%;
}
.outer:before {
  border-radius: 5px;
  border-left: 3px solid #182241;
  border-top: 3px solid #182241;
}
.outer:hover::before {
  animation: slide-tl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.inner:after {
  bottom: 0;
  right: 0;
  border-radius: 5px;
  border-right: 3px solid #182241;
  border-bottom: 3px solid #182241;
}
.inner:hover::after {
  animation: slide-br 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.image-background {
  background-color: #213c4e;
  display: inline-block;
  padding: 5px;
  border-radius: 10px;
}

img {
  border-radius: inherit;
}

@keyframes slide-tl {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-5px) translateX(-5px);
  }
}
@keyframes slide-br {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(5px) translateX(5px);
  }
}
</style>
