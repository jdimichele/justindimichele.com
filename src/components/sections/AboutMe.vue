<template>
  <section id="about">
    <div class="grid justify-center">
      <div class="outer">
        <div class="inner">
          <img
            class="rounded w-80 h-80 float-left"
            src="../../assets/myFace.jpg"
            alt="Justin's beautiful, lovely face."
          />
        </div>
      </div>
    </div>

    <div class="flex justify-end p-10">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa
        lacus, mollis ut augue a, fermentum ultrices nibh. Phasellus vulputate
        risus rutrum urna tempor, in malesuada nisi commodo. In vulputate
        ultricies nibh, vitae consectetur risus. Donec sed porttitor est. Duis
        blandit felis vitae purus commodo, sit amet sodales erat iaculis.
        Vivamus enim enim, accumsan eget orci id, elementum interdum sem.
        Maecenas at sodales leo. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Ut ipsum massa, feugiat eget
        nisl aliquam, dictum interdum erat. Phasellus erat mauris, consequat nec
        suscipit et, fringilla eu lectus.
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
  border-left: 3px solid #5e9dbd;
  border-top: 3px solid #5e9dbd;
}
.outer:hover::before {
  animation: slide-tl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.inner:after {
  bottom: 0;
  right: 0;
  border-radius: 5px;
  border-right: 3px solid #5e9dbd;
  border-bottom: 3px solid #5e9dbd;
}

.inner:hover::after {
  animation: slide-br 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
