import { Grid, Input, Typography } from '@mui/material'
import React, { useRef } from 'react'

export default function Images() {
    const uploadedImage = useRef(null);
    const imageUploader = useRef(null);

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Grid container
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: '10px'
            }}
        >
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={imageUploader}
                style={{
                    display: "none",
                }}
            />
            <Grid item xs={12} sm={6} onClick={() => imageUploader.current.click()} style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: 'center'
            }}>
                <img
                    ref={uploadedImage}
                    style={{
                        width: '100vw',
                        height: '50vh',
                        border: '2px dashed #000000',
                        borderRadius: '20px',
                    }}
                />
            </Grid>
            <Grid item xs={12}>
            <Typography variant="body1" textAlign="center" style={{
                    // display: 'flex',
                    // flexDirection: 'row',
                    // alignItems: 'center'
                }}>Click to upload image</Typography>


            </Grid>
        </Grid>
    );
}