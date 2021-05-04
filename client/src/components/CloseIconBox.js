import { useContext } from 'react';
import { Context } from '../context';
import { Box, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export const CloseIconBox = () => {

    const { setSelectedPlane } = useContext(Context);

    const useStyles = makeStyles({
        iconWrapper: {
            width: "100%",
            textAlign: "end",
            position: "absolute",
            left: 0,
            zIndex: 5001,
            marginTop: 10
        },
        close: {
            cursor: "pointer",
            marginRight: 15,
        },
    });
    const classes = useStyles();

    const handleClick = () => {
        console.log('hello')
        setSelectedPlane(null)
    }

    return (
        <Box className={classes.iconWrapper}>
            <CloseIcon className={classes.close} onClick={handleClick} />
        </Box>
    )
}