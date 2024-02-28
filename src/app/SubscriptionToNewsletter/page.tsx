"use client"
import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";

function SubToNews() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 10, mb: 5, p: 1 }}>
            <Box>
                <Typography variant="h4">
                    Which emails you would like to recieve?
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", mt: 5 }}>
                    <Box sx={{ display: "flex" }}>
                        <FormControlLabel control={<Checkbox />} label="" />
                        <p><b>Simply dummy text of the printing</b> and<br />
                            typesetting industry. Lorem</p>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <FormControlLabel control={<Checkbox />} label="" />
                        <p><b>Simply dummy text of the printing</b> and<br />
                            typesetting industry. Lorem</p>
                    </Box>      <Box sx={{ display: "flex" }}>
                        <FormControlLabel control={<Checkbox />} label="" />
                        <p><b>Simply dummy text of the printing</b> and<br />
                            typesetting industry. Lorem</p>
                    </Box>      <Box sx={{ display: "flex" }}>
                        <FormControlLabel control={<Checkbox />} label="" />
                        <p><b>Simply dummy text of the printing</b> and<br />
                            typesetting industry. Lorem</p>
                    </Box>      <Box sx={{ display: "flex" }}>
                        <FormControlLabel control={<Checkbox />} label="" />
                        <p><b>Simply dummy text of the printing</b> and<br />
                            typesetting industry. Lorem</p>
                    </Box>      <Box sx={{ display: "flex" }}>
                        <FormControlLabel control={<Checkbox />} label="" />
                        <p><b>Simply dummy text of the printing</b> and<br />
                            typesetting industry. Lorem</p>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <FormControlLabel control={<Checkbox />} label="" />
                        <p><b>Simply dummy text of the printing</b> and<br />
                            typesetting industry. Lorem</p>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Button variant="outlined" sx={{ border: "1px solid black", color: "white", backgroundColor: "#81311A", p: 1, mt: 2, borderRadius: 3, width: "250px" }}><b>Subscribe to newsletter</b></Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SubToNews;