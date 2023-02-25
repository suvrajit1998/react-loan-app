import React, { useEffect } from "react";
import {
  Button,
  colors,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loanSubmit } from "../Api/api";
import { saveLoanSubmitSummary } from "../Redux/LoanSubmitSummary/LoanSubmitSummary.action";
import { getCities, getStates } from "../Redux/State&City/StateCity.action";

export function EligibityForm() {
  const { loanSummary } = useSelector((state) => state?.loanData);
  const { states, cities } = useSelector((state) => state?.stateCity);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    pin_code: "",
    state_id: "",
    city_id: "",
    pan_card: "",
    duration: loanSummary?.data?.duration,
    loan_amount: loanSummary?.data?.loan_amount,
    ifsc_code: "cf534",
    account_number: "f454343557565",
    aadhar_card_front: "",
    aadhar_card_back: "",
    aadhar_front_format: "",
    aadhar_back_format: "",
  });

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    loanSubmit(formData)
      .then((res) => {
        dispatch(saveLoanSubmitSummary(res.data));
        setLoading(false);
        if (res.data?.success) navigate("/loan-submit-summary");
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item sm={6}>
          <Typography>First Name</Typography>
          <Box height={5} />
          <TextField
            value={formData.first_name}
            onChange={handleChange}
            name="first_name"
            variant="outlined"
            fullWidth
            size="small"
            required
          />
        </Grid>
        <Grid item sm={6}>
          <Typography>Last Name</Typography>
          <Box height={5} />
          <TextField
            value={formData.last_name}
            onChange={handleChange}
            name="last_name"
            variant="outlined"
            fullWidth
            size="small"
            required
          />
        </Grid>
        <Grid item sm={12}>
          <Typography>Phone Number</Typography>
          <Box height={5} />
          <TextField
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            variant="outlined"
            fullWidth
            size="small"
            required
          />
        </Grid>
        <Grid item sm={12}>
          <Typography>Address</Typography>
          <Box height={5} />
          <TextField
            value={formData.address}
            onChange={handleChange}
            name="address"
            variant="outlined"
            fullWidth
            size="small"
            required
          />
        </Grid>
        <Grid item sm={12}>
          <Typography>Gender</Typography>
          <Box height={5} />
          <FormControl fullWidth required>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              value={formData.gender}
              name="gender"
              onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12}>
          <Typography>Email</Typography>
          <Box height={5} />
          <TextField
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            size="small"
            required
          />
        </Grid>
        <Grid item sm={12}>
          <Typography>City</Typography>
          <Box height={5} />
          <FormControl fullWidth required>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              value={formData.city_id}
              name="city_id"
              onChange={handleChange}
            >
              {cities?.data ? (
                cities?.data?.map((city) => (
                  <MenuItem value={city?.id}>{city?.city_name}</MenuItem>
                ))
              ) : (
                <MenuItem disabled>no data</MenuItem>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12}>
          <Typography>State</Typography>
          <Box height={5} />
          <FormControl fullWidth required>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              value={formData.state_id}
              name="state_id"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  state_id: e.target.value,
                });
                dispatch(getCities(e.target.value));
              }}
            >
              {states?.data?.map((state) => (
                <MenuItem value={state?.id}>{state?.state}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={12}>
          <Typography>PIN</Typography>
          <Box height={5} />
          <TextField
            value={formData.pin_code}
            onChange={handleChange}
            name="pin_code"
            variant="outlined"
            fullWidth
            size="small"
            required
          />
        </Grid>
        <Grid item sm={12}>
          <Typography>PAN</Typography>
          <Box height={5} />
          <TextField
            value={formData.pan_card}
            onChange={handleChange}
            name="pan_card"
            variant="outlined"
            fullWidth
            size="small"
            required
          />
        </Grid>
        <Grid item sm={6}>
          <Typography>Aadhar Card Front </Typography>
          <Box height={5} />
          <Box
            border={`1px solid ${colors.grey[500]}`}
            padding="2rem 2.2rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {formData.aadhar_card_front === "" ? (
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    getBase64(file).then((res) => {
                      setFormData({ ...formData, aadhar_card_front: res });
                    });
                  }}
                />
                <PhotoCamera />
              </IconButton>
            ) : (
              <img alt="" src={formData.aadhar_card_front} width="100%" />
            )}
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Typography>Aadhar Card Back</Typography>
          <Box height={5} />
          <Box
            border={`1px solid ${colors.grey[500]}`}
            padding="2rem 2.2rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {formData.aadhar_card_back === "" ? (
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    getBase64(file).then((res) => {
                      setFormData({ ...formData, aadhar_card_back: res });
                    });
                  }}
                />
                <PhotoCamera />
              </IconButton>
            ) : (
              <img alt="" src={formData.aadhar_card_back} width="100%" />
            )}
          </Box>
        </Grid>
      </Grid>
      <Box height={20} />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ color: "#ffffff" }}
        disabled={loading}
        type="submit"
      >
        Accept
      </Button>
    </form>
  );
}
