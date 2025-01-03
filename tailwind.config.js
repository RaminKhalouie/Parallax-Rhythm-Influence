/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        path: {
          'from': { transform: 'translateY(100%)' },
          'to': { transform: 'translateY(0)' }
        },
        slider1: {
          '0% , 23%': { zIndex: '1', transform: 'translate(-50%,-50%) rotate(24deg) ' },
          '27%': { zIndex: '-1', transform: 'translate(-100%,-50%) rotate(24deg) ' },
          '31%,100%': { zIndex: '-1', transform: 'translate(-50%,-50%) rotate(24deg) ' },


        },
        slider2: {
          '25%,48%': { zIndex: '1', transform: 'translate(-50%,-50%) rotate(18deg) ' },
          ' 52%': { zIndex: '-1', transform: 'translate(-100%,-50%) rotate(18deg) ' },
          '56%,100%,0%': { zIndex: '-1', transform: 'translate(-50%,-50%) rotate(18deg) ' },


        },
        slider3: {
          '50% , 73%': { zIndex: '1', transform: 'translate(-50%,-50%) rotate(12deg) ' },
          ' 81%': { zIndex: '-1', transform: 'translate(-100%,-50%) rotate(12deg) ' },
          '85%,100%,0%': { zIndex: '-1', transform: 'translate(-50%,-50%) rotate(12deg) ' },


        },
        slider4: {
          '75% , 90%': { zIndex: '1', transform: 'translate(-50%,-50%) rotate(6deg) ' },
          ' 94%': { zIndex: '-1', transform: 'translate(-100%,-50%) rotate(6deg) ' },
          '98%,100%,0%': { zIndex: '-1', transform: 'translate(-50%,-50%) rotate(6deg) ' },


        },
      },
      animation: {
        path: 'path 0.4s 0.4s 1 linear forwards',
        slider1: 'slider1 10s infinite linear',
        slider2: 'slider2 10s infinite linear',
        slider3: 'slider3 10s infinite linear',
        slider4: 'slider4 10s infinite linear',
      },
      fontFamily: {
        'workhorse': ["workhorse", "serif"]
      },
      gridTemplateColumns: {
        'header': '1fr 400px 1fr'
      },
      backgroundImage: {
        'footer': "url('../images/Full-Set-BTS-1.jfif')"
      }
    },
  },
  plugins: [],
}

