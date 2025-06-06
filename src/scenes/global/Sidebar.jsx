import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import CompareOutlinedIcon from '@mui/icons-material/CompareOutlined';
import ViewTimelineOutlinedIcon from '@mui/icons-material/ViewTimelineOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Statistical Overview"
              to="/"
              icon={<GridViewOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Data Platform Overview"
              to="/platform"
              icon={<DocumentScannerOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Comprision Overview"
              to="/overview"
              icon={<CompareOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="TIMELINE"
              to="/timeline"
              icon={<ViewTimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="EXPLORE REGIONS"
              to="/explore"
              icon={<TravelExploreOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="LOCATIONS"
              to="/locations"
              icon={<LocationOnSharpIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="ASPECTS"
              to="/aspects"
              icon={<AspectRatioOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
