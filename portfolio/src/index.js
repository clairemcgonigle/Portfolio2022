import React from "react";
import Main from "./Main";
import {createTheme, ThemeProvider} from "@mui/material";
import { createRoot } from 'react-dom/client';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#43a047',
        },
        secondary: {
            main: '#f50057',
        },
        error: {
            main: '#f44336',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Abril Fatface',
            fontSize: 150,
        },
        h2: {
            fontFamily: 'Sanchez',
        },
        h3: {
            fontFamily: 'Suravaram',
        },
        h4: {
            fontFamily: 'Abril Fatface',
            fontSize: 35,
            fontWeight: 'lighter'
        },
        h5: {
            fontFamily: 'Roboto',
            fontSize: 30,
        },
        h6: {
            fontFamily: 'Roboto',
            fontSize: 22,
            // fontWeight: 'bold'
        },
        overline: {
            fontWeight: 700,
        },
        button: {
            textTransform: 'none',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorInherit: {
                    backgroundColor: 'rgba(255,255,255,0.9)'
                }
            },
            defaultProps: {
                color: 'inherit'
            },
        },
        MuiBadge: {
            defaultProps: {
                color: "secondary"
            }
        },
        MuiIconButton: {
            styleOverrides: {
                colorInherit: {
                    color: '#000'
                }
            },
            defaultProps: {
                color: "inherit"
            }
        },
        MuiButton: {
            variants: [
                {
                    props: {variant: "contained", color: 'primary'},
                    style: {
                        width: "100%",
                        height: "100%",
                        borderRadius: 45,
                        fontWeight: "bold"
                    }
                },
                {
                    props: {variant: 'text'},
                    style: {
                        color: '#000'
                    }
                },
                {
                    props: {variant: "outlined", color: 'primary'},
                    style: {
                        width: "100%",
                        height: "100%",
                        borderRadius: 45,
                        fontWeight: "bold"
                    }
                },
            ]
        },
        MuiToggleButtonGroup: {
            defaultProps: {
                color: "primary"
            }
        },
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
                margin: "dense"
            }
        }
    }
});

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ThemeProvider theme={theme}><Main/></ThemeProvider>);