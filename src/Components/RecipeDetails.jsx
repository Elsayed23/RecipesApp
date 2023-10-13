import React from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";

const Details = ({ instructions, recipeName, youtube }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(prev => !prev);

    return (
        <>
            <Button
                onClick={handleOpen}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 capitalize text-base">
                get recipe
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>{recipeName} Instructions:</DialogHeader>
                <DialogBody divider className="h-[35rem] overflow-scroll">
                    <Typography className="font-normal">
                        {instructions}
                    </Typography>
                </DialogBody>
                <DialogFooter className="space-x-2 justify-between">
                    <Button variant="outlined" className='focus:shadow-none' color="blue">
                        <a href={youtube} target='_blank'>
                            tutorial
                        </a>
                    </Button>
                    <Button variant="outlined" className='focus:shadow-none' color="red" onClick={handleOpen}>
                        close
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default Details;