import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                mb: 5,
                width: 300,
                color: 'success.main',
                '& .MuiSlider-thumb': {
                    border: '10px solid white',
                    boxShadow: '0px 0px 10px green',
                    width: '10px',
                    height: '10px',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
