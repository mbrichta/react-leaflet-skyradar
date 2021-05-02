import { Button, Box, Typography, useTheme, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { Context } from "../context";

export const PopupContent = ({ plane }) => {

    const theme = useTheme();
    const useStyles = makeStyles({
        root: {
            justifyContent: "center",
        },
        title: {
            marginBottom: 10
        },
        text: {
            margin: "10px 0"
        },
        buttonWrapper: {
            textAlign: "center"
        }
    });
    const classes = useStyles();

    const { setSelectedPlane } = useContext(Context);
    const [icao24, callsign] = plane;

    const handleClick = () => setSelectedPlane(plane)

    return (
        <Box className={classes.root}>
            <Typography variant="h6" className={classes.title}>Identification:</Typography>
            <Typography className={classes.text}><b>Icao: </b>{icao24}</Typography>
            {callsign ? <Typography className={classes.text}><b>Callsign:</b> {callsign}</Typography> : null}
            <Box className={classes.buttonWrapper}>
                <Button className={classes.button} size="small" variant="contained" color="primary" onClick={handleClick}>More info</Button>
            </Box>
        </Box>
    )
}