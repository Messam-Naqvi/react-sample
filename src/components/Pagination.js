import React from "react";
import { Pagination as MuiPagination, Stack } from "@mui/material";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const handleChange = (event, page) => {
    onPageChange(page);
  };

  return (
    <Stack spacing={2} sx={{ mt: 4, alignItems: "center" ,marginRight: "90px",}}>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        siblingCount={2}
        boundaryCount={2}
        showFirstButton
        showLastButton
        sx={{
          "& .MuiPaginationItem-root": {
            borderRadius: "8px",
            border: "1px solid #ddd",
            color: "#666",
            fontWeight: 500,
            "&.Mui-selected": {
              backgroundColor: "#fff",
              color: "#000",
              border: "1px solid #000",
            },
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          },
        }}
      />
    </Stack>
  );
}
