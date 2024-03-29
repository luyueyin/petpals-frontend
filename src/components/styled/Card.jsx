import { Box, styled, } from '@mui/system'
import { IconButton, Button, Typography } from '@mui/material';
import theme, { Colors } from './Theme';

export const CardWrapper = styled(Box)(({ theme }) => ({
    padding: '130px 35px 30px 35px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: '0px 0px 10px 0.6px rgba(0, 0, 0, 0.2)',
    borderRadius: '20px',
    transition: '0.3s',
    cursor: 'pointer',
    minHeight: '380px',
    minWidth: '180px',
    transparent: '80%',
    position: 'relative',
    ' &:hover': {
        boxShadow: '0px 0px 10px 1px rgba(4, 5, 5, 0.4)'
    },
    [theme.breakpoints.up('md')]: {
        position: 'relative',
        maxWidth: '450px',
    }
}))

export const CardActionButton = styled(IconButton)(() => ({
    background: Colors.primary,
    margin: 4,
}))

export const AddToCard = styled(Button)(() => ({
    width: '120px',
    fontSize: '12px',
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        buttom: '2%',
        width: '300px',
        padding: '10px 5px',
    },
    background: Colors.primary,
    opacity: 0.9,

}))

export const CardText = styled(Typography)(({ theme }) => ({
    display: 'flex',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: 1.5,
    fontFamily: 'Montserrat',
}))

export const CardDescription = styled(Typography)(({ theme }) => ({
    display: 'flex',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: 1.5,
    marginTop: '20px',
    fontFamily: 'Montserrat',
}))

export const CardTitle = styled(Typography)(({ theme }) => ({
    padding: 4,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '0.5rem',
    marginTop: '0.8rem',
    fontFamily: 'Montserrat',
}))

export const CardReviewWrapper = styled(Box)(({ theme }) => ({
    padding: '3% 7%',
    marginTop: '6rem',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'left',
    borderRadius: '30px',
    height: '100%',
    width: '80%',
    boxShadow: '0px 0px 10px 0.6px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        maxWidth: '950px',
        marginTop: '4.5rem',
    }
}))

export const CardReviewDetail = styled(Box)(({ theme }) => ({
    paddingTop: 30, 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '400px',
    marginBottom: '30px', 
    fontFamily: 'Montserrat',
    [theme.breakpoints.up('md')]: {
        paddingTop: '1.5rem',
        marginLeft: '2.5rem',
        height: 150, 
    }
}))

export const ReviewText = styled(Box)(({ theme }) => ({
    display: 'flex',
    fontSize: '15px',
    lineHeight: 2,
    textAlign: 'left',
    fontFamily: 'Montserrat',
}))

export const ReviewDescription = styled(Box)({
    [theme.breakpoints.up('md')]: {
        padding: '0',
        marginTop: '2rem',
    },
    marginTop: '-1rem',
    display: 'flex',
    fontSize: '13px',
    lineHeight: 1.8,
    textAlign: 'left',
    padding: '6%'
})