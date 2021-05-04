import { Box, Typography, makeStyles } from '@material-ui/core';

export const DataDetailsBox = ({ lastUpdate, lastContact }) => {

    const useStyles = makeStyles({
        wrapper: {
            display: 'flex',
            flexDirection: 'column-reverse',
            justifyContent: 'end',
            flex: 1,
            padding: "10px 15px",
        },
        text: {
            marginTop: 5
        }
    })
    const classes = useStyles();

    return (
        <Box className={classes.wrapper}>
            <Typography className={classes.text}><b>Last update: </b> {lastUpdate}</Typography>
            <Typography className={classes.text}><b>Last contact: </b> {lastContact}</Typography>
        </Box>
    )
}