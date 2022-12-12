import { createTheme } from "@mui/material/styles";
import { lighten } from "polished";

export const DrawerWidth = 250;

export const Colors = {
  primary: "#5f2c3e",
  secondary: "rgba(255, 28, 28, 0.5)",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  // dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  ///////////////
  // Grays
  ///////////////
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",

  electric: '#FFEA70',
  normal: '#B09398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  dark: '#1E2737',
  fairy: '#E471A3',
  unknown: '#D8D0D4',
  shadow: '#676465',
  default: '#2A1A1F',
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  components: {
    MuiButton: {// de donde se sacan estos nombres
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          background: Colors.primary,
        },
        arrow: {
          color: Colors.primary,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,          
          background: Colors.primary,
          color: Colors.secondary,
          borderRadius: '0px 100px 0px 0px',
          borderRight: `1px solid ${Colors.primary}`
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(0.2, Colors.primary)
        }
      }
    },
    MyShopButton: {
      styleOverrides: {
        root: {
          color: Colors.white,
        },
        primary: {
          background: Colors.primary,
          "&:hover": {
            background: lighten(0.05, Colors.primary),
          },
        },
        secondary: {
          background: `${Colors.secondary}`,
          "&:hover": {
            background: lighten(0.05, Colors.primary),
          },
        },
      },
    },
  },
});

export default theme;
