/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.{html,js,vue}",
    "./src/App.vue",
    "./src/main.js",
  ],
  theme: {
    fontFamily: {
      display: ['"Space Grotesk"', "arial"],
      body: ['"Raleway', "arial"],
    },
    extend: {
      animation: {
        bounceInTop: "bounceInTop 1.1s both",
      },
      keyframes: {
        bounceInTop: {
          "0%": {
            transform: "translateY(-500px)",
            transition: "ease-in",
            opacity: "0",
          },
          "38%": {
            transform: "translateY(0)",
            transition: "ease-out",
            opacity: 1,
          },
          "55%": {
            transform: "translateY(-65px)",
            transition: "ease-in",
          },
          "72%": {
            transform: "translateY(0)",
            transition: "ease-out",
          },
          "81%": {
            transform: "translateY(-28px)",
            transition: "ease-in",
          },
          "90%": {
            transform: "translateY(0)",
            transition: "ease-out",
          },
          "95%": {
            transform: "translateY(-8px)",
            transition: "ease-in",
          },
          "100%": {
            transform: "translateY(0)",
            transition: "ease-out",
          },
        },
      },
      colors: {
        "jd-background": "#7b949c",
        "jd-darkestblue": "#182241",
        "jd-lightbeige": "#fff5d9",
        "jd-subbutton": "#518FBF",
        "jd-darkblue": "#213c4e",
        "jd-slate": "#536c7c",
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
      height: {
        500: "500px",
      },
      width: {
        500: "500px",
      },
      listStyleType: {
        square: "square",
        circle: "circle",
        disc: "disc",
      },
      padding: {
        "1/3": "33.33333%",
        "2/3": "66.66667%",
      },
    },
  },
  plugins: [],
};
