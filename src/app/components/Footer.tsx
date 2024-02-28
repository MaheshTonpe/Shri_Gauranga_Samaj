import * as React from 'react';
import { Box, Typography, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <Box bgcolor="#fcdfa0" mt={1}>
            {/* Image */}
            <Box mb={4} display="flex"  >
                <img src="/banner-3 1.png" style={{ width: '100%' }} alt="Banner Image" />
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" p={2}>
                {/* Links Left */}
                <Box mb={4} minWidth={200} >
                    <Typography variant="h5" mb={1} sx={{  }} ><b>Links</b></Typography>
                    <Box display="flex" flexDirection="column">
                        <Box mb={1}>
                            <Typography variant="subtitle2">Gosai Talks Youtube Channel</Typography>
                            <Link href="#" variant="body2">https://www.rupangambhajanram.com</Link>
                        </Box>
                        <Box mb={1}>
                            <Typography variant="subtitle2">Gosai Talks Youtube Channel</Typography>
                            <Link href="#" variant="body2">https://www.rupangambhajanram.com</Link>
                        </Box>
                        <Box mb={1}>
                            <Typography variant="subtitle2">Gosai Talks Youtube Channel</Typography>
                            <Link href="#" variant="body2">https://www.rupangambhajanram.com</Link>
                        </Box>
                        <Box mb={1}>
                            <Typography variant="subtitle2">Gosai Talks Youtube Channel</Typography>
                            <Link href="#" variant="body2">https://www.rupangambhajanram.com</Link>
                        </Box>
                    </Box>
                </Box>
                {/* Links Right */}
                <Box mb={4} minWidth={200}>
                    <Typography variant="h6" mb={1}>&nbsp;</Typography>
                    <Box display="flex" flexDirection="column">
                        <Box mb={1}>
                            <Typography variant="subtitle2">Gosai Talks Youtube Channel</Typography>
                            <Link href="#" variant="body2">https://www.rupangambhajanram.com</Link>
                        </Box>
                        <Box mb={1}>
                            <Typography variant="subtitle2">Gosai Talks Youtube Channel</Typography>
                            <Link href="#" variant="body2">https://www.rupangambhajanram.com</Link>
                        </Box>
                        <Box mb={1}>
                            <Typography variant="subtitle2">Gosai Talks Youtube Channel</Typography>
                            <Link href="#" variant="body2">https://www.rupangambhajanram.com</Link>
                        </Box>
                        <Box mb={1}>
                            <Typography variant="subtitle2">Gosai Talks Youtube Channel</Typography>
                            <Link href="#" variant="body2">https://www.rupangambhajanram.com</Link>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", color: "black", height: "250px", gap: 2 }}>
                    <Divider sx={{mb:"50px"}} orientation="vertical" flexItem />
                    <Divider sx={{mt:"50px"}} orientation="vertical" flexItem />
                </Box>
                {/* Subscribe */}
                <Box mb={4} minWidth={200} >
                    <Typography variant="h5" mb={1}><b>Subscribe</b></Typography>
                    <Typography variant="body2" mb={1}>
                        Join 1.2 Million people<br />
                        from around the world,<br />
                        get wisdom articles<br />
                        delivered in the<br />
                        mailbox for free.
                    </Typography>
                    <button style={{ backgroundColor: "#81311a", color: "white", padding: 8, borderRadius: "12px", border: "3px solidblack" }}><b>Subscribe now</b></button>
                </Box>
                {/* Contact Us */}
                <Box mb={4} minWidth={200}>
                    <Typography variant="h5" mb={1}><b>Contact Us</b></Typography>
                    <Box display="flex" flexDirection="column">
                        <Box mb={1} display="flex" alignItems="center">
                            <LocationOnIcon fontSize="small" sx={{ marginRight: '4px', mb: "60px", marginTop: '2px' }} />
                            <Typography variant="body2">India<br />Rupanuga Bhajan Ashram, Gau Ghat,<br />Madan Mohan Ghera, Parikrama Marg,<br />Vrindavan, UP, 281121</Typography>
                        </Box>
                        <Box mb={1} display="flex" alignItems="center">
                            <PhoneIcon fontSize="small" sx={{ marginRight: '4px' }} />
                            <Typography variant="body2"><Link href="tel:+918868817098">+91 8868817098</Link></Typography>
                        </Box>
                        <Box mb={1} display="flex" alignItems="center">
                            <EmailIcon fontSize="small" sx={{ marginRight: '4px' }} />
                            <Typography variant="body2"><Link href="mailto:gauragopala@gmail.com">gauragopala@gmail.com</Link></Typography>
                        </Box>
                    </Box>
                </Box>
                {/* Connect With Us */}
                <Box mb={4} minWidth={200} display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5" mb={1}><b>Connect With Us</b></Typography>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <IconButton href="#" color="primary">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton href="#" color="primary">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton href="#" color="primary">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton href="#" color="primary">
                            <YouTubeIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;



