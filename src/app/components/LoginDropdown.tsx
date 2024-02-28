import React from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UpgradeToNXTpage from '../UpgradeToNextLevel/page';
import SignOutMsg from './SignOutMsgPop';


export default function LoginDropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const[popupSubUpgrade, setOpen]= React.useState(false)

    const[popupSignOut, setOpenSignOut]= React.useState(false)

    const open = Boolean(anchorEl);
    const router = useRouter();

    const handleclickupgrade = () => {
    setAnchorEl(null);
    setOpen(true);
  };

    const handleclicksignout = () => {
        setAnchorEl(null);
        setOpen(true);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileClick = () => {
        setAnchorEl(null);
        router.push('/ProfileForm'); // Navigate to profile form page
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                sx={{ color: "white" }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Log In &nbsp; <h3>|</h3>&nbsp; Sign Up

            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleProfileClick}>My Profile</MenuItem>
                <MenuItem onClick={handleclickupgrade}>Subscribe to Upgrade</MenuItem>
                <MenuItem onClick={handleclicksignout}>Signout</MenuItem>
            </Menu>
            <UpgradeToNXTpage popupSubUpgrade={popupSubUpgrade} setOpen={setOpen}/>
            <SignOutMsg popupSignOut={popupSignOut} setOpen={setOpenSignOut}/>
        </div>
    );
}

