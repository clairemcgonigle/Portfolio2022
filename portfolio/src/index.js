import React from "react";
import Main from "./client/Main";
import {createTheme, ThemeProvider} from "@mui/material";
import {createRoot} from 'react-dom/client';

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
            fontFamily: 'Abril Fatface',
            fontSize: 90,
        },
        h3: {
            fontFamily: 'Abril Fatface',
            fontSize: 35,
            fontWeight: 'lighter'
        },
        h4: {
            fontFamily: 'Roboto',
            fontSize: 30,
            paddingTop: '20px',
        },
        h5: {
            fontFamily: 'Roboto',
            fontSize: 22,
        },
        h6: {
            fontFamily: 'Roboto',
            fontSize: 18,
        },
        h7: {},
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
                },
                root: {
                    '&:hover': {
                        backgroundColor: 'white',
                    }
                }
            },
            defaultProps: {
                color: "inherit"
            }
        },
        MuiButton: {
            styleOverrides: {
                typography: {
                    '&:hover': {
                        fontWeight: 'bold',
                        color: 'blue'
                    }
                },
                root: {
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                    "&:active": {
                        // fontWeight: 'bold',
                        backgroundColor: 'white',
                    },
                }
            },

            variants: [
                {
                    props: {variant: "button1", color: 'primary'},
                    style: {
                        fontFamily: 'Roboto',
                        fontSize: 22,
                        padding: 0,
                        '&:hover': {
                            backgroundColor: 'white',
                            fontWeight: 'bold',
                        },
                        "&:active": {
                            fontWeight: 'bold',
                            boxShadow: 'none',
                            background: 'white',
                            // color: 'white',
                        },
                    },
                },
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