import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getAllService } from "../../../utils/getData";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../../redux/dataSlice";
import { useEffect } from "react";
import { useRouter } from "next/router"; // Import the useRouter hook from Next.js

function MainSearch() {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);
  const router = useRouter(); // Initialize the useRouter hook
  useEffect(() => {
    if (data.length === 0) {
      const fetchData = async () => {
        const serviceData = await getAllService();
        dispatch(setData(serviceData)); // Dispatch the data to the Redux store
      };
      fetchData();
    }
  }, [dispatch, data]); // Include 'data' as a dependency to ensure it's updated

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const searchQuery = event.target.value;
      const selectedOption = data.find((option) => option.name === searchQuery);
      if (selectedOption) {
        router.push({
          pathname: "/Category",
          query: {
            service: selectedOption.id,
            serviceName: selectedOption.name,
          },
        });
      }
    }
  };

  return (
    <>
      <FormControl fullWidth>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={data.map((option) => option.name)}
          className="productSearchField"
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Services"
              InputProps={{
                ...params.InputProps,
                type: "search",
                onKeyPress: handleKeyPress, // Handle the Enter key press
              }}
            />
          )}
        />
      </FormControl>
    </>
  );
}

export default MainSearch;
